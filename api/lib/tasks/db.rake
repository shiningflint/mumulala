# DB helper especially to share the db constant and get file version
module DbHelper
  require 'sequel'
  require 'dotenv'

  ENV['RACK_ENV'] = ENV['RACK_ENV'] || 'development'
  APP_ENV = Dotenv.load
  Sequel.extension :migration

  DB = lambda do
    Sequel.connect(
      adapter: 'postgres',
      host: APP_ENV["DB_HOST_#{ENV['RACK_ENV'].upcase}"],
      database: APP_ENV["DB_#{ENV['RACK_ENV'].upcase}"],
      user: APP_ENV["DB_USER_#{ENV['RACK_ENV'].upcase}"],
      password: APP_ENV["DB_PASSWORD_#{ENV['RACK_ENV'].upcase}"]
    )
  end

  def get_file_version(reverse_index = -1) # rubocop:disable Metrics/AbcSize
    version_db = DB.call
    if version_db.tables.include?(:schema_migrations) &&
       !version_db[:schema_migrations].all.empty? &&
       version_db[:schema_migrations].all[reverse_index]
      filename = version_db[:schema_migrations].all[reverse_index][:filename]
      /^\d+(?=_)/.match(filename).to_s.to_i
    else
      0
    end
  end
end

# rake tasks under db
module DbRakeTasks
  extend Rake::DSL
  extend DbHelper

  namespace :db do
    desc 'Prints current schema version'
    task :version do
      version = get_file_version
      puts "Schema version #{ENV['RACK_ENV']}: #{version}"
    end

    desc 'Perform migration up to latest migration available'
    task :migrate do
      Sequel::Migrator.run(DbHelper::DB.call, 'migrations')
      Rake::Task['db:version'].execute
    end

    desc 'Perform rollback to specified target or full rollback as default'
    task :rollback, :target do |_t, args|
      version = args[:target] || get_file_version(-2)

      Sequel::Migrator.run(DbHelper::DB.call, 'migrations', target: version)
      Rake::Task['db:version'].execute
    end

    desc 'Perform migration reset (full rollback and migration)'
    task :reset do
      Sequel::Migrator.run(DbHelper::DB.call, 'migrations', target: 0)
      Sequel::Migrator.run(DbHelper::DB.call, 'migrations')
      Rake::Task['db:version'].execute
    end
  end
end

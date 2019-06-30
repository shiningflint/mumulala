# Helper module under this namespace
module DbHelpers
  # rubocop:disable Metrics/AbcSize
  def get_file_version(db_object, reverse_index = -1)
    # rubocop:enable Metrics/AbcSize
    version_db = db_object
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
  extend DbHelpers

  namespace :db do
    desc 'Prints current schema version'
    task version: [:load_migration] do
      version = get_file_version(AppDb::DB)
      puts "Schema version #{ENV['RACK_ENV']}: #{version}"
    end

    desc 'Perform migration up to latest migration available'
    task migrate: [:load_migration] do
      Sequel::Migrator.run(AppDb::DB, 'migrations')
      Rake::Task['db:version'].execute
    end

    desc 'Perform rollback to specified target or full rollback as default'
    task :rollback, [:target] => [:load_migration] do |_t, args|
      version = args[:target] || get_file_version(AppDb::DB, -2)

      Sequel::Migrator.run(AppDb::DB, 'migrations', target: version)
      Rake::Task['db:version'].execute
    end

    desc 'Perform migration reset (full rollback and migration)'
    task reset: [:load_migration] do
      Sequel::Migrator.run(AppDb::DB, 'migrations', target: 0)
      Sequel::Migrator.run(AppDb::DB, 'migrations')
      Rake::Task['db:version'].execute
    end
  end
end

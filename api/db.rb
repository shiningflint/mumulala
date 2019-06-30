# database connection module
module AppDb
  require 'dotenv'
  require 'sequel/core'

  abort 'No env files found in db.rb' if Dotenv.load.empty?

  DB_ENV = Dotenv.load
  APP_ENV = ENV['RACK_ENV'] || 'development'

  # Delete APP_DATABASE_URL from the environment, so it isn't accidently
  # passed to subprocesses.
  DB = Sequel.connect(
    adapter: 'postgres',
    host: DB_ENV.delete("DB_HOST_#{APP_ENV.upcase}"),
    database: DB_ENV.delete("DB_#{APP_ENV.upcase}"),
    user: DB_ENV.delete("DB_USER_#{APP_ENV.upcase}"),
    password: DB_ENV.delete("DB_PASSWORD_#{APP_ENV.upcase}")
  )
end

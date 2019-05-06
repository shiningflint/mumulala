require 'dotenv'
require 'sequel/core'

abort 'No env files found in db.rb' if Dotenv.load.empty?

DB_ENV = Dotenv.load

DB = Sequel.connect(
  adapter: 'postgres',
  host: DB_ENV.delete("DB_HOST_#{ENV['RACK_ENV'].upcase}"),
  database: DB_ENV.delete("DB_#{ENV['RACK_ENV'].upcase}"),
  user: DB_ENV.delete("DB_USER_#{ENV['RACK_ENV'].upcase}"),
  password: DB_ENV.delete("DB_PASSWORD_#{ENV['RACK_ENV'].upcase}")
)

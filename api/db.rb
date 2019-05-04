require 'dotenv'
require 'sequel/core'

abort 'No env files found in db.rb' if Dotenv.load.empty?

DB_ENV = Dotenv.load

DB = Sequel.connect(
  adapter: 'postgres',
  host: DB_ENV.delete('DB_HOST'),
  database: DB_ENV.delete('DB'),
  user: DB_ENV.delete('DB_USER'),
  password: DB_ENV.delete('DB_PASSWORD')
)

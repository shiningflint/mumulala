require_relative 'db'
require 'sequel/model'

unless defined?(Unreloader)
  require 'rack/unreloader'
  Unreloader = Rack::Unreloader.new(reload: false)
end

Unreloader.require('models') do |f|
  Sequel::Model.send(:camelize, File.basename(f).sub(/\.rb\z/, ''))
end

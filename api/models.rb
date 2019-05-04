require_relative 'db'
require 'sequel/model'

Unreloader.require('models'){ |f| Sequel::Model.send(:camelize, File.basename(f).sub(/\.rb\z/, '')) }

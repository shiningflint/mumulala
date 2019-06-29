require 'minitest/autorun'
require 'rack/test'

ENV['RACK_ENV'] = 'test'

class SequelTestCase < Minitest::Test
  def run(*args, &block)
    DB.transaction(rollback: :always, auto_savepoint: true) { super }
  end
end

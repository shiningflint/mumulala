require_relative '../../app'
require 'minitest/autorun'
require 'rack/test'

class RecipesTest < Minitest::Test
  include Rack::Test::Methods

  def app
    App
  end

  def test_recipes
    get '/recipes'
    assert last_response.ok?
  end
end

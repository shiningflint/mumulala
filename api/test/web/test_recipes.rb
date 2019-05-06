require_relative 'test_helper'
require_relative '../../app'

class RecipesTest < Minitest::Test
  include Rack::Test::Methods

  def app
    App
  end

  def test_recipes
    get '/recipes'
    assert last_response.not_found?
  end
end

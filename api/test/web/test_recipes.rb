require_relative 'test_helper'
require_relative '../../app'

class RecipesTest < SequelTestCase
  include Rack::Test::Methods

  def setup
    methods_without_recipe = %w[
      test_recipes_sad
      test_create_recipe_no_params
      test_create_recipe_happy
    ]

    add_recipe unless methods_without_recipe.include?(name)
  end

  def add_recipe
    Recipe.insert(name: 'Recipe Test', description: 'Recipe description')
    @recipe = Recipe.last
  end

  def app
    App
  end

  def test_recipes_sad
    get '/recipes'
    assert last_response.not_found?
  end

  def test_recipes_happy
    get '/recipes'
    assert last_response.ok?
  end

  def test_recipe_show_happy
    get "/recipes/#{@recipe.id}"
    assert last_response.ok?
  end

  def test_recipe_show_sad
    get "/recipes/#{@recipe.id + 1}"
    assert last_response.not_found?
  end

  def test_create_recipe_no_params
    post '/recipes'
    assert last_response.ok?
  end

  def test_create_recipe_happy
    params = {
      name: 'Create Test Recipe',
      description: 'A recipe creation for success'
    }
    post '/recipes', params
    assert last_response.ok?
  end

  def test_update_recipe
    params = {
      name: 'Updated Recipe',
      description: 'Updated description'
    }
    patch "/recipes/#{@recipe.id}", params
    assert last_response.ok?
  end

  def test_update_recipe_no_record
    params = {
      name: 'Updated Recipe',
      description: 'Updated description'
    }
    patch "/recipes/#{@recipe.id + 1}", params
    assert last_response.not_found?
  end

  def test_delete_recipe
    delete "/recipes/#{@recipe.id}"
    assert last_response.ok?
  end

  def test_delete_recipe_no_record
    delete "/recipes/#{@recipe.id + 1}"
    assert last_response.not_found?
  end
end

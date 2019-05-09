require_relative 'models'

require 'roda'
require 'json'

class App < Roda
  route do |r|
    response['Content-Type'] = 'application/json'

    r.on "recipes" do
      r.is do
        r.get do
          r.halt if Recipe.all.empty?
          Recipe.all.map{ |re| re.to_hash }.to_json
        end

        r.post do
          params = r.params.merge({
            created_at: Time.now.getutc,
            updated_at: Time.now.getutc
          })
          Recipe.insert(params)
          { status: 'ok', recipe: Recipe.last.to_hash }.to_json
        end
      end

      r.on(:recipe_id, { method: :get }) do |recipe_id|
        r.halt unless Recipe[recipe_id].is_a? Recipe
        Recipe[recipe_id].to_hash.to_json
      end

      r.on(:recipe_id, { method: ['patch', 'put'] }) do |recipe_id|
        r.halt unless Recipe[recipe_id].is_a? Recipe
        params = r.params.merge({ updated_at: Time.now.getutc })
        Recipe[recipe_id].update(params)
        { status: 'ok', recipe: Recipe[recipe_id].to_hash }.to_json
      end

      r.on(:recipe_id, { method: :delete }) do |recipe_id|
        r.halt unless Recipe[recipe_id].is_a? Recipe
        Recipe[recipe_id].delete
        { status: 'ok', message: "deleted recipe #{recipe_id}" }.to_json
      end
    end
  end
end

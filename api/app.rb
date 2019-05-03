require 'roda'
require 'json'

class App < Roda
  route do |r|
    response['Content-Type'] = 'application/json'

    r.on "recipes" do
      r.is do
        { recipes: ['bananas', 'potatoes', 'bacon'] }.to_json
      end

      r.get :ticket_id do |ticket_id|
        { status: 'ok', ticket: ticket_id }.to_json
      end

      r.post do
        { status: 'ok', message: 'created a new recipe' }.to_json
      end

      r.on(:ticket_id, { method: ['patch', 'put'] }) do |ticket_id|
        { status: 'ok', message: "patched or putted recipe #{ticket_id}" }.to_json
      end

      r.on(:ticket_id, { method: :delete }) do |ticket_id|
        { status: 'ok', message: "deleted recipe #{ticket_id}" }.to_json
      end
    end
  end
end

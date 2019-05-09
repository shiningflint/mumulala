require 'rack/unreloader'
require 'rack/cors'

# TODO Only allow this in development mode
use Rack::Cors do
  allow do
    origins '*'
    resource '*',
        methods: :any,
        headers: :any
  end
end

Unreloader = Rack::Unreloader.new(subclasses: %w'Roda'){App}
Unreloader.require 'app.rb'

run Unreloader

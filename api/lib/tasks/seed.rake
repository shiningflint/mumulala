namespace :seed do
  desc 'Seed recipes'
  task :recipes do
    recipes = [
      { name: 'spaghetti', description: 'Bolognese' },
      { name: 'さば塩', description: 'さば塩焼き' },
      { name: 'ゴーヤチャンプル', description: 'Go ya boyz' }
    ]
    recipes.each do |recipe|
      puts recipe
      DB.call[:recipes].insert(recipe)
    end
  end
end

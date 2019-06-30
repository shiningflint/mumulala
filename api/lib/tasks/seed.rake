namespace :seed do
  desc 'Seed recipes'
  task recipes: :load_db do
    recipes = [
      { name: 'spaghetti', description: 'Bolognese' },
      { name: 'さば塩', description: 'さば塩焼き' },
      { name: 'ゴーヤチャンプル', description: 'Go ya boyz' }
    ]
    recipes.each do |recipe|
      puts recipe
      AppDb::DB[:recipes].insert(recipe)
    end
  end
end

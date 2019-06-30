desc 'Run tests'
task :test do
  sh 'ruby ./test/web/test_recipes.rb'
end

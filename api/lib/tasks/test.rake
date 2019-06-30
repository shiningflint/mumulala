# rake tasks for tests
module TestTasks
  extend Rake::DSL

  desc 'Run tests'
  task :test do
    sh 'ruby ./test/web/test_recipes.rb'
  end
end

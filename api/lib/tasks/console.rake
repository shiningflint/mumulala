# rake tasks for the console
module ConsoleTasks
  extend Rake::DSL

  desc 'Starts an irb shell'
  task :console do
    trap('INT', 'IGNORE')
    sh 'irb -r ./models'
  end
end

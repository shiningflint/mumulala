desc 'Starts an irb shell'
task :console do
  trap('INT', 'IGNORE')
  sh 'irb -r ./models'
end

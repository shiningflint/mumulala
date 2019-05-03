docker-compose -f docker-compose.yml build $1 \
&& docker-compose -f docker-compose.yml up --no-deps -d $1 \
&& yes | docker image prune

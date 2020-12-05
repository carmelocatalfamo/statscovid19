cd statscovid19
git pull origin production
cd ..
docker-compose stop statscovid19
docker-compose rm -f statscovid19
docker-compose build statscovid19
docker-compose up -d statscovid19

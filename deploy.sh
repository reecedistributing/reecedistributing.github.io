if [ $1='development' ]
then
    up deploy
else 
    echo 'coolnezz'
    up deploy $1
fi
curl $(up url)
npm install


* React frontend:
(~ npm run build, moved ../backend/public )
~ npm start (React)
~ npm run dev (Next)

* Symfony backend:
Charger les fixtures:
~ php bin/console doctrine:fixtures:load
~ symfony serve


http://localhost:3000/ (/)
http://localhost:8000/ (test symfony ok)



* Tester sur mobile:
front: 
HOST=0.0.0.0 PORT=3000 npm start
back:
php -S 0.0.0.0:8000 -t public 

puis 
http://192.168.1.100:8000 (pour Symfony)
http://192.168.1.100:3000 (pour React)
ou regarder dans le terminal "On Your Network :http://192.168.1.16:3000 "
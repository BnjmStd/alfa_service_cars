cd ~/alfa_service_cars
git pull
npm install
npm run build

sudo rm -rf /var/www/alfa_service_cars/*
sudo cp -r dist/* /var/www/alfa_service_cars/
sudo chown -R www-data:www-data /var/www/alfa_service_cars
sudo chmod -R 755 /var/www/alfa_service_cars
sudo systemctl reload nginx
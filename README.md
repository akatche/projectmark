## How to install the project

- Rename .env.example to .env 
- Change APP_URL, DB_DATABASE, DB_USERNAME, DB_PASSWORD to suit your environment
- Please use Redis or Memcached in CACHE_DRIVER and QUEUE_CONNECTION

Run the following commands in order

- Laravel Installation
```console
composer install
php artisan key:generate
```
- Project Installation
```console
php artisan migrate --seed 
php artisan ziggy:generate "resources/js/ziggy.js"
php artisan optimize
php artisan queue:work
php artisan blog:import-posts
```
- NPM Installation
```console
npm install
npm run production
```

### Running E2E tests
Headless mode
```console
npm run cy:run
```
Visual mode
```console
npm run cy:open
```
### Running Feature and Unit tests
```console
php artisan test
```


### Stack Used:
- Laravel
- Laravel Jetstream (as application scaffold) with Inertia
- Cypress (for E2E testing)
- Tailwind CSS
- MySql

To create the blog style I was inspired on the Tailwind CSS blog 

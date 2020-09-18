## About Laravel

-See index posts (cypress)
-Create post (cypress)
	-Go to page from post page
	-see validations
	-after published, go to post index and see it first
-Homepage (cypress)
-Post detail (cypress)
-Author detail (cypress)

-How to install it

-Rename .env.example to .env 
-Change APP_URL, DB_DATABASE, DB_USERNAME, DB_PASSWORD to suit your needs

-Run the following commands in this order
-php artisan composer install
-php artisan key:generate
-php artisan queue:work (in a separate terminal)
-php artisan ziggy:generate "resources/js/ziggy.js"
-php artisan migrate --seed 
-php artisan blog:import-posts
-php artisan optimize
-npm install
-npm run production
-npm run cy:run (to run cypress tests headless)


Run Feature tests (phpunit)
-php artisan test

Run Visual tests (cypress)
-

Stack Used:
Laravel
Laravel Jetstream (as application scaffold) with Inertia
Cypress (for visual testing)
Tailwind CSS
MySql

To create the blog style I was inspired on the tailwind blog 

g common tasks used in many web projects, such as:
[MIT license](https://opensource.org/licenses/MIT).

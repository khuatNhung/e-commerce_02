const { mix } = require('laravel-mix');

const BOWERS_PATH = 'resources/assets/bowers/';
const ADMIN_PATH = BOWERS_PATH + 'gentelella/';
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');

/**
 * All admin assets tasks.
 */
mix.copy(ADMIN_PATH + 'production/images', 'public/images');

mix.copy([
    BOWERS_PATH + 'bootstrap/fonts',
    BOWERS_PATH + 'font-awesome/fonts',
], 'public/fonts');


mix.styles([
    ADMIN_PATH + 'vendors/bootstrap/dist/css/bootstrap.min.css',
    ADMIN_PATH + 'vendors/font-awesome/css/font-awesome.min.css',
    ADMIN_PATH + 'vendors/nprogress/nprogress.css',
    ADMIN_PATH + 'build/css/custom.min.css',
], 'public/css/admin.min.css');

mix.scripts([
    ADMIN_PATH + 'vendors/jquery/dist/jquery.min.js',
    ADMIN_PATH + 'vendors/bootstrap/dist/js/bootstrap.min.js',
    ADMIN_PATH + 'vendors/fastclick/lib/fastclick.js',
    ADMIN_PATH + 'vendors/nprogress/nprogress.js',
    ADMIN_PATH + 'vendors/validator/validator.js',
    ADMIN_PATH + 'build/js/custom.min.js',
], 'public/js/admin.min.js');



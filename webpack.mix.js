const mix = require('laravel-mix');

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

mix.js('resources/js/app.js', 'public/js')
   .stylus('resources/js/theme/default.styl', 'public/css')
    .copyDirectory('resources/static', 'public/static');
mix.webpackConfig({
    resolve: {
        alias: {
            '@': path.join(__dirname, './resources/js')
        }
    }
})

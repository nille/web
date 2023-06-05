let mix = require('laravel-mix');

mix.disableSuccessNotifications();

mix.copy('src/assets/images', 'dist/images')
    .js('src/assets/js/app.js', 'dist/js')
    .postCss('src/assets/css/app.css', 'dist/css', [
        require('tailwindcss')
    ]
);
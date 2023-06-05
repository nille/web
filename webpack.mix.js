let mix = require('laravel-mix');

require('laravel-mix-simple-image-processing')

mix.disableSuccessNotifications();

mix.copy('src/assets/images', 'dist/images')
    .js('src/assets/js/app.js', 'dist/js')
    .postCss('src/assets/css/app.css', 'dist/css', [
        require('tailwindcss')
    ])
    .imgs({
        source: 'src/assets/images',
        destination: 'dist/images',
        processOriginalImage: true,
        imageminPngquantOptions: { strip: true, quality: [0.6, 1] },
        thumbnailsSizes: [300, 600, 1200],
    });
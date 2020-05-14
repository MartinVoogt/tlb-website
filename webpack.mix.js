const mix = require('laravel-mix');

mix.sass('src/styles/app.scss', 'dist/style')
   .js('src/scripts/app.js', 'dist/js')
   .copy('src/template', 'dist')
   .copy('src/images/', 'dist/images/',false)
   .copy('src/movies/', 'dist/movies/',false)
   .copy('src/php/', 'dist/php/',false)
   .copy('node_modules/@fortawesome/fontawesome-free/webfonts/', 'dist/font/fontawesome/',false)
   .autoload({
      swiper: ['swiper', 'window.swiper'],
      three: ['three']
   })
   .options({
      processCssUrls: false
   });
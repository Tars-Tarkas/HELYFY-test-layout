const plugins = [
    // 'node_modules/swiper/swiper-bundle.min.css',
    'node_modules/slick-carousel/slick/slick-theme.css',
    'node_modules/slick-carousel/slick/slick.css',
    'node_modules/air-datepicker/air-datepicker.css'
];

const {
    src,
    dest
} = require('gulp');
//const sass = require('gulp-sass');
const concat = require('gulp-concat');
const map = require('gulp-sourcemaps');
const chalk = require('chalk');
const sass = require('gulp-sass')(require('sass'));

module.exports = async function libs_style(done) {
    if (plugins.length > 0) {
        return src(plugins)
            .pipe(map.init())
            .pipe(sass({
                outputStyle: 'compressed'
            }).on('error', sass.logError))
            .pipe(concat('libs.min.css'))
            .pipe(map.write('../sourcemaps/'))
            .pipe(dest('build/css/'))
    } else {
        return done(console.log(chalk.redBright('No added CSS/SCSS plugins')));
    }
}
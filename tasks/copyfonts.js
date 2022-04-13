const {
    src,
    dest
} = require('gulp');
const fileExists = require('file-exists');
const gulpif = require('gulp-if');

const webFontsPath = './node_modules/@fortawesome/fontawesome-free/webfonts/*';
const distWebfonts = 'build/fonts/';

const fontawesomeWebfont = './node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.eot';

console.log(fileExists.sync(fontawesomeWebfont));

module.exports = function copyfonts(done) {
    return gulpif(
        fileExists.sync(fontawesomeWebfont),
        src([webFontsPath]).pipe(dest('src/fonts'))
    );


}
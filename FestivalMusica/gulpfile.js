const {src, dest, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

function css(done){
   
    src('src/scss/**/*.scss') //Identificar el archivo .SCSS a compilar
        .pipe( plumber() )
        .pipe( sass() ) //Compilar
        .pipe( dest('build/css') ) //Almacena en el disco duro

    done();
}

function dev(done){

    watch('src/scss/**/*.scss', css) //Los asteriscos sirven para inidcar que se va a compilar en todos los archivos con las extensión .scss
    done();
}


exports.css = css;
exports.dev = dev;
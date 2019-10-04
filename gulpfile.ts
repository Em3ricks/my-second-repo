// Deklaration för TS-konvertering
declare function require(path: string): any;

// Variabler
const {src, dest, watch, series, parallel} = require("gulp");
const concat = require("gulp-concat");
const uglify = require ("gulp-uglify-es").default;
const concatCss = require("gulp-concat-css");
const cleanCSS = require('gulp-clean-css');

// Sökvägar
const files = {
    htmlPath: "src/**/*.html",
    jsPath: "src/**/*.js", 
    cssPath: "src/css/**/*.css",
    mediaPath: "src/media/*"
}

// Task: watcher
function watchTask() {
    watch([
    files.htmlPath,
    files.jsPath, 
    files.cssPath,
    files.mediaPath
], 
    parallel(copyHTML, copyMedia, jsTask, cssCombine));
}


//---------------- GULP TASKS ----------------//

// Task: kopiera HTML
function copyHTML() {
    return src(files.htmlPath)
        // Skickar filerna till mapp med namn "pub"
        .pipe(dest("pub")
    );
}

// Task: kopiera bilder
function copyMedia() {
    return src(files.mediaPath)
        // Skickar filerna till mapp med namn "pub/media"
        .pipe(dest("pub/css/media")
    );
}

// Task: Sammanslå och minifiera js-filer
function jsTask() {
    return src(files.jsPath)
        // Sammanslår alla .js-filer till "main.js"
        .pipe(concat('main.js'))
        // Förkortar "main.js"
        .pipe(uglify())
        // Skickar filen till "pub/js"
        .pipe(dest('pub/js')
    );
}

// Task: Sammanslå CSS-filer
function cssCombine() {
    return src(files.cssPath)
        //Sammanslår all css till "main.css"
      .pipe(concatCss("main.css"))
        // Minifierar CSS-fil
      .pipe(cleanCSS({compatibility:'ie8'}))
        //Skickar sammanslagen fil till "pub/css"
      .pipe(dest('pub/css'));
}

// Huvudkommandot 'Gulp' sätter igång samtliga funktioner 
// Funktionen 'watchTask' spårar alla ändringar och håller live-filen uppdaterad
exports.default = series(
    parallel(copyHTML, copyMedia, jsTask, cssCombine),
    watchTask
);

// Kommando för att övervaka och flytta ändringar från sass-fil till css
// Bör implementeras i en funktion!!

// sass --watch src/sass/style2.scss:src/css/style-index2.css
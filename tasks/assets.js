const { src, dest, parallel, series } = require('gulp');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');

function copyHtml() {
  return src('app/renderer/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('build/renderer'));
}

function copyFonts() {
  return src('app/assets/fonts/*').pipe(dest('build/assets/fonts'));
}

function copyIcons() {
  return src('app/assets/img/*').pipe(dest('build/assets/img'));
}

function copyImages() {
  return src('app/assets/icons/*')
    .pipe(imagemin())
    .pipe(dest('build/assets/icons'));
}

copyHtml.displayName = 'copy-html';
copyFonts.displayName = 'copy-fonts';
copyIcons.displayName = 'copy-icons';
copyImages.displayName = 'copy-images';

exports.copyHtml = copyHtml;
exports.copyFonts = copyFonts;
exports.copyIcons = copyIcons;
exports.copyImages = copyImages;

exports.start = series(copyHtml, copyFonts, copyIcons, copyImages);
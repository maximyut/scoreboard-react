const { parallel, series, watch } = require('gulp');
const electron = require('./electron');
const hotreload = require('./hotreload');
const assets = require('./assets');
const scripts = require('./scripts');

function watchMainScripts() {
  return watch(['app/main/**/*.js'], series(scripts.developBuild, electron.stop, electron.start));
}

function watchRendererScripts() {
  return watch(['app/renderer/**/*.js'], series(scripts.developBuild, hotreload.reload));
}

function watchHtml() {
  return watch(
    ['app/renderer/*.html'],
    series(assets.copyHtml, hotreload.inject, hotreload.reload),
  );
}

function watchAssets() {
  return watch(
    ['app/assets/**/*'],
    series(assets.copyImages, assets.copyFonts, assets.copyIcons, hotreload.inject, hotreload.reload),
  );
}

watchMainScripts.displayName = 'watch-main-scripts';
watchRendererScripts.displayName = 'watch-renderer-scripts';
watchHtml.displayName = 'watch-html';

exports.start = series(
  assets.start,
  scripts.developBuild,
  hotreload.start,
  electron.start,
  parallel(watchMainScripts, watchRendererScripts, watchHtml, watchAssets),
);

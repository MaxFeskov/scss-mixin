const {
  $, taskPath: path,
} = global;

const gulp = require('gulp');
const del = require('del');

const gulpWatch = gulp.watch;

gulp.task('clean:html', () => del(`${path.build.html}*.html`));

gulp.task('build:html', () =>
  gulp
    .src(path.src.html)
    .pipe($.plumber({ errorHandler: global.errorHandler }))
    .pipe($.pug({ basedir: '.' }))
    .pipe($.prettydiff({
      lang: 'html',
      mode: 'beautify',
      inchar: ' ',
      insize: 2,
      force_indent: true,
      wrap: 0,
      crlf: path.src.crlf,
      textpreserve: true,
      spaceclose: true,
      newline: true,
    }))
    .pipe($.insert.append(path.src.lineending))
    .pipe($.htmllint())
    .pipe(gulp.dest(path.build.html)));

gulp.task('dev:html', gulp.series('build:html'));

gulp.task('watch:html', () => gulpWatch(path.watch.html, gulp.series('dev:html', 'server:reload')));

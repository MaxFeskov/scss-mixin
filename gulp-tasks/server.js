const gulp = require("gulp");
const browserSync = require("browser-sync").create();

gulp.task("server:init", () => {
  browserSync.init({
    rewriteRules: [
      {
        match: /Content-Security-Policy/,
        fn() {
          return "DISABLED-Content-Security-Policy";
        }
      }
    ],
    port: 8080,
    ui: false,
    server: { baseDir: "./" },
    reloadDelay: 100
  });
});

gulp.task("server:reload", done => {
  browserSync.reload();
  done();
});

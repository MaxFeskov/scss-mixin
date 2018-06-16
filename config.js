const srcPath = {
  crlf: true,
  lineending: '\r\n',
  compassHelperTemplate: './gulp-tasks/scss-imagehelper.mustache',
  font: './src/fonts/**/*.*',
  html: ['src/pug/*.pug', '!src/pug/_*.pug'],
  icon: './src/icons/*.svg',
  iconFontTemplate: './gulp-tasks/_icons.mustache',
  image: ['./src/img/**/*.*', '!src/img/images/**/*.*'],
  style: './src/scss/*.scss',
};

const buildPath = {
  compassHelper: './src/scss/helpers/',
  font: './build/fonts/',
  html: './',
  icon: './build/fonts-icon/iconFont',
  iconFontName: 'iconFont',
  iconHelper: './src/scss/helpers/',
  image: './build/img/',
  style: './build/css/',
};

let watchPath = {
  html: './src/pug/**/*.pug',
  style: './src/scss/**/*.scss',
};

// src path is default watch path
watchPath = Object.assign({}, srcPath, watchPath);

module.exports = { path: {
  build: buildPath,
  src: srcPath,
  watch: watchPath,
} };

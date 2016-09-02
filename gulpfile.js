// eslint-disable-next-line
'use strict'
const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const source = require('vinyl-source-stream');
const browserify = require('browserify');
const minifyCss = require('gulp-minify-css');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const pkg = require('./package.json');

const paths = {
  build: 'dist',
  gh_pages: `docs/${pkg.version}`,
  main_css: 'src/stylesheets/main.scss',
  js: 'src/components/**/*.js*',
  static: 'static',
  ui_components: './node_modules/watson-developer-cloud-ui-components',
};

gulp.task('css', () =>
  gulp.src(paths.main_css)
    .pipe(
      sass({
        errLogToConsole: true,
        includePaths: ['./node_modules'],
        outputStyle: 'nested',
      }).on('error', sass.logError)
    )
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false,
    }))
    .pipe(rename(`css/${pkg.name}.css`))
    .pipe(gulp.dest(paths.build))
    .pipe(gulp.dest(paths.gh_pages))
    .pipe(minifyCss())
    .pipe(rename(`css/${pkg.name}.min.css`))
    .pipe(gulp.dest(paths.build))
    .pipe(gulp.dest(paths.gh_pages))
);


// concat, minimize, uglify components into a bundle
gulp.task('js', ['components'], () => {
  const createJsBundle = (isProduction) => {
    let bundler = browserify({
      extensions: ['.js'],
      entries: `${paths.build}/components/index.js`,
      standalone: 'WDC',
      debug: true,
    });
    if (isProduction) {
      bundler = bundler.plugin('minifyify', {
        map: true,
        output: `${paths.build}/${pkg.name}.min.js.map`,
        compress: {
          drop_debugger: true,
          drop_console: true,
        },
      });
      bundler = bundler.plugin('uglifyify', { global: true });
    }
    bundler.bundle().on('error', (err) =>
      // eslint-disable-next-line
      console.log('[browserify error] prod:', isProduction, err.message)
    )
    .pipe(source(`${pkg.name}${isProduction ? '.min' : ''}.js`))
    .pipe(gulp.dest(paths.build))
    .pipe(gulp.dest(paths.gh_pages));
  };

  createJsBundle(false); // uncompressed js with source maps
  createJsBundle(true);  // minimized and uglified js
});

// compile the components and place them in dist.
gulp.task('components', () =>
  gulp.src(paths.js)
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015', 'stage-0', 'react'],
      plugins: ['transform-object-assign', 'add-module-exports'],
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(`${paths.build}/components`))
);

// merge ui-component fonts and static fonts in this library
gulp.task('fonts', () =>
  gulp.src([
    `${paths.ui_components}/dist/fonts/**`,
    `${paths.static}/fonts/**`,
  ])
  .pipe(gulp.dest(`${paths.build}/fonts`))
  .pipe(gulp.dest(`${paths.gh_pages}/fonts`))
);

// merge ui-component images and static images in this library
gulp.task('images', () =>
  gulp.src([
    `${paths.ui_components}/dist/images/**`,
    `${paths.static}/images/**`,
  ])
  .pipe(gulp.dest(`${paths.build}/images`))
  .pipe(gulp.dest(`${paths.gh_pages}/images`))
);

gulp.task('build', ['images', 'fonts', 'css', 'components', 'js']);

gulp.task('default', ['build']);

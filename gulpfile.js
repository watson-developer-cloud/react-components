// eslint-disable-next-line
'use strict'
const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const ghPages = require('gulp-gh-pages');
const autoprefixer = require('gulp-autoprefixer');
const minifyCss = require('gulp-minify-css');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const source = require('vinyl-source-stream');
const browserify = require('browserify');
const browserSync = require('browser-sync').create();

const reloadBrowser = (done) => {
  browserSync.reload();
  done();
};

const pkg = require('./package.json');

const paths = {
  build: 'dist',
  main_css: 'src/stylesheets/main.scss',
  js: 'src/components/**/*.js*',
  static: 'static',
  example_css: 'example/src/app.scss',
  example_js: 'example/src/index.js',
  example_build: 'example/build',
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
    .pipe(minifyCss())
    .pipe(rename(`css/${pkg.name}.min.css`))
    .pipe(gulp.dest(paths.build))
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
        output: `${paths.build}/js/${pkg.name}.min.js.map`,
        compress: {
          drop_debugger: true,
          drop_console: true,
        },
      });
      bundler = bundler.plugin('uglifyify', { global: true });
    }
    return bundler.bundle().on('error', (err) =>
      // eslint-disable-next-line
      console.log('[browserify error] prod:', isProduction, err.message)
    )
    .pipe(source(`js/${pkg.name}${isProduction ? '.min' : ''}.js`))
    .pipe(gulp.dest(paths.build));
  };

  return [
    createJsBundle(false), // uncompressed js with source maps
    createJsBundle(true),  // minimized and uglified js
  ];
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
    .pipe(browserSync.stream())
);

// merge ui-component fonts and static fonts in this library
gulp.task('fonts', () =>
  gulp.src(`${paths.static}/fonts/**`)
  .pipe(gulp.dest(`${paths.build}/fonts`))
);

// merge ui-component images and static images in this library
gulp.task('images', () =>
  gulp.src(`${paths.static}/images/**`)
  .pipe(imagemin())
  .pipe(gulp.dest(`${paths.build}/images`))
);

gulp.task('prepare-site', ['build', 'example'], () =>
  [
    gulp.src(`${paths.build}/images/**/*`).pipe(gulp.dest('gh-pages/images')),
    gulp.src(`${paths.build}/fonts/**/*`).pipe(gulp.dest('gh-pages/fonts')),
    gulp.src(['example/**/*', '!example/src/**']).pipe(gulp.dest('gh-pages')),
  ]
);

gulp.task('gh-pages', ['prepare-site'], () =>
  gulp.src('gh-pages/**/*').pipe(ghPages({ force: true }))
);

gulp.task('example-css', () =>
  gulp.src(paths.example_css)
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
    .pipe(rename('bundle.css'))
    .pipe(gulp.dest(paths.example_build))
    .pipe(browserSync.stream())
);

gulp.task('example-js', () =>
  browserify(paths.example_js)
  .transform('babelify', {
    presets: ['es2015', 'stage-0', 'react'],
    plugins: ['transform-object-assign'],
  }).bundle().on('error', (err) =>
    // eslint-disable-next-line
    console.log('[browserify error]', err.message)
  )
  .pipe(source('bundle.js'))
  .pipe(gulp.dest(paths.example_build))
);

gulp.task('example-js-watch', ['example-js'], reloadBrowser);

gulp.task('build', ['images', 'fonts', 'css', 'components', 'js', 'example']);
gulp.task('example', ['example-css', 'example-js']);

gulp.task('default', ['build']);

gulp.task('serve', ['example'], () => {
  browserSync.init({
    notify: true,
    ui: { port: 3000 },
    server: ['./dist', './example'],
  });

  gulp.watch(['src/stylesheets/**/*.scss', 'example/src/**/*.scss'], ['example-css']);
  gulp.watch(['src/components/**/*.js*', 'example/src/**/*.js*'], ['example-js-watch']);
  gulp.watch('example/*.html').on('change', browserSync.reload);
});


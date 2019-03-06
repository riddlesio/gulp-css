/**
 * Gulp task for CSS compilation using PostCSS
 * @param  {Function} read      A factory function provided by the super task which
 *                              can be used to provide additional pipes up front
 *                              (eg. error catching).
 *                              This function should return a stream when passed a source.
 * @param  {Function} write     A function through which a stream can be piped in order
 *                              to write its contents to a predefined destination.
 * @param  {Object}   config    The plugin configuration as described in README.md.
 * @return {Function}           A function which executes the gulp task when called
 *                              and returns a gulp stream.
 */
const task = (read, write, config) => () => {

    const
        prefix                  = require('gulp-autoprefixer'),
        concat                  = require('gulp-concat'),
        cssnano                 = require('gulp-cssnano'),
        gulpif                  = require('gulp-if'),
        postcss                 = require('gulp-postcss'),
        rename                  = require('gulp-rename'),
        sourcemap               = require('gulp-sourcemaps'),
        postcssBrowserReporter  = require('postcss-browser-reporter'),
        cssnext                 = require('postcss-cssnext'),
        postcssImport           = require('postcss-import'),
        postcssReporter         = require('postcss-reporter'),
        postcssUrl              = require('postcss-url'),

        debug                   = config.environment.debug,
        bundle                  = config.bundle;

    return read(config.src)
        .pipe(gulpif(debug, sourcemap.init()))
        .pipe(concat(bundle.name))
        .pipe(postcss([
            postcssImport(),
            postcssUrl(),
            cssnext(),
            postcssBrowserReporter(),
            postcssReporter()
        ]))
        .pipe(prefix(config.autoprefixer))
        .pipe(cssnano())
        .pipe(gulpif(debug, sourcemap.write()))
        .pipe(write(bundle.dest));
};

module.exports = task;

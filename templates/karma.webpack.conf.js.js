var path = require('path');
var webpackConfig = require('./config/webpack.test.js');
webpackConfig.entry = {app: './src/test.app.ts'};

module.exports = function(config) {
  config.set({
    basePath: '',
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    frameworks: ['jasmine'],
    files: [
      'src/test.app.ts',
      'src/**/*.spec.ts'
    ],
    exclude: [
    ],
    preprocessors: {
      'src/test.app.ts': ['webpack'],
      'src/**/*.spec.ts': ['webpack']
    },
    reporters: ['verbose'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity,
    phantomjsLauncher: {
      exitOnResourceError: true
    },
    plugins:[
      require('karma-webpack'),
      ('karma-jasmine'),
      ('karma-phantomjs-launcher'),
      ('karma-verbose-reporter')
    ]
  });
};

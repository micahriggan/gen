var templateGenerator = require('./template.js');
module.exports = function() {

  var files = [
    'jest.config.js',
    '.editorconfig',
    'tslint.json',
    'tsconfig.json',
    '.gitignore',
  ];

  files.forEach((dotFile) => {
    templateGenerator(dotFile);
  });
};

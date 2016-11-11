var templateGenerator = require('./template.js');
module.exports = function() {

  var files = [
    '.editorconfig',
    '.eslintignore',
    '.eslintrc',
    '.gitignore',
    '.tern-project',
    '.tmuxp.yaml'
  ];

  files.forEach((dotFile) => {
    templateGenerator(dotFile);
  });
};

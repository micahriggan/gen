var templateGenerator = require('./template.js');
const {execSync} = require('child_process');
module.exports = function() {

  var files = [
    'jest.config.js',
    '.editorconfig',
    'tslint.json',
    'tsconfig.json',
    '.gitignore',
    'ts-package.json',
    'test.spec.ts'
  ];

  files.forEach((dotFile) => {
    templateGenerator(dotFile);
  });

  execSync('mkdir -p src tests');
  execSync('touch src/index.ts');
  execSync('mv ts-package.json package.json');
  execSync('mv test.spec.ts tests/');
  console.log("Project setup, please run npm i");
};

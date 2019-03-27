const {execSync} = require('child_process');
module.exports = function (fileName = 'template.md') {
  execSync(`npx hercule ${fileName} -o Readme.md`)
}

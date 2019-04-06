const {execSync} = require('child_process');
module.exports = function (fileName = 'template.md') {
  const command =  `npx hercule ${fileName} -o Readme.md`;
  console.log('>', command);
  execSync(command)
}

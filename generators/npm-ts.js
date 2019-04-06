const {execSync} = require('child_process');
module.exports = function (package) {
  const command =  `npm install --save ${package} && npm install --save-dev @types/${package}`;
  console.log('>', command);
  execSync(command)
}



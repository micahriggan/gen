var fs = require('fs');
var path = require('path');
module.exports = function(templateData, data) {
  var fileName = templateData;
  var templateName = templateData;
  if (templateData.hasOwnProperty('template'))
    templateName = templateData.template;
  if (templateData.hasOwnProperty('file'))
    fileName = templateData.file;
  const basePath = path.resolve(__dirname, '../templates/');
  const templatePath = path.join(basePath, templateName + '.js');
  if(!fs.existsSync(templatePath)) {
    console.log('Please select a valid generator from the list');
    const isDirectory = (path) => fs.lstatSync(path).isDirectory();
    const templates = fs.readdirSync(basePath).map(t => t.slice(0, t.lastIndexOf('.js')))
    console.log(templates)
    return;
  }
  var template = require(templatePath);
  if (typeof(template) === 'function'){
    template = template(data);
  }
  fs.writeFileSync(fileName, template, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log( `${fileName} created via template : ${templateName}`);
    }
  });

};

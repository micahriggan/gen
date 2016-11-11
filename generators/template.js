var fs = require('fs');
var path = require('path');
module.exports = function(templateData, data) {
  var fileName = templateData;
  var templateName = templateData;
  if (templateData.hasOwnProperty('template'))
    templateName = templateData.template;
  if (templateData.hasOwnProperty('file'))
    fileName = templateData.file;
  var template = require(path.join('../templates/', templateName));
  if (typeof(template) === 'function')
    template = template(data);
  fs.writeFile(fileName, template, (err) => {
    if (err)
      console.log(err);
    else console.log( `${fileName} created via template : ${templateName}`);
  });

};

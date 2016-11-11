var templateGenerator = require('./template');
var humps = require('humps');
module.exports = function(componentName) {

  var ngCompName = humps.camelize(componentName);
  var ngContName = humps.pascalize(componentName);
  var ngHtmlTag = humps.decamelize(componentName, {
    separator: '-'
  });
  var data = {
    functionName: ngContName,
    componentName: ngCompName,
    htmlTag: ngHtmlTag
  };

  [{
    template: 'ng-component.html',
    file: `${ngHtmlTag}.html`
  }, {
    template: 'ng-component.js',
    file: `${ngHtmlTag}.js`
  }].forEach((template) => {
    templateGenerator(template, data);
  });

};

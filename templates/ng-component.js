// data.functionName
// data.componentName
// data.htmlTag
module.exports = function(data) {
  var template = `function ${data.functionName}(){

  }
angular.module().component('${data.componentName}', {
  controller: ${data.functionName},
  template: require('./${data.htmlTag}.html')
});
`;
  return template;
};

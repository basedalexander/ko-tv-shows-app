define(['knockout', 'knockout.punches'], function(ko) {

  // prop='((value))' binding for ko-compoents .
  ko.punches.utils.addNodePreprocessor(function(node) {
    if (node.nodeType !== 1)
      return null;

    var params = node.getAttribute('params');
    params = params ? [params] : [];

    [].forEach.call(node.attributes, function(attr) {
      if (attr.name !== 'params') {
        if (attr.value.slice(0, 2) === '((' && attr.value.slice(-2) === '))')
          params.push(attr.name + ':' + attr.value.slice(2, -2)),
          node.removeAttribute(attr.name);
      }
    });
    if (params.length > 0) node.setAttribute('params', params.join(','));
  });

});
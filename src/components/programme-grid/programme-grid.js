define([
  'knockout',
  'text!./programme-grid.html'
], function (ko, view) {


  var viewModel = function () {
    this.channels = ko.observableArray();

    $.getJSON('/db/channels.json', this.channels);
  };

  return {
    viewModel: viewModel,
    template: view
  }
});
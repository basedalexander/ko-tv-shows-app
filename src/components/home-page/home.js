define(["knockout", "text!./home.html"], function(ko, homeTemplate) {

  function HomeViewModel(route) {
    this.message = 'Welcome to Tv shows!';
    ko.track(this, ['message']);
  }

  HomeViewModel.prototype.doSomething = function() {
    this.message = 'You invoked doSomething() on the viewmodel.';
  };

  return { viewModel: HomeViewModel, template: homeTemplate };
});

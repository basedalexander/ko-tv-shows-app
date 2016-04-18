define([
  'jquery',
  'knockout',
  './router',
  './bindings',
  'semantic',
  'knockout-es5',
  'knockout-projections',
  'knockout.punches'
], function($, ko, router) {

  // Components can be packaged as AMD modules, such as the following:
  ko.components.register('nav-bar', { require: 'components/nav-bar/nav-bar' });
  ko.components.register('home-page', { require: 'components/home-page/home' });
  ko.components.register('programme-grid', { require: 'components/programme-grid/programme-grid' });

  // ... or for template-only components, you can just point to a .html file directly:
  ko.components.register('about-page', {
    template: { require: 'text!components/about-page/about.html' }
  });


  // Start the application
  ko.punches.enableAll();
  ko.applyBindings({ route: router.currentRoute });
});

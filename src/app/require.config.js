// require.js looks for the following global when initializing
var require = {
    baseUrl: ".",
    paths: {
        "semantic":             "bower_modules/semantic-ui/dist/semantic.min",
        "crossroads":           "bower_modules/crossroads/dist/crossroads.min",
        "hasher":               "bower_modules/hasher/dist/js/hasher.min",
        "jquery":               "bower_modules/jquery/dist/jquery",
        "knockout":             "bower_modules/knockout/dist/knockout",
        "knockout.punches":     "bower_modules/knockout.punches/knockout.punches.min",
        "knockout-projections": "bower_modules/knockout-projections/dist/knockout-projections",
        "signals":              "bower_modules/js-signals/dist/signals.min",
        "text":                 "bower_modules/requirejs-text/text",
        "knockout-es5":         "bower_modules/knockout-es5/dist/knockout-es5.min",
        "app":                  "app/"
    },
    shim: {
        "semantic": { deps: ["jquery"] }
    }
};

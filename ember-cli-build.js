/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  // jQuery emoji picker from https://github.com/wedgies/jquery-emoji-picker
  app.import('bower_components/jquery-emoji-picker/css/jquery.emojipicker.css');
  app.import('bower_components/jquery-emoji-picker/js/jquery.emojipicker.js');

  // Emoji data from Twitter's Emoji library
  app.import('bower_components/jquery-emoji-picker/css/jquery.emojipicker.tw.css');

  // jQuery library for managing carets in text inputs/textareas
  app.import('bower_components/jquery.caret/src/jquery.caret.js');

  return app.toTree();
};

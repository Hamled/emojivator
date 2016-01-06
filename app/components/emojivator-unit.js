import Ember from 'ember';

export default Ember.Component.extend({
  input: "",
  output: "",
  problem: null,

  actions: {
    transformInput() {
      var transforms = this.get('problem').get('transforms').map(function(transform) {
        var [pattern, replacement] = transform;
        return [new RegExp(pattern), replacement];
      });

      var transform = function(depth, input) {
        if(depth >= 20) {
          return "ERROR";
        }

        var match = transforms.find(function(item) {
          return (pattern = item[0]).test(input);
        });

        if(match) {
          var [pattern, replacement] = match;
          return transform(++depth, input.replace(pattern, replacement));
        }

        return input;
      };

      this.set('output', transform(0, this.get('input')));
    }
  }
});

import Ember from 'ember';

var HistoryEntry = Ember.Object.extend({
  input: "",
  output: ""
});

export default Ember.Component.extend({
  output: "",
  history: [],
  problem: null,

  actions: {
    transformInput() {
      var transforms = this.get('problem').get('emojivator').get('transforms').map(function(transform) {
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

      var input = this.get('emojiPicker').get('input');
      var output = transform(0, input);

      this.set('output', output);
      this.get('history').unshiftObject(HistoryEntry.create({
        input: input,
        output: output
      }));

      // Add any new emojis from the output into the picker
      this.get('emojiPicker').addEmojis(output);
    }
  }
});

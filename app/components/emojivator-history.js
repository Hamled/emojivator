import Ember from 'ember';

export default Ember.Component.extend({
  history: [],
  inputFilter: "",
  outputFilter: "",

  filteredHistory: Ember.computed('history.[]', 'inputFilter', 'outputFilter', function() {
    var inputFilterEmojis = this.get('inputFilter').splitByCodePoint();
    var outputFilterEmojis = this.get('outputFilter').splitByCodePoint();

    return this.get('history').filter(function(entry) {
      var matchesInputFilter = inputFilterEmojis.every(function(emoji) {
        return entry.input.includes(String.fromCodePoint(emoji));
      }) || inputFilterEmojis.length === 0;

      var matchesOutputFilter = outputFilterEmojis.every(function(emoji) {
        return entry.output.includes(String.fromCodePoint(emoji));
      }) || outputFilterEmojis.length === 0;

      return matchesInputFilter && matchesOutputFilter;
    });
  })
});

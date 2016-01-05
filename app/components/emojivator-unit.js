import Ember from 'ember';

export default Ember.Component.extend({
  input: "",
  output: "",
  problem: null,

  actions: {
    transformInput() {
      this.set('output', this.get('input'));
    }
  }
});

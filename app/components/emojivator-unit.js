import Ember from 'ember';

export default Ember.Component.extend({
  input: "",
  output: "",
  actions: {
    transformInput() {
      this.set('output', this.get('input'));
    }
  }
});

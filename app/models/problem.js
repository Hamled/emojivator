import DS from 'ember-data';

export default DS.Model.extend({
  validInputs: DS.attr("string"),
  target: DS.attr("string"),
  transforms: DS.attr()
});

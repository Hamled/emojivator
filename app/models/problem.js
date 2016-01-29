import DS from 'ember-data';

export default DS.Model.extend({
  emojivator: DS.belongsTo("emojivator"),
  validInputs: DS.attr("string"),
  target: DS.attr("string"),
});

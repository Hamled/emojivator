import DS from 'ember-data';

export default DS.Model.extend({
  targetOutput: DS.attr("string"),
  transformLogic: DS.attr()
});

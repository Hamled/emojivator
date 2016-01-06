import DS from 'ember-data';

export default DS.Model.extend({
  target: DS.attr("string"),
  transforms: DS.attr()
});

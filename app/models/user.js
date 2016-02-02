import DS from 'ember-data';

export default DS.Model.extend({
  currentProblem: DS.belongsTo("problem"),
  emojiMap: DS.attr(""),
  history: DS.attr("")
});

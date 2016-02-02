import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    return this.get("session").fetch().catch(function() {});
  },

  actions: {
    signIn: function(provider) {
      var route = this;

      this.get("session").open("firebase", { provider: provider }).then(function(data) {
        var user = route.store.findRecord('user', data.uid);
        if (!user) {
          var firstProblem = route.store.findRecord('problem', {
            orderBy: 'sortId',
            limitToFirst: 1
          });
          var newUser = route.store.createRecord('user', {
            currentProblem: firstProblem,
            emojiMap: route.modelFor('user').buildEmojiMap(),
            history: []
          });
          newUser.save();
          user = newUser;
        }

        this.set("user", user);
        route.transitionTo('problems');
      }, function(error) {
        console.log(error);
      });
    },
    signOut: function() {
      this.get('session').close();
    }
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    return this.get("session").fetch().catch(function() {});
  },

  actions: {
    signIn: function(provider) {
      var route = this;

      this.get("session").open("firebase", { provider: provider }).then(function(data) {
        console.log(data.currentUser);
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

import Ember from 'ember';

var IndexRoute = Ember.Route.extend({
	beforeModel: function() {
		this.transitionTo('home');
	},
});

export default IndexRoute;
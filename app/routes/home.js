import Ember from 'ember';

var HomeRoute = Ember.Route.extend({
	renderTemplate: function() {
	 this.render('home');
	},
	beforeModel: function() {
		this.transitionTo('category', {queryParams: {categoryId: 'Meat'}});
	}
});

export default HomeRoute;

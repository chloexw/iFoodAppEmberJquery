import Ember from 'ember';
var ApplicationController = Ember.ArrayController.extend({
	actions: {
		search: function(input) {
			this.transitionTo('search', {queryParams: {keyword: input}});
		}
	}
});

export default ApplicationController;
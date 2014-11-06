import Ember from 'ember';

var CategoryController = Ember.Controller.extend({
	queryParams: ['categoryId'],
	categoryId: '',
});

export default CategoryController;
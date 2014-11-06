import Ember from 'ember';

var ListRoute = Ember.Route.extend({
	model: function() {
		var self = this;
		var test =   
		  	$.ajax({
			    //record the data
			      url: 'http://localhost:3000/comment/get',
			      data:  {
			      	dishId: self.controllerFor('detail').dishId
			      },
			      type: 'POST',
			      success: function(data) {
			      	return data;
			      }
	       });
		return test;
	}
});

export default ListRoute;
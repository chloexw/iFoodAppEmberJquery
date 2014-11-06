import Ember from 'ember';

var CommentsController = Ember.Controller.extend({
	rate: 0,
	name: '',
	note:'',
	actions: {
		submit: function() {
			var currId = this.controllerFor('detail').dishId;
			var self = this;
			$.ajax({
			    //record the data
			      url: 'http://localhost:3000/comment/add',
			      data:  {
			        "userName": self.get('name'),
			        "dishId": currId,
			        "content": self.get("note"),
			        "rate": self.get('rate'),
			        "date": $.datepicker.formatDate('M dd, yy', new Date())
			      },
			      type: 'POST',
			      success: function(data) {
			      	self.set('name', '');
			      	self.set('rate', 0);
			      	self.set('note', '');
			      	self.transitionTo('list');
			      }
	       });
		}
	}
});

export default CommentsController;
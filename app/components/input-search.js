import Ember from 'ember';

var InputSearchComponent = Ember.Component.extend({
	input: '',
	actions: {
		sendaction: function() {
			this.sendAction('action',this.get('input'));
		}
	},
    setInput: function() {
		$(function() {
			var availableTags = [
			  "cheesecake",
			  "macaroon",
			  "salmon",
			  "beef",
			  "pork",
			  "fish",
			  "turkey",
			  "tofu",
			  "carrot",
			  "brocoli",
			  "tomato",
			  "Groovy",
			  "letture",
			  "duck",
			  "asparagus",
			  "pudding",
			  "puff",
			  "clam",
			  "pumpkin"
			];
			$( "#tags" ).autocomplete({
			  source: availableTags
			});
  		});
    }.on('didInsertElement')
});

export default InputSearchComponent;
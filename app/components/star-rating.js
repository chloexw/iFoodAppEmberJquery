import Ember from 'ember';

// http://wintellect.com/blogs/nstieglitz/ember-components-%E2%80%93-build-a-star-rating-component
// with some mondifications in the template
var StarRatingComponent = Ember.Component.extend({
    maxStars: 0,
    starRating: 0,
    stars: [],
    tagName: 'span',
    clickable:false,
    actions: {
        click: function(star,clickable){
            if(clickable){    
            this.set('starRating', star.index);
            this.sendAction('action', star.index);
            }
        }
    },
    setRating: function() {
        var stars = [], i = 0;
        var starRating = this.get('starRating');
        for(i = 0; i < this.get('maxStars'); i++){
            stars.pushObject(Ember.Object.create({empty:i >= starRating, index:i+1}));
        }
        this.set('stars', stars);
    }.observes('starRating').on('didInsertElement')
});

export default StarRatingComponent;
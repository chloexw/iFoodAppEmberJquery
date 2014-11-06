import Ember from 'ember';

var FlexSliderComponent = Ember.Component.extend({
    classNames: ['flexslider'],
    setSlider: function() {
      $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 210,
        itemMargin: 5,
        minItems: 2,
        maxItems: 4
      });
    }.on('didInsertElement')
});

export default FlexSliderComponent;
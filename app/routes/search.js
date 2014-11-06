import Ember from 'ember';
var SearchRoute = Ember.Route.extend({
  queryParams: {
   keyword: {
    refreshModel: true
   }
  },
  renderTemplate: function() {
     this.render('search');
  },
  model:function(params){
   var dataList = $.ajax({
    //search the data on DB
      url: 'http://localhost:3000/search',
      data:  {
      "search_word": params.keyword
      },
      type: 'POST',
      success: function(data) {
        return data;
      },
      async: false,
      error: function(xhr, status, error) {
        console.log(xhr);
        console.log(status);
        console.log(error);
      }
    });
   return dataList;
  }

});

export default SearchRoute;
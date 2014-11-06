import Ember from 'ember';

var CategoryRoute = Ember.Route.extend({
	queryParams: {
	   categoryId: {
	    refreshModel: true
	   }
    },

    categoryList: [
	  {
	  	id: 'Meat',
	  	lists: [
	  	  {
	  	  	src: '/assets/images/beef.jpg',
	  	  	imageID: 'Beef',
	  	  	url: ''
	  	  },
	  	  {
	  	  	src: '/assets/images/pork.jpg',
	  	  	imageID: 'Pork',
	  	  	url: ''

	  	  },
	  	  {
	  	  	src: '/assets/images/chicken.jpg',
	  	  	imageID: 'Chicken',
	  	  	url: ''
	  	  },
	  	  {
	  	  	src: '/assets/images/salmon.jpg',
	  	  	imageID: 'Salmon',
	  	  	url: ''
	  	  },
	  	  {
	  	  	src: '/assets/images/turkey.jpg',
	  	  	imageID: 'Turkey',
	  	  	url: ''
	  	  },
	  	  {
	  	  	src: '/assets/images/duck.jpg',
	  	  	imageID: 'Duck',
	  	  	url: ''
	  	  }
	  	]
	  },
	  {
	  	id: 'Veggie',
	  	lists: [
	  	  {
	  	  	src: '/assets/images/asparagus.jpg',
	  	  	imageID: 'Asparagus',
	  	  	url: ''
	  	  },
	  	  {
	  	  	src: '/assets/images/tofu.jpg',
	  	  	imageID: 'Tofu',
	  	  	url: ''

	  	  },
	  	  {
	  	  	src: '/assets/images/lettuce.jpg',
	  	  	imageID: 'Lettuce',
	  	  	url: ''
	  	  },
	  	  {
	  	  	src: '/assets/images/carrot.jpg',
	  	  	imageID: 'Carrot',
	  	  	url: ''
	  	  },
	  	  {
	  	  	src: '/assets/images/brocoli.jpg',
	  	  	imageID: 'Brocoli',
	  	  	url: ''
	  	  },
	  	  {
	  	  	src: '/assets/images/tomato.jpg',
	  	  	imageID: 'Tomato',
	  	  	url: ''
	  	  }
	  	]
	  },
	  {
	  	id: 'Bakery',
	  	lists: [
	  	  {
	  	  	src: '/assets/images/toast.jpg',
	  	  	imageID: 'Toast',
	  	  	url: ''
	  	  },
	  	  {
	  	  	src: '/assets/images/cheesecake.jpeg',
	  	  	imageID: 'Cheesecake',
	  	  	url: ''

	  	  },
	  	  {
	  	  	src: '/assets/images/macaroonsList.jpg',
	  	  	imageID: 'Macaroon',
	  	  	url: ''
	  	  },
	  	  {
	  	  	src: '/assets/images/pudding.jpg',
	  	  	imageID: 'Pudding',
	  	  	url: ''
	  	  },
	  	  {
	  	  	src: '/assets/images/brownie.jpg',
	  	  	imageID: 'Brownie',
	  	  	url: ''
	  	  },
	  	  {
	  	  	src: '/assets/images/puff.jpg',
	  	  	imageID: 'Puff',
	  	  	url: ''
	  	  }
	  	]
	  },
	  {
	  	id: 'Soup',
	  	lists: [
	  	  {
	  	  	src: '/assets/images/lotusroot.png',
	  	  	imageID: 'Lotusroot',
	  	  	url: ''
	  	  },
	  	  {
	  	  	src: '/assets/images/borscht.jpg',
	  	  	imageID: 'Borscht',
	  	  	url: ''

	  	  },
	  	  {
	  	  	src: '/assets/images/mungbean.jpg',
	  	  	imageID: 'Mungbean',
	  	  	url: ''
	  	  },
	  	  {
	  	  	src: '/assets/images/chickensoup.jpg',
	  	  	imageID: 'Chicken',
	  	  	url: ''
	  	  },
	  	  {
	  	  	src: '/assets/images/clamchowder.jpg',
	  	  	imageID: 'Clam',
	  	  	url: ''
	  	  },
	  	  {
	  	  	src: '/assets/images/pumpkin.jpg',
	  	  	imageID: 'Pumpkin',
	  	  	url: ''
	  	  }
	  	]
	  }
	],

    filterCategory: function(currid) {
	    console.log('here' + currid);
	    return this.get('categoryList').findBy('id', currid).lists;
	},

    model: function(params) {
    	return this.filterCategory(params.categoryId);
    }
});

export default CategoryRoute;
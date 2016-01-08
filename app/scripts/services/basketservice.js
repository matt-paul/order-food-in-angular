(function () {
    'use strict';

		angular.module('jstestApp').factory('BasketService', function () {

		  var basket = [];

		  return {

				basket: basket,

				addToBasket: function(item) {
					basket.push(item);
		      console.log('add to basket function triggered');
				},

				removeFromBasket: function(item) {
				  basket.delete(item);
					console.log('Remove from Basket function triggered');
				},

				basketPrice: function() {
					//Add up all meal.price's in the basket
					console.log('basket price function triggered');
				}

		  };

		});
}());

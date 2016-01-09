(function () {
    'use strict';

		angular.module('jstestApp').factory('BasketService', function () {

		  var basket = [];

		  return {

				basket: basket,

				addToBasket: function(meal, price) {
					basket.push(meal, price);
		      console.log( meal);
            console.log(basket);
          // return basket;

				},

				removeFromBasket: function(meal, price) {
				  basket.delete(meal, price);
					console.log('Remove from Basket function triggered');
				},

				basketPrice: function() {
					//Add up all meal.price's in the basket
					console.log('basket price function triggered');
				}

		  };

		});
}());

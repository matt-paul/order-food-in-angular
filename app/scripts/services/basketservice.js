'use strict';

/**
 * @ngdoc service
 * @name jstestApp.Menuservice
 * @description
 * # MenuService
 * Service in the jstestApp.
 */
angular.module('jstestApp').factory('BasketService', function () {

	var basket = [];

  return {

		basket: basket,

		addToBasket: function(item) {
			basket.push(item);
      console.log('Item added to basket');
		}

  };
		// function get () {
		// 	return $http.get('/data/menu.json');
		// }
	});

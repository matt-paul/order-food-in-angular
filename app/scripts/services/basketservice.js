(function () {
    'use strict';

    angular.module('jstestApp').factory('BasketService', function () {

		  var basket = [];

      var total = [];

      var totalCost = 0;

      // var num = 0;

		  return {

				basket: basket,

        total: total,

        totalCost: totalCost,

        // num: num,

        orderUnderway: function () {
            return basket.length > 0 ? true : false;
        },


				addToBasket: function (meal, price) {
					basket.push(meal, price);
          var p = parseFloat(price);
          total.push(p);
          this.calculateTotal();
          this.numberOfItems();
          console.log(basket);
          console.log(meal)
				},


        confirmOrder: function () {
           basket.length = 0;
           this.basket = basket;
           console.log(basket);

        },


        calculateTotal: function () {
          var totalCost = total.reduce(add, 0);
            function add(a,b) {
              return a+b;
            }
          this.totalCost = totalCost;
        },


        numberOfItems: function () {
          var num = total.length;
          this.num = num;
        }


		  };

		});

}());

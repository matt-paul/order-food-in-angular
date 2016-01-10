(function () {
    'use strict';

    angular
        .module('jstestApp')
        .controller('MainCtrl', ['$scope', '$location', '$routeParams', 'MenuService', 'BasketService', function ($scope, $location, $routeParms, MenuService, BasketService) {

            var self = this;

            self.menu = {};

            self.showCheckout = function (pathurl) {
              $location.path(pathurl);
            };

            self.basket = BasketService.basket;

            self.total = BasketService.total;

            self.totalCost = BasketService.totalCost;

            MenuService.get('/data/menu.json').success(function (data) {
                $scope.menu = data;
            });

            self.addToBasket = BasketService.addToBasket;

            self.removeFromBasket = BasketService.removeFromBasket;

            self.calculateTotal = BasketService.calculateTotal;

            self.orderUnderway = BasketService.orderUnderway;

            self.numberOfItems = BasketService.numberOfItems;

            self.confirmOrder = BasketService.confirmOrder;


        }
            ]);


}());

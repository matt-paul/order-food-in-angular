(function () {
    'use strict';

    angular
        .module('jstestApp')
        .controller('MainCtrl', ['$scope', '$location', '$routeParams', 'MenuService', 'BasketService', function ($scope, $location, $routeParms, MenuService, BasketService) {

            var self = this, hideHeader = false;

            self.menu = {};

            self.showCheckout = function (pathurl) {
              $location.path(pathurl);
                hideHeader = true;
            };

            MenuService.get('/data/menu.json').success(function (data) {
                $scope.menu = data;
            });

            self.basket = BasketService.basket;

            self.total = BasketService.total;

            self.totalCost = BasketService.totalCost;

            self.addToBasket = BasketService.addToBasket;

            self.removeFromBasket = BasketService.removeFromBasket;

            self.calculateTotal = BasketService.calculateTotal;

            self.orderUnderway = BasketService.orderUnderway;

            self.numberOfItems = BasketService.numberOfItems;

            self.confirmOrder = BasketService.confirmOrder;


        }
            ]);


}());

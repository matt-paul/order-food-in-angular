(function () {
    'use strict';

    angular
        .module('jstestApp')
        .controller('MainCtrl', ['$scope', 'MenuService', 'BasketService', function ($scope, MenuService, BasketService) {

            var self = this;

            self.menu = {};

            self.basket = {};

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

            // self.num = BasketService.num;

        }
            ]);


}());

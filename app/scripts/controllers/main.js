(function () {
    'use strict';

    angular
        .module('jstestApp')
        .controller('MainCtrl', ['$scope', 'MenuService', 'BasketService', function ($scope, MenuService, BasketService) {

            var self = this;
            // var item;

            self.menu = {};

            self.basket = {};


            MenuService.get('/data/menu.json').success(function (data) {
                $scope.menu = data;
            });

            self.addToBasket = BasketService.addToBasket;

            self.removeFromBasket = BasketService.removeFromBasket;
        }
            ]);

}());

(function () {
    'use strict';

    describe('Service: BasketService', function () {

        beforeEach(module('jstestApp'));

        var BasketService, ctrl, scope;

        beforeEach(inject(function ($injector, $controller) {
            BasketService = $injector.get('BasketService');
            ctrl = $controller('MainCtrl', { $scope: scope});
        }));

        it('should do something', function () {
            expect(!!BasketService).toBe(true);
        });


        describe('on initialisation', function () {

            it('basket should be an array with zero items inside it', function () {
                expect(BasketService.basket).toEqual([]);
            });

            it ('the basket total price should be zero', function () {
              expect(BasketService.total).toEqual(0);
            });

        });


        describe('Adding Items', function () {

          var myOrder = ['Tasty Falafel', 3.99, 'Paneer Tikka', 4.99];

            beforeEach(function () {
                ctrl.addToBasket('Tasty Falafel', 3.99);
                ctrl.addToBasket('Paneer Tikka', 4.99);
            });

            it('should update the contents of the basket', function () {
                expect(BasketService.basket).toEqual(myOrder);
            });

            it('should calculate correct price of basket', function () {
                // ctrl.calculateTotal();
                expect(BasketService.calculateTotal()).toEqual(8.98);
            });

            it('should trigger the calculate total function', function () {
              expect(BasketService.calculateTotal).toHaveBeenCalled();
            });

        });

        describe('Removing Items', function () {

          beforeEach(function () {
            ctrl.addToBasket('Mango Lassi', 1.99);
          });

          // it('should remove item from basket', function () {
          //   ctrl.removeFromBasket();
          //   expect(BasketService.basket).toEqual([]);
          //   expect(BasketService.total).toEqual(0);
          // });


        });

    });
}());

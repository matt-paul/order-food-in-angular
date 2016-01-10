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
              expect(BasketService.totalCost).toEqual(0);
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

            it('should correctly identify the number of items ordered', function () {
                expect(BasketService.total.length).toEqual(2);
            });

            it('should calculate correct price of basket', function () {
                expect(ctrl.totalCost).toEqual(8.98);
            });



            // describe('addToBasket function', function () {
            //
            //   // create spy to check that functions are called within add to Basket.
            //   beforeEach(function() {
            //     var
            //     BasketService = {
            //       fakeCalculateTotal: //add function
            //     };
            //   });
            //
            //     it('add to basket function should trigger the calculate total function', function () {
            //       expect(BasketService.fakeCalculateTotal).toHaveBeenCalled();
            //     });
            //
            //     it('add to basket function should trigger the numberOfItems function', function () {
            //       //expect
            //     });
            //
            // });


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

(function () {
    'use strict';

    describe('Service: BasketService', function () {

        beforeEach(module('jstestApp'));

      // instantiate service
        var BasketService, ctrl, scope;

        beforeEach(inject(function ($injector, $controller) {
            // $httpBackend = $injector.get('$httpBackend');
            BasketService = $injector.get('BasketService');
            // basket = [];
            ctrl = $controller('MainCtrl', { $scope: scope});
        }));

        it('should do something', function () {
            expect(!!BasketService).toBe(true);
        });

        describe('on initialisation', function () {


            it('should be an array with zero items inside it', function () {
                expect(BasketService.basket).toEqual([]);
            });

        });

        describe('Adding Items', function () {


            it('meal should be added into the basket', function () {
                ctrl.addToBasket('Tasty Falafel', 3.99);
                expect(BasketService.basket).toEqual(['Tasty Falafel', 3.99]);
            });



        });


      //xit('should add an item into the basket', function () {
        //add item to basket
        //expect basket to have one item in it
      //});

    });
}());

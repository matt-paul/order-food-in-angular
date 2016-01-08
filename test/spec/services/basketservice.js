'use strict';

describe('Service: BasketService', function () {

  beforeEach(module('jstestApp'));

  // instantiate service
  var BasketService, $httpBackend;

  beforeEach(inject(function ($injector) {
    $httpBackend          = $injector.get('$httpBackend');
    BasketService = $injector.get('BasketService');
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should do something', function () {
    expect(!!BasketService).toBe(true);
  });

  xit('basket should start with zero items inside it', function () {
    // expect basket length to be zero
  });

  xit('should add an item into the basket', function () {
    //add item to basket
    //expect basket to have one item in it
  });

});

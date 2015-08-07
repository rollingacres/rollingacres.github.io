'use strict';

describe('Controller: FaqCtrl', function () {

  // load the controller's module
  beforeEach(module('reWebApp'));

  var FaqCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    FaqCtrl = $controller('FaqCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FaqCtrl.awesomeThings.length).toBe(3);
  });
});

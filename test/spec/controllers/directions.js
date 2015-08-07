'use strict';

describe('Controller: DirectionsCtrl', function () {

  // load the controller's module
  beforeEach(module('reWebApp'));

  var DirectionsCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    DirectionsCtrl = $controller('DirectionsCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DirectionsCtrl.awesomeThings.length).toBe(3);
  });
});

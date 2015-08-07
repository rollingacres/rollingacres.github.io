'use strict';

describe('Controller: LinksCtrl', function () {

  // load the controller's module
  beforeEach(module('reWebApp'));

  var LinksCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    LinksCtrl = $controller('LinksCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LinksCtrl.awesomeThings.length).toBe(3);
  });
});

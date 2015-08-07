'use strict';

describe('Controller: QuestionsCtrl', function () {

  // load the controller's module
  beforeEach(module('reWebApp'));

  var QuestionsCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    QuestionsCtrl = $controller('QuestionsCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(QuestionsCtrl.awesomeThings.length).toBe(3);
  });
});

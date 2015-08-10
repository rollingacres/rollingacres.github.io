'use strict';

/**
 * @ngdoc function
 * @name reWebApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the reWebApp
 */
angular.module('reWebApp')
  .controller('NavigationCtrl', ["$scope", "$location", function ($scope, $location) {
    $scope.isActive= function(p){
        return (p === $location.path());
    };
    $scope.isCollapsed = true;
    $scope.$on('$routeChangeSuccess', function () {
        $scope.isCollapsed = true;
    });    
  }]);

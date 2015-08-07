'use strict';

/**
 * @ngdoc overview
 * @name reWebApp
 * @description
 * # reWebApp
 *
 * Main module of the application.
 */
angular
  .module('reWebApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/services', {
        templateUrl: 'views/services.html',
        controller: 'ServicesCtrl',
        controllerAs: 'services'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/application', {
        templateUrl: 'views/application.html',
        controller: 'ApplicationCtrl',
        controllerAs: 'application'
      })
      .when('/faq', {
        templateUrl: 'views/faq.html',
        controller: 'FaqCtrl',
        controllerAs: 'faq'
      })
      .when('/links', {
        templateUrl: 'views/links.html',
        controller: 'LinksCtrl',
        controllerAs: 'links'
      })
      .when('/questions', {
        templateUrl: 'views/questions.html',
        controller: 'QuestionsCtrl',
        controllerAs: 'questions'
      })
      .when('/directions', {
        templateUrl: 'views/directions.html',
        controller: 'DirectionsCtrl',
        controllerAs: 'directions'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

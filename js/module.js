var conversionomicsApp = angular.module('conversionomicsApp', [
  'ngRoute',
  'conversionomicsControllers'
]);

conversionomicsApp.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/dashboard', {
            templateUrl: 'dashboard.html',
            controller: 'conversionomicsController'
        }).
        when('/clients', {
             templateUrl: 'clients.html',
             controller: 'conversionomicsController'
        }).
        when('/google_analytics', {
             templateUrl: 'google_analytics.html',
             controller: 'conversionomicsController'
        }).
        when('/google_adwords', {
            templateUrl: 'google_adwords.html',
            controller: 'conversionomicsController'
        }).
        when('/bing', {
            templateUrl: 'bing.html',
            controller: 'conversionomicsController'
        }).
        when('/queries', {
            templateUrl: 'queries.html',
            controller: 'conversionomicsController'
        }).
        otherwise({
            redirectTo: '/dashboard'
        });
  }]);

var conversionomicsControllers = angular.module('conversionomicsControllers', []);

conversionomicsControllers.controller('conversionomicsController', ['$scope', '$http',
  function ($scope, $http, conversionomicsService) {
     
  }]);

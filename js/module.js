var conversionomicsApp = angular.module('conversionomicsApp', [
  'ngRoute',
  'conversionomicsControllers'
]);

conversionomicsApp.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/dashboard', {
            templateUrl: 'dashboard.html',
            controller: 'dashboardController'
        }).
        when('/clients', {
             templateUrl: 'clients.html',
             controller: 'PhoneDetailCtrl'
        }).
        when('/google_analytics', {
             templateUrl: 'google_analytics.html',
             controller: 'PhoneDetailCtrl'
        }).
        when('/google_adwords', {
            templateUrl: 'google_adwords.html',
            controller: 'PhoneDetailCtrl'
        }).
        when('/bing', {
            templateUrl: 'bing.html',
            controller: 'PhoneDetailCtrl'
        }).
        when('/queries', {
            templateUrl: 'queries.html',
            controller: 'PhoneDetailCtrl'
        }).
        otherwise({
            redirectTo: '/dashboard'
        });
  }]);

var conversionomicsControllers = angular.module('conversionomicsControllers', []);

conversionomicsControllers.controller('dashboardController', ['$scope', '$http',
  function ($scope, $http) {
      $scope.title = "Dashboard"
  }]);

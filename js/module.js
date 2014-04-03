var conversionomicsApp = angular.module('conversionomicsApp', [
  'ngRoute',
  'conversionomicsControllers'
]);


conversionomicsApp.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/dashboard', {
            templateUrl: 'dashboard.html',
            controller: ''
        }).
        when('/clients', {
             templateUrl: 'clients.html',
             controller: 'clientController'
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

conversionomicsApp.factory('mySharedService', function ($rootScope) {
    var sharedService = {};

    sharedService.message = 'das';
    sharedService.prepForBoradcast = function (msg) {
        this.message = msg;
        this.broadcastItem();
    };

    sharedService.broadcastItem = function () {
        $rootScope.$broadcast('handleBroadcast');
    };

    return sharedService;
});


var conversionomicsControllers = angular.module('conversionomicsControllers', []);


function conversionomicsController($scope, $http, mySharedService) {

};

conversionomicsController.$inject = ['$scope', '$http'];

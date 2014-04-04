function googleanalyticsController($scope, $http) {

    $scope.getQueriesData = function (id) {
        alert("google analytics");
        alert(id);
    }
};

googleanalyticsController.$inject = ['$scope', '$http'];

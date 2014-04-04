function googleanalyticsController($scope, $http) {

    $scope.getClientData = function (id) {
        alert("google analytics");
        alert(id);
    }
};

googleanalyticsController.$inject = ['$scope', '$http'];

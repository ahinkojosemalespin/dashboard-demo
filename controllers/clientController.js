function clientController($scope, $http) {

    $scope.getClientData = function (id) {
        alert(id);
    }
};

clientController.$inject = ['$scope', '$http'];

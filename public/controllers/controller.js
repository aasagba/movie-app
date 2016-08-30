var myApp = angular.module('myApp', ['ngAnimate']);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    //console.log("AppCtrl controller initialised");

    $scope.results = [];
    $scope.movieName = "";
    $scope.sortBy = {field: "Title"};

    $scope.searchMovies = function () {
        $http.get('/movie/' + $scope.movieName).success(function(response) {
            console.log(response);
            $scope.results = response;
        });
    }

}]);

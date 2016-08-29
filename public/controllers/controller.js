var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("AppCtrl controller initialised");

    $scope.results = [];
    $scope.movieName = "";
    $scope.sortBy = {field: "Title"};

    $scope.searchMovies = function () {
        console.log("in searchMovies");
        console.log($scope.movieName);

        $http.get('/movie/' + $scope.movieName).success(function(response) {
            console.log(response);
            $scope.results = response;
        });
    }

}]);

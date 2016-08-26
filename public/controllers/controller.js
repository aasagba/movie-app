var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("AppCtrl controller initialised");

    $scope.results = [];
    $scope.movieName = "";
    $scope.sortBy = {field: "Title"};
    // 1. on input change run function to query api and save results in array and render screen

    /* 2. render by sorting data and displaying in ui
            - sort
            - empty data in UI
            - loop data and print film name in UI
            - append div film info in li
            - event to show film info on li click
    */

    $scope.searchMovies = function () {
        console.log("in searchMovies");
        console.log($scope.movieName);

        $http.get('/movie/' + $scope.movieName).success(function(response) {
            console.log(response);
            $scope.results = response;
        });
    }


}]);

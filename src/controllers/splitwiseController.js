(function() {
    'use strict';

    var app = angular.module('splitwise', []);

    app.controller('splitwiseController', ['$scope', '$http',
            function($scope, $http) {
                console.log("In controller");
                $scope.saurabh = "Saurabh Landge";
            }]);
})();

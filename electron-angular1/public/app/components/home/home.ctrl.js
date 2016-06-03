angular.module('app').controller('homeCtrl', ['$scope', function($scope){
    $scope.click = function(){
        $scope.test = "Julien !"
    }
}]);

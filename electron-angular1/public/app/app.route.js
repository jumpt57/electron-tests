angular.module('app').config(['$routeProvider', function($routeProvider){

    $routeProvider.when('/home',
        {
            templateUrl: './app/components/home/home.vw.html',
            controller: 'homeCtrl'
        }
    ).otherwise(
        {
            redirectTo: '/home'
        }
    );

}]);
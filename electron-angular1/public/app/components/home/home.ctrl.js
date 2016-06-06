//const {ipcRenderer} = require('electron');

angular.module('app').controller('homeCtrl', ['$scope', function($scope){
    
    $scope.click = function(){
        $scope.test = "Julien !"
    }
       
    /*console.log(ipcRenderer.sendSync('synchronous-message', 'ping')); // prints "pong"

    ipcRenderer.on('asynchronous-reply', (event, arg) => {
        console.log(arg);
    });
    ipcRenderer.send('asynchronous-message', 'ping');*/
}]);

const {ipcMain} = require('electron');

var createFile = function(){
    ipcMain.on('synchronous-message', (event, arg) => {
        event.returnValue = 'pong2';
    });
}
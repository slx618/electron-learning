var electron = require('electron')
var app = electron.app
var BrowserWindow = electron.BrowserWindow
var mainWindow = null


app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 800,
        webPreferences: {
            nodeIntegration:true,
            contextIsolation: false,
        } //可以使用node

    })
    mainWindow.loadFile('index.html')
    mainWindow.on('close', () => {
        mainWindow = null
    })
})
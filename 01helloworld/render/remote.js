const btn = this.document.querySelector('#btn-new-window')
const BrowserWindow = require('electron').ipcMain.BrowserWindow

window.onload = function () {
    btn.onclick = function () {
        newWin = new BrowserWindow({
            width: 500,
            height: 500,
        })
        newWin.loadFile('yellow.html')
        newWin.on('close', () => {
            newWin = null
        })
    }
}
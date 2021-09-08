var fs = require('fs')

window.onload = function () {
    var btn = this.document.getElementById('btn')
    var content = this.document.querySelector('#content')
    btn.onclick = function () {
        fs.readFile('content', (err, data) => {
            content.innerHTML = data
        })
    }
}
const { app, BrowserWindow } = require('electron')

function createWindow () {
  // cria a principal janela do app.
  let win = new BrowserWindow({
    width: 1400,
    height: 700,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // lendo o index.html
  win.loadFile('index.html')
}

app.on('ready', createWindow)
alefTav Socketio  

# preparando ambiente no servidor.

    $ mkdir alefTavSocketio
    $ cd alefTavSocketio

    $ npm add socket.io
    $ npm add express

    # executar
    $ node server.js


    # altomatizando start do server.js

        $ cd /deploy/alefTavSocketio
        $ cp ./config/aleftav.service /usr/lib/systemd/system/aleftav.service

        $ systemctl daemon-reload
        $ systemctl start aleftav.service
        $ systemctl status aleftav.service

        $ systemctl enable aleftav.service


# Cliente utilisando framework electron

    $ cd cliente

    $ npm init
    $ npm install --save-dev electron
    $ npm install --save-dev socket.io

    $ tree
        ../cliente/
        ├── README
        ├── index.html
        ├── main.js
        └── package.json

    $ vim main.js
        const { app, BrowserWindow } = require('electron')
        function createWindow () {

        // Create the browser window.
        let win = new BrowserWindow({
            width: 1400,
            height: 700,
            webPreferences: {
            nodeIntegration: true
            }
        })

        // and load the index.html of the app.
        win.loadFile('index.html')
        }
        app.on('ready', createWindow)    

    $ vim index.html
        <!DOCTYPE html>
        <!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
        <!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
        <!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
        <!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
            <head>
            </head>
            <body>
                Iniciado
            </body>
        </html>

# inicializando aplicação

    $ npm start
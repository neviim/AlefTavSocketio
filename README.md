alefTav Socketio  

preparando ambiente electron

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
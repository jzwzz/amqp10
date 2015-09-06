Meteor-amqp10
===============
A wrapper around [node-amqp10]https://www.npmjs.com/package/amqp10) for Meteor.js

meteor add jzwzz:amqp10

amqp10 module is exposed this way by Meteor-amqp10:

    AMQPClient = Npm.require('amqp10');

To use it in your Meteor application, you can start right with a line like this:

    var client = new AMQPClient(); // Uses PolicyBase default policy
    client.connect('amqp://localhost/carbox_c2p', function(conn_err) {
        // ... check for errors ...
        client.send(JSON.stringify({ key: "Value" }), function (send_err) {
            console.log('send send');
            // ... check for errors ...
        });
        client.receive(function (rx_err, payload, annotations) {
            // ... check for errors ...
            console.log('Rx message: payload:' + payload);
            //console.log(JSON.parse(payload));
        });
    });

See amqp10 [documentation](https://www.npmjs.com/package/amqp10) for more details.

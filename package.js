Package.describe({
  name: 'jzwzz:amqp10',
  version: '1.0.1',
  summary: 'AMQP10 driver for node',
  git: 'https://github.com/jzwzz/amqp10'
});

Package.onUse(function(api) {
  api.addFiles('amqp10.js', 'server');
  if (api.export) {
    api.export("AMQPClient", "server");
  }
});

Npm.depends({
  "amqp10": "1.0.3"
});

Package.describe({
  name: 'jzwzz:amqp10',
  version: '0.0.1',
  summary: 'AMQP10 driver for node',
  git: 'https://github.com/jzwzz/amqp10',
});

Npm.depends({
  "amqp10": "1.0.3"
});

Package.onUse(function(api) {
  api.addFiles('amqp10.js', 'server');
  if (api.export) {
    api.export("AMQPClient", "server");
  }
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('jzwzz:amqp10');
  api.addFiles('amqp10-tests.js');
});

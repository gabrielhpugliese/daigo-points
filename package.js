var both = ['client', 'server'];

Package.describe({
  name: "daigo:points",
  summary: "Daigo package for points managment",
  version: "0.0.0",
  git: "https://github.com/gabrielhpugliese/daigo-points"
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@0.9.2');

  api.use('matb33:collection-hooks', both);
  api.addFiles([
    'both/lib.js'
  ], both);
  api.addFiles([
    'server/points.js'
  ], 'server');

  if (typeof api.export !== 'undefined') {
    api.export('DaigoPoints', both);
  }
});

Package.onTest(function (api) {
  api.use('daigo:points', both);
  api.use(['tinytest', 'test-helpers', 'accounts-base'], both);
  api.addFiles('tests/both_tests.js', both);
  api.addFiles('tests/server_tests.js', 'server');
  api.addFiles('tests/client_tests.js', 'client');
});

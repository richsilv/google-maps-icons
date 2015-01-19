Package.describe({
  name: 'richsilv:google-maps-icons',
  summary: 'SVG Icon capability for Google Maps',
  version: '0.0.1',
  git: 'https://github.com/richsilv/meteor-google-maps-icons'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.use('tracker@1.0.4');
  api.use('dburles:google-maps@1.0.2')
  api.addFiles('markerclusterer.js', 'client');
  api.addFiles('richsilv:google-maps-icons.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('richsilv:google-maps-icons');
  api.addFiles('richsilv:google-maps-icons-tests.js', 'client');
});

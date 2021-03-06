Error.stackTraceLimit = 20;

var context = require.context('./app', true, /\.spec\.ts$/);
context.keys().forEach(context);
var testing = require('@angular/core/testing');
var browserDynamic = require('@angular/platform-browser-dynamic/testing');

testing.TestBed.initTestEnvironment(
    browserDynamic.BrowserDynamicTestingModule,
    browserDynamic.platformBrowserDynamicTesting()
);

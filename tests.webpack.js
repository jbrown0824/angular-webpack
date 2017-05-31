import 'angular';
import 'angular-mocks/angular-mocks';

var context = require.context('./tests', true, /.spec$/);
context.keys().forEach(context);
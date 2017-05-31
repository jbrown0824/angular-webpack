import Config from './config';
import Controller from './controller';
require('./<component_name>.scss');

let thisModule = angular.module('app.component', []);

thisModule.config(Config);
thisModule.controller('SomeController', Controller);

export default thisModule = thisModule.name

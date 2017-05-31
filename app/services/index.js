import angular from 'angular';
import api from './api';

let servicesModule = angular.module('app.services', [])
    .service('api', api)

    .name;

export default servicesModule;

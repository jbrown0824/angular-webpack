import angular from 'angular';
import angularUIRouter from 'angular-ui-router';

// Primary Stylesheet
import './styles/styles.scss';

// Our Modules
import todo from './todo';
import some from './__component-template__';

export const appModule = angular.module('app', [
    angularUIRouter,
    todo,
    some,
]);

appModule.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/todo');
}]);
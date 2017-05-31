import angular from 'angular';
import angularUIRouter from 'angular-ui-router';

// Primary Stylesheet
import './styles/styles.scss';

// Our Modules
import todo from './todo';

export const appModule = angular.module('app', [
    angularUIRouter,
    todo,
]);

appModule.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/public/todo');
}]);
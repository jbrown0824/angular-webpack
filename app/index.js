import {module} from 'angular';
import angularUIRouter from 'angular-ui-router';

// Primary Stylesheet
import './styles/styles.scss';


// Services
import services from './services'

// Component
import todo from './todo';

export const appModule = module('app', [
    angularUIRouter,
    services,
    todo,
]);

appModule.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/todo');
}]);


export default appModule;

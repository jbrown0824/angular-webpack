import TodoConfig from './config';
import TodoController from './controller';
import a from '../../node_modules/babel-polyfill/dist/polyfill'
require('./todo.scss');

let todoModule = angular.module('app.todo', []);

todoModule.config(TodoConfig);
todoModule.controller('TodoController', TodoController);

export default todoModule = todoModule.name

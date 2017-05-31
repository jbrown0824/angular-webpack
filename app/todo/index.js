import TodoConfig from './config';
import TodoController from './controller';
require('./todo.scss');

let todoModule = angular.module('app.todo', []);

todoModule.config(TodoConfig);
todoModule.controller('TodoController', TodoController);

export default todoModule = todoModule.name

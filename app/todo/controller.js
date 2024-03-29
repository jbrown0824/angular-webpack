class TodoController {
    constructor() {
        const vm = this;

        vm.todos = [
            {text: 'Build using Webpack', done: false},
        ];

        vm.getIncompleteTodos = () => {
            return vm.todos.filter(todo => !todo.done).length;
        };

        vm.addTodo = function () {
            vm.todos.push({text: vm.formTodoText, done: false});
            vm.formTodoText = '';
        };

        vm.clearCompleted = function () {
            vm.todos = vm.todos.filter(todo => !todo.done);
        };
    }
}

export default TodoController;

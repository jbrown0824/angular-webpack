class TodoConfig {

    static initRoute ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('todo', {
            url: '/todo',
            views: {
                'content@': {
                    template: require('./todo.html'),
                    controller: 'TodoController as todo'
                }
            }
        });
    }
}

export default TodoConfig.initRoute;

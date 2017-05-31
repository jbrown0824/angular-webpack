class NAMEConfig {

    static initRoute ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('some-component', {
            url: '/some-component',
            views: {
                'content@': {
                    template: require('./template.html'),
                    controller: 'SomeController as ctrl'
                }
            }
        });
    }
}

export default NAMEConfig.initRoute;

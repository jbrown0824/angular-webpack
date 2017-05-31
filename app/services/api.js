class api {
    constructor($http) {
        this.$http = $http;
    }
}

api.$inject = ['$http'];

export default api;
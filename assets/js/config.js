angular.module('appName').config(function($stateProvider) {

    $stateProvider
        .state('index', {
            url: "",
            views: {
                "FullContentView": { templateUrl: "start.html" }
            }
        });
});

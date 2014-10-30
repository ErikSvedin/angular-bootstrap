(function() {

    angular.module('appName').
        factory('InvoicesFetcher', ['$http', Factory]);

    function Factory($http) {
        return {
            getLatest: function () {
                // Get latest
            }
        }
    }
});
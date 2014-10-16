(function(){
    angular.module('appName').
        controller('MainCtrl', ['$scope', Ctrl]);


    function Ctrl($scope, $http) {

        $scope.startMsg = 'Happy coding! // Erik';
    }

})();
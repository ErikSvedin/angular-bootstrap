(function(){
    angular.module('appName').
        controller('MainCtrl', ['$scope', Ctrl]);


    function Ctrl($scope) {

        $scope.startMsg = 'Happy coding! // Erik';
    }

})();

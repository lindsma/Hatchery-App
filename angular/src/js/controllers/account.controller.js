angular.module('hatcheryApp').controller('AccountController', function($scope, accountService, $state) {
  console.log('testing');

    $scope.checkLogin = function(username) {

      accountService.get(username);

    };

    $scope.processForm = function(username, email, password) {

        $scope.formData = {
            username: username,
            email: email,
            password: password
        };

        accountService.set($scope.formData);

        $state.reload();
    };

});
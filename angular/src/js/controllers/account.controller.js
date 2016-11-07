angular.module('hatcheryApp').controller('AccountController', function($scope, accountService, $state) {
  $scope.loggedIn = {};

    $scope.checkLogin = function(username) {
      accountService.get(username, function(response) {
        $scope.loggedIn = response.data;
      });

      $state.reload();
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

angular.module('hatcheryApp').controller('RegisterController', function($scope, accountService, $state) {

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

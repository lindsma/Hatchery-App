angular.module('hatcheryApp').controller('AccountController', function($scope, accountService, $state, InventoryService) {
  $scope.orders = [];
  $scope.loggedIn = {id: 1, username: "lindsma", email: "linzma87@gmail.com", password_digest: "$2a$10$WiiUKw0ruD7HM6Hd9Eo0yuK/74XsHFSwCQhc65jZjZo4IjhHX8jFq", admin: false};
    $scope.checkLogin = function(username) {
      accountService.get(username, function(response) {
        $scope.loggedIn = response.data;
      });
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


angular.module('hatcheryApp').controller('AccountController', function($scope, accountService, $state, InventoryService) {
  // $scope.loggedIn = {id: 0, username: "lindsma", email: "linzma87@gmail.com", password_digest: "$2a$10$WiiUKw0ruD7HM6Hd9Eo0yuK/74XsHFSwCQhc65jZjZo4IjhHX8jFq", admin: false};
  // this.orders = $scope.getOrders || [{"id":"id","user":"username","eggs":0,"date":Date.now()}];
  $scope.loggedIn={};
  /* this.getEggs calls the service function getJSON to return a JSON object. The number returned is displayed as current eggs available.*/
  $scope.getEggs = InventoryService.getJSON(function(response){
    $scope.currentEggs = response.data || 0;
    $state.reload;
  })

    $scope.checkLogin = function(username) {
      accountService.get(username, function(response) {
        $scope.loggedIn = response.data;
        goToPage($scope.loggedIn);
        InventoryService.set('localStorageLoggedInUser',$scope.loggedIn);
        console.log($scope.loggedIn);
      });
    };
    function goToPage(userObj){
      if(userObj.admin === true){
        $state.go('hatcheryParent.admin');
      }else {
        $state.go('hatcheryParent.home');
      }
    }

    $scope.processForm = function(username, email, password) {
        $scope.formData = {
            username: username,
            email: email,
            password: password
        };
        accountService.set($scope.formData);

      $state.go('hatcheryParent.home');
    };

});

angular.module('hatcheryApp')

.controller('AdminController', function($scope, $http, AdminService,InventoryService){

  $scope.user = {
    "name": null,
    "password": null

  };
  $scope.currentEggs = {
    "total": 0
  };

  this.addEggs = function(number){
      number = 
      $scope.currentEggs.total += number;
      InventoryService.sendJSONedit({"input":number});
      alert("You now have " + $scope.currentEggs.total + " eggs in your inventory!");
    $('#update-egg-inventory-form').removeClass('ng-hide').removeClass('closed');
  }

  this.updateUser = function(name,password,password2){
    if(password === password2){
      $scope.user.name = name;
      $scope.user.password = password;
      AdminService.sendJSONeditUser($scope.user);
      console.log($scope.user);
  } else {
    alert("oops. Your passwords don't match.");
  }
}

function openEditAdmin(){
    $('#update-info-form').removeClass('ng-hide').removeClass('closed');
}


});

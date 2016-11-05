angular.module('hatcheryApp')

.controller('AdminController', function($scope, $http){

  $scope.user = {
    "name": null,
    "password": null

  };
  $scope.currentEggs = {
    "total": 44
  };

  this.addEggs = function(number){
    $scope.currentEggs.total = number;
    console.log($scope.currentEggs.total);
    $('#update-egg-inventory-form').removeClass('ng-hide').removeClass('closed');
  }

  this.updateUser = function(name,password,password2){
    if(password === password2){
      $scope.user.name = name;
      $scope.user.password = password;
      console.log($scope.user);
  } else {
    alert("oops. Your passwords don't match.");
  }
}

function openEditAdmin(){
  $('#update-info-form').removeClass('ng-hide').removeClass('closed');
  console.log('in openEditAdmin');
}
});

angular.module('hatcheryApp')

.controller('AdminController', function($scope, $http){

  $scope.user = {
    "name": null,
    "password": null

  };

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
  $('#update-info-form').removeClass('ng-hide');
  console.log('in openEditAdmin');
}
});

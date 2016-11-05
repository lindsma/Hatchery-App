angular.module('hatcheryApp').controller('RegisterController', function($scope, accountService, $state) {
this.allUsers = accountService.get();

$scope.processForm = function(username, email, password) {
    this.allUsers= accountService.get();
    $scope.formData = {
      username: username,
      email: email,
      password: password
    };

    accountService.set($scope.formData);

    $state.reload();
  };

});

// /* this.getEggs calls the service function getJSON to return a JSON object. The number returned is displayed as current eggs available.*/
//  this.getEggs = InventoryService.getJSON(function(response){
//    $scope.eggTotal = response.data || 0;
//    // console.log(response);
//    return $scope.eggTotal[0].total;
//  });
//  /* this.submitEggs calls the service function postJSON to post an initial JSON object*/
//  this.submitEggs = function(number){
//  InventoryService.sendJSON({"total": number});
//  animateEggs(number);
//  .success(function(body){
//    console.log(body.number);
//  });
//  // console.log('submitEggs number: ' + number);
//  };
//
//  /*this.editEggs calls the service function editJSON to put a JSON object*/
//  this.editEggs = function(editNum){
//  InventoryService.sendJSON({input: editNum})
//  .success(function(body){
//    console.log(body.editNum);
//  });
//  // console.log('editEggs number: ' + editNum);
//  };

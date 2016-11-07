angular.module('hatcheryApp')

.controller('AdminController', function($scope, $http, AdminService,InventoryService){

  $scope.currentEggs = {
    "total": 0
  };

  this.addEggs = function(number){
      if ($scope.loggedIn.id === 1){
      $scope.currentEggs.total += number;
      InventoryService.sendJSONedit({"input":number});
      alert("You now have " + $scope.currentEggs.total + " eggs in your inventory!");
    $('#update-egg-inventory-form').removeClass('ng-hide').removeClass('closed');
    }
  }

this.openOrders = function(){
    $('#update-info-form').removeClass('ng-hide').removeClass('closed');
      $scope.orders = InventoryService.getOrders();
      console.log($scope.orders);
    
}


});

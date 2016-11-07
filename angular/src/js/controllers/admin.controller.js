angular.module('hatcheryApp')

.controller('AdminController', function($state,$scope, $http, AdminService,InventoryService){

  this.addEggs = function(number){
      if ($scope.loggedIn.id === 1){
      $scope.currentEggs.total += number;
      InventoryService.sendJSONedit({"input":number});
      alert("You now have " + $scope.currentEggs.total + " eggs in your inventory.");
    $('#update-egg-inventory-form').removeClass('ng-hide').removeClass('closed');

    }
  }

this.openOrders = function(){
    $('#update-info-form').removeClass('ng-hide').removeClass('closed');
      $scope.orders = InventoryService.getOrders();

}
this.goHome = function() {
  console.log('in');
  $state.go('hatcheryParent.home');
}

});

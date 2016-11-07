angular.module('hatcheryApp')

.controller('AdminController', function($state,$scope, $http, InventoryService){

  this.addEggs = function(number){
      $scope.currentEggs.total += number;
      console.log($scope.currentEggs.total);
      InventoryService.sendJSONedit({"input":number});
      alert("You now have " + $scope.currentEggs.total + " eggs in your inventory.");
    $('#update-egg-inventory-form').removeClass('ng-hide').removeClass('closed');
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

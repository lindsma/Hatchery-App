angular.module('hatcheryApp')

.controller('InventoryController', function(InventoryService, $scope) {
  $scope.claimedEggsArray = [];
  this.printArray = function(number) {
    InventoryService.add(number);
  };
});

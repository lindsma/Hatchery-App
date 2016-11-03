angular.module('hatcheryApp')

.controller('InventoryController', function(InventoryService, $scope, $http) {
  $scope.claimedEggsArray = [];
  // this.printArray = function(number) {
  //   InventoryService.add(number);
  // };
  InventoryService.getJSON(function(response){
    $scope.eggTotal = response.data || 0;
    console.log($scope.eggTotal);
  })

  }
});

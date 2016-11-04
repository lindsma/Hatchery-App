angular.module('hatcheryApp')

.controller('InventoryController', function(InventoryService, $scope, $http) {
  $scope.eggTotal = [];
  // this.printArray = function(number) {
  //   InventoryService.add(number);
  // };
  this.getEggs = InventoryService.getJSON(function(response){
    $scope.eggTotal = response.data || 0;
    console.log($scope.eggTotal[0].total);
    return $scope.eggTotal[0].total;
  })
});

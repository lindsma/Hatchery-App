angular.module('hatcheryApp')

.controller('InventoryController', function(InventoryService, $scope, $http, $state) {

  console.log($scope.loggedIn);

  this.submitOrder = function(number) {
    InventoryService.setOrder(number);
  }

  /* this.getEggs calls the service function getJSON to return a JSON object. The number returned is displayed as current eggs available.*/
  this.getEggs = InventoryService.getJSON(function(response){
    $scope.currentEggs = response.data || 0;
    console.log($scope.currentEggs.total);
    $state.reload;
  })

  this.submitEggs = function(editNum){
    $scope.currentEggs.total -= editNum;
    animateEggs(editNum);
    this.setOrder(this.createOrder(editNum));

    editNum = '-' + editNum;
    InventoryService.sendJSONedit({"input": editNum});
  }

  function animateEggs(number){
    var count = number;
    $('.tan-egg').addClass('active');
    var theInterval = setInterval(function(){
      if(count <= 1) {
        $('.tan-egg').removeClass('active');
        clearInterval(theInterval);
      } else {
        count--;
      }
    },2000);

  }
  this.setOrder = function(orderObj) {
      $scope.orders.push(orderObj);
      InventoryService.set('localStorageOrders', $scope.orders);
      console.log($scope.orders);
  }
  this.createOrder = function(editNum){
    var orderObj = {"id":$scope.loggedIn.id, "user":$scope.loggedIn.username, "eggs":editNum, "date": Date.now()};
    return orderObj;
  }
  this.clearOrders = function() {
    InventoryService.clear('localStorageOrders');
  }


});

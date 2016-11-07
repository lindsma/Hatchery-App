angular.module('hatcheryApp')

.controller('InventoryController', function(InventoryService, $scope, $http, $state) {

  // this.submitOrder = function(number) {
  //   InventoryService.setOrder(number);
  // }

  $scope.orders = [{"id":"id","username":"username","eggs":0,"date":Date.now()},{"id":"id","username":"username","eggs":0,"date":Date.now()}];

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
  this.getOrders = function() {
    this.orders = InventoryService.get('localStorageOrders');
  }
  this.setOrder = function(orderObj) {
      $scope.orders.push(orderObj);
      InventoryService.set('localStorageOrders', $scope.orders);
      console.log($scope.orders);
  }
  this.createOrder = function(editNum){
    var orderObj = {"id":$scope.loggedIn.id, "username":$scope.loggedIn.username, "eggs":editNum, "date": Date.now()};
    return orderObj;
  }
  this.clearOrders = function() {
    InventoryService.clear('localStorageOrders');
  }


});

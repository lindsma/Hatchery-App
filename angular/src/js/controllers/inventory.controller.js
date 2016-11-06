angular.module('hatcheryApp')

.controller('InventoryController', function(InventoryService, $scope, $http, $state) {

  /* this.getEggs calls the service function getJSON to return a JSON object. The number returned is displayed as current eggs available.*/
  this.getEggs = InventoryService.getJSON(function(response){
    $scope.currentEggs = response.data || 99;
    console.log($scope.currentEggs.total);
    $state.reload;
  })

  /* this.editEggs calls the service function editJSON to put a JSON object*/
  this.submitEggs = function(editNum){
    $scope.currentEggs.total -= editNum;
    animateEggs(editNum);
    console.log("sendJSONedit: {input: " + editNum + "}");
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

});

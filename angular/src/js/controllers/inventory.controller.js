angular.module('hatcheryApp')

.controller('InventoryController', function(InventoryService, $scope, $http) {

  /* eggTotal holds the current number of eggs to display on the page in index 0 with key name "total"*/
  $scope.eggTotal = [];


  /* this.getEggs calls the service function getJSON to return a JSON object. The number returned is displayed as current eggs available.*/
  this.getEggs = InventoryService.getJSON(function(response){
    $scope.eggTotal = response.data || 0;
    return $scope.eggTotal[0].total;
  })
  /* this.submitEggs calls the service function postJSON to post an initial JSON object*/
  this.submitEggs = function(number){
  InventoryService.sendJSON({total: number})
  animateEggs(number);
  // .success(function(body){
  //   console.log(body.number);
  //   })
  console.log('submitEggs number: ' + number);
  }

  /*this.editEggs calls the service function editJSON to put a JSON object*/
  this.editEggs = function(editNum){
  InventoryService.editJSON({total: editNum})
  // .success(function(body){
  //   console.log(body.editNum);
  // })
  console.log('editEggs number: ' + editNum);
  }

  function animateEggs(number){
    var count = number;
    $('.tan-egg').addClass('active');
    var theInterval = setInterval(function(){
      if(count <= 0) {
        clearInterval(theInterval);
        $('.tan-egg').removeClass('active');
      } else {
        printEgg();
        count--;
      }

    },1500);

  }
  function printEgg() {
    console.log("Egg");
  }

});

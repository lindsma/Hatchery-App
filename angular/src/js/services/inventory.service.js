angular.module('hatcheryApp')

.service('InventoryService',function(EggFactory){
  function addEggs(number){
    var claimedEggsArray = [];
    for(var i = 0; i < number; i++){
      var eggToPush = new EggFactory();
      claimedEggsArray.push(eggToPush);
      console.log(eggToPush);
      printEggs(claimedEggsArray);
    }
    return claimedEggsArray;
  }
  function printEggs(array) {
    console.log('in printEggs');
  }
  this.getNewTotal = function(callback){
    $http.get('src/mock/items.json').then(callback);
    
  };

//   this.sendJSON(callback){
// $http.post('/create', data, config).then(successCallback);  }
//   return {
//     add: addEggs
//     print: printEggs
//   }
// })
// //use set Timeout to print the array.


.factory('EggFactory', function(){
return function Egg(){
  return {
    id: Date.now(),
    image: "/images/tan-egg.png"
  }
};
});

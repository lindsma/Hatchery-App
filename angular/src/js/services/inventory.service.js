angular.module('hatcheryApp')

.service('InventoryService',function($http){
  /*this function makes an API GET call and performs the callback function specified by the controller*/
  this.getJSON = function(callback){
    $http({
      method: "GET",
      url: "http://lit-reaches-27413.herokuapp.com/show",
    }).then(callback);
  }
  /*this function makes an API POST call based on number from controller function*/
  this.sendJSONedit = function(object){
    $http({
             method: 'PUT',
             url: 'http://lit-reaches-27413.herokuapp.com/edit',
             data: object
         }).then(function successCallback(response) {
             console.log('successCallback');
             console.log(response);
         }, function errorCallback(response) {
             console.log('error');
             console.log(response);
         });
  }
  // this.sendJSONedit = function(object){
  //   $http.put('http://lit-reaches-27413.herokuapp.com/edit',object);
  //   console.log(object);
  // }

});

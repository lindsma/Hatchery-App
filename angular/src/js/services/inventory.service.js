angular.module('hatcheryApp')

.service('InventoryService',function($http,localStorageService){
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
         }, function errorCallback(response) {
             console.log(response);
         });
  }
  this.set = function(name, dataSet) {
    console.log(dataSet);
    localStorageService.set(name, dataSet);
  }

  this.getLoggedInUser = function() {
    return localStorageService.get('localStorageLoggedInUser' || []);
  }
  this.getOrders = function() {
    return localStorageService.get('localStorageOrders') || [];
  }

  this.clear = function(toClear){
    return localStorageService.clear();
  }
});

angular.module('hatcheryApp')
.service('AdminService',function($http){

/*this function makes an API PUT call to update the admin user from data in $scope.*/
this.sendJSONeditUser = function(object){
  $http({
           method: 'PUT',
           url: 'http://lit-reaches-27413.herokuapp.com/________',
           data: object
       }).then(function successCallback(response) {
           console.log('successCallback');
           console.log(response);
       }, function errorCallback(response) {
           console.log('error');
           console.log(object);
           console.log(response);
       });
  // return $http.post('https://glacial-anchorage-56426.herokuapp.com/create', object);
}


});

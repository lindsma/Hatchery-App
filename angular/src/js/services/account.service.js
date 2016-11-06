angular.module('hatcheryApp').service('accountService', function($http, localStorageService) {

    console.log('in account service');


    function getUser(username) {
      console.log(username);
      $http({
          method: 'GET',
          url: 'http://lit-reaches-27413.herokuapp.com/login',
          data: username
      }).then(function successCallback(response) {
          console.log(response);
      }, function errorCallback(response) {
          console.log(response);
      });

    }

    function setUser(userObj) {

        $http({
            method: 'POST',
            url: 'http://lit-reaches-27413.herokuapp.com/user',
            data: userObj
        }).then(function successCallback(response) {
            console.log(response);
        }, function errorCallback(response) {
            console.log(response);
        });
    }

    return {
        get: getUser,
        set: setUser
    };

});

angular.module('hatcheryApp').service('accountService', function($http, localStorageService) {

    function getUser(username, callback) {
      var user = username;
      $http({
          method: 'GET',
          url: 'http://lit-reaches-27413.herokuapp.com/login?username=' + user,
      }).then(callback, function errorCallback(response) {
          return response;
      });
    }

    function setUser(userObj) {
        $http({
            method: 'POST',
            url: 'http://lit-reaches-27413.herokuapp.com/user',
            data: userObj
        }).then(function successCallback(response) {
            return response;
        }, function errorCallback(response) {
            return response;
        });
    }
    
    return {
        get: getUser,
        set: setUser
    };

});

angular.module('hatcheryApp').service('accountService', function($http, localStorageService) {

    console.log('in account service');

    // function getUsers() {
    //     return localStorageService.get('localStorageUsers') || [];
    // }

    function getUser(user, password) {

      $http({
          method: 'GET',
          url: 'https://glacial-anchorage-56426.herokuapp.com/login',
          data: user
      }).then(function successCallback(response) {
          console.log(response);
      }, function errorCallback(response) {
          console.log(response);
      });

    }

    function setUser(userObj) {

        $http({
            method: 'POST',
            url: 'https://glacial-anchorage-56426.herokuapp.com/user',
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

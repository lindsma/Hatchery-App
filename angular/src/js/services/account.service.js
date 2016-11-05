angular.module('hatcheryApp').service('accountService', function($http, localStorageService) {

    console.log('in account service');

    function getUsers() {
        return localStorageService.get('localStorageUsers') || [];
    }

    function setUser(userObj) {

        $http({
            method: 'POST',
            url: 'https://glacial-anchorage-56426.herokuapp.com/create',
            data: userObj
        }).then(function successCallback(response) {
            console.log('success');
        }, function errorCallback(response) {
            console.log(response);
        });
    }

    return {
        get: getUsers,
        set: setUser
    };

});

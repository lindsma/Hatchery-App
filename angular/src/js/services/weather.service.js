angular.module('hatcheryApp').service('weatherService', function($http) {

function getWeather(callback) {

  $http({
      method: 'GET',
      url: 'http://lit-reaches-27413.herokuapp.com/weather',
  }).then(callback, function errorCallback(response) {
      return response;
  });
}

return {
    get: getWeather,
};

});

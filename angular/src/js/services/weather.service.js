angular.module('hatcheryApp').service('weatherService', function($http) {

console.log('in weather service');

function getWeather(callback) {

  $http({
      method: 'GET',
      url: 'http://lit-reaches-27413.herokuapp.com/weather',
  }).then(callback, function errorCallback(response) {
      // console.log(response);
  });
}

return {
    get: getWeather,
};

});

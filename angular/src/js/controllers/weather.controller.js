angular.module('hatcheryApp').controller('WeatherController', function(weatherService, $scope) {

    // create rain conditions - FROM CODEPEN!
    // number of drops created.
    var nbDrop = 858;
    // function to generate a random number range.
    function randRange(minNum, maxNum) {
        return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
    }
    // function to generate drops
    function createRain() {

        for (var i = 1; i < nbDrop; i++) {
            var dropLeft = randRange(0, 1600);
            var dropTop = randRange(-1000, 1400);
            $('.weather').addClass('rain');
            $('.rain').append('<div class="drop" id="drop' + i + '"></div>');
            $('#drop' + i).css('left', dropLeft);
            $('#drop' + i).css('top', dropTop);
        }
      checkNight();
    }

    // create clear conditions
    function createClear() {
      $('.weather').addClass('clear');
      checkNight();
    }

    // create cloudy conditions
    function createCloudy() {
      $('.env-hero').addClass('cloudy');
      // sorry this is ugly
      $('.weather').append("<div class='cloud x1'></div><div class='cloud x2'></div><div class='cloud x3'></div><div class='cloud x4'></div><div class='cloud x5'></div><div class='cloud x6'></div><div class='cloud x7'></div>");

      checkNight();
    }

    // check for night
    function checkNight() {
      if ($scope.hour > 18 || $scope.hour < 7) {
        $('.env-hero').addClass('night');
        var spaceDiv = $('<div>').attr('class', 'space');
        $('.weather').prepend(spaceDiv);
      }
    }

    // $scope.getWeather = function() {
    //     weatherService.get(function(response) {
    //         var conditions = response.data.conditions;
    //         var time = new Date();
    //         $scope.hour = time.getHours();
    //         var temperature = response.data.temperature;
    //
    //         $scope.temp = temperature.substring(0, 4);
    //
    //         if (conditions === "Clear") {
    //             createClear();
    //         } else if (conditions.indexOf("Rain") > -1) {
    //             createRain();
    //         } else if (conditions.indexOf("Cloudy") > -1) {
    //             createCloudy();
    //         }
    //     });
    // };
    //
    // $scope.getWeather();


});

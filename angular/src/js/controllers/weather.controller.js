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
    }

    // create clear conditions
    function createClear() {
      $('.weather').addClass('clear');
    }

    // create windy conditions
    function createWindy() {
      $('.weather').addClass('wind');
    }

    // create cloudy conditions
    function createCloudy() {
      $('.env-hero').addClass('cloudy');
      $('.weather').append("<div class='cloud x1'></div><div class='cloud x2'></div><div class='cloud x3'></div><div class='cloud x4'></div><div class='cloud x5'></div><div class='cloud x6'></div><div class='cloud x7'></div>");
    }

    $scope.getWeather = function() {
        weatherService.get(function(response) {
            // var conditions = response.data.conditions;
            var conditions = "Chance";
            var temperature = response.data.temperature;

            $scope.temp = temperature.substring(0, 4);

            if (conditions === "Clear") {
                createClear();
            } else if (conditions === "Rain") {
                createRain();
            } else if (conditions === "Chance") {
                createCloudy();
            } else if (conditions === "Windy") {
                createWindy();
            }
        });
    };

    $scope.getWeather();


});

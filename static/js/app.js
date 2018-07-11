$.get('../../components/header.html', function(response) {
$("#nav").html(response);

});

$("#weather-info").css("display", "none")

$("#search_weather").submit( event => {
  event.preventDefault()
  var searchTerm = $("#city_search").val();
  console.log(searchTerm);
  var url='http://api.openweathermap.org/data/2.5/weather';
  var data = {
    q: searchTerm,
    APPID: 'b44add3315bc958bf2745143c77122a6'
  };

  function convert(item) {
    return(((item) * (9/5) - 459.67)).toFixed(2)
  }

  function showWeather(response) {
    $('#city_name').text(response.name + '  ' + response.sys.country);
    $('#high').html(convert(response.main.temp_max));
    $('#low').html(convert(response.main.temp_min));
    $('#forecast').html(response.weather[0].main);
    $('#precipitation').html(response.main.humidity + '%');

    $("#weather-info").css("display", "block")
  }

  $.get(url, data, showWeather);
})

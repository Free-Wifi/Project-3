$(document).ready(function() {
  $('#w-form').on('submit', function(event) {
    var loc = $('#location').val();
    $.get(
      'https://api.wunderground.com/api/12e40bb7b66b204b/conditions/q/'+loc+'.json',
      function(data) {
        $('.location').append(
          '<p>Your location is '+data.current_observation.display_location.city+', '
                        +data.current_observation.display_location.state+'.</p>'
        );
        $('.temp').append(
          '<p>The temperature in '+data.current_observation.display_location.city+', '
              +data.current_observation.display_location.state+' is '+data.current_observation.temp_f+' F.</p>'
        );
        $('.status').append(
          '<p>It is '+data.current_observation.icon+' outside.</p>'
        );
        $('.wind').append(
          '<p>The wind is blowing '+data.current_observation.wind_mph+' mph.</p>'
        );
        $('.icon').append(
        '<p><img class="icon" src="'+data.current_observation.icon_url+'"><p>'
        );
      });
      event.preventDefault();
  });
});

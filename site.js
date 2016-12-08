$(document).ready(function() {
  $('#time-form').on('submit', function(event) {
    var loc = $('#location').val();
    $.get(
      'https://api.wunderground.com/api/12e40bb7b66b204b/conditions/q/'+loc+'.json',
      function(data) {
        $('#primary').append(
          '<p><a href="'+data.current_observation.forecast_url+'">'+data.current_observation.display_location.city+', '
                        +data.current_observation.display_location.state+'</a></p>'
        );
      });
      event.preventDefault();
  });
});

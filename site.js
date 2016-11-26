$(document).ready(function() {
  $('time-form').on('submit', function(event) {
    var loc = $('location').val();
    $.get(
      'https://www.amdoren.com/api/timezone.php?api_key=EPubJusTVMR6qDABsQdcXEVBqD4qad&loc=' + loc,
      function(data) {
        $('#primary').append(
          '<p><a href="'+data.time+'"></a></p>';
        );
      });
      event.preventDefault();
  }):
});
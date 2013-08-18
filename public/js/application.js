$(document).ready(function() {
  $('.awesomeness_teller').on('click', function() {
    $('#awesomeness_holder').text($(this).data('heading'))
  });
  $('.skill_teller').on('click', function() {
    var path = window.location.pathname.split('/');
    $('#skill_holder').text(path.pop());
  })

  $('.meal_teller').on('click', function() {
    $('#meal_holder').text(meals)
  })
  // What other events do you need to bind to make the other pages work?
});

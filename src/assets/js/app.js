$(document).ready(function () {

  $('#course_form').submit(function (e) {
    e.preventDefault();
    var course_name = $('#name').val();
    var author = $('#author').val();
    var email = $('#lecturer').val();
    var price = $('#price').val();
    var description = $('#description').val();


    $(".error").remove();

    if (course_name.length < 1) {
      $('#name').after('<span class="error">This field is required</span>');
      return;
    }
    if (author.length < 1) {
      $('#author').after('<span class="error">This field is required</span>');
      return;
    }
    if (price.length < 1) {
      $('#price').after('<span class="error">This field is required</span>');
    }
    if (description.length < 10) {
      $('#description').after('<span class="error">Description must be at least 10 characters long</span>');
    }
    if (email.length < 1) {
      $('#lecturer').after('<span class="error">This field is required</span>');
      return;
    } else {
      var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
      var validEmail = regEx.test(email);
      if (!validEmail) {
        $('#lecturer').after('<span class="error">Enter a valid email lecturer</span>');
        return;
      }
    }
  });

});

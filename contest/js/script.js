$(document).ready(function() {
  function loadSearchResults() {
    let string =  $("#search_input").val();

    $.ajax({
      type: 'post',
      url: '',  // <- адрес куда отправлять запрос 
      data: { string }
    }).done(function (response) {
        if (response.code === 'OK') {
          // if success
        } else {
          // if error
        }
      });
  }

  $("#search_input").on("change paste keyup", $.debounce(500, loadSearchResults));
});
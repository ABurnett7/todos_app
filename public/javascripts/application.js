$(function() {
  
  $("form.delete").submit(function(event) {
    event.preventDefault();
    event.stopPropagation();

    var ok = confirm("Are you sure? This cannot be undone!");
    if (ok) {
      //this.submit();

      var form = $(this);

      var request = $.ajax({
        url: form.attr("action"),
        method: form.attr("method")
      });

      request.done(function(data, textStatus, jqHXR) {
        if (jqHXR.status === 204) {
          form.parent("li").remove()
        } else if (jqHXR.status === 200) {
          document.location = data
        }
      });
    }
  });

});
$(function(){

   $.ajax("https://ce-5440-summer-2015-01-phillywebguy.c9.io/class-4/json/json-1.json", {
      success: function(response) {
          $('body').html(response.user.age);
      },
      error: function(xhr, textStatus, errorThrown) {
          console.dir(xhr);
          console.log(textStatus);
          console.log(errorThrown);
          $('body').html(xhr.responseText);
      }
   });


});
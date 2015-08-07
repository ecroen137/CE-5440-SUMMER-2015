$(document).ready(function(){
  $("#teams").find("li").each(function(index){
      console.log(index + ": " + $(this).text());
  });
});
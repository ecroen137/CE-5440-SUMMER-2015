$(function() {
    $("form").submit(function(event){
        event.preventDefault();
        if(!$(".validator-error").length) {
            var user = [$("#firstName").val(), $("#lastName").val()];
            console.log(JSON.stringify(user));
        }
    });
});
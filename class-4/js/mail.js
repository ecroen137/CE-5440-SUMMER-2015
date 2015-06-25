$(function() {
    $("form").submit(function(event){
        event.preventDefault();
        if(!$(".validator-error").length) {
            console.log('go');
        }
    });
});
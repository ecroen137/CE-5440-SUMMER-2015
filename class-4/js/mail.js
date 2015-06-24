$(function() {
    $("form").submit(function(){
        if(!$(".validator-error").length) {
            console.log('go!');
        }
    });
});
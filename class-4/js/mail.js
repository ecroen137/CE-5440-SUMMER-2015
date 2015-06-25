$(function() {
    $("form").submit(function(event){
        event.preventDefault();
        if(!$(".validator-error").length) {
            var user = [$("#firstName").val(), $("#lastName").val()];
            console.log(JSON.stringify(user));
            $.ajax(
                {
                    type: "POST",
                    url: "https://ce-5440-summer-2015-01-phillywebguy.c9.io/class-4/validator-exercise.html",
                    dataType: 'json',
                    data: JSON.stringify(user),
                    success: function() {
                        console.log('complete');
                    }
                }
                );
        }
    });
});
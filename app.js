console.log("it works");

$(document).ready( function(){

    $('.submit').click(function(event) {
        var email = $('.email').val();
        var subject = $('.subject').val();
        var message = $('.message').val();
        console.log('button clicked');

    })
})


$(document).ready(function(){
    location.hash = "Register";
    $("#reg_form").on("submit", function (event) {
        event.preventDefault();
        var vars = $(this).serialize();
        console.log(vars);
        newMember(vars);
    });
});

 function newMember(varstring) {
    console.log(varstring);
    $.post('functions/userfunctions.php?action=newUser&' + varstring, function (response) {
       alert(response);
    });
} 
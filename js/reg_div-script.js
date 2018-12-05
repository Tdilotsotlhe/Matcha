

$(document).ready(function(){
    location.hash = "Register";
    $("#reg_form").on("submit", function (event) {
        event.preventDefault();
        var vars = $(this).serialize();
        console.log(vars);
        newMember(vars);
       // alert($(this).serialize());
    });
});

 function newMember(varstring) {
   // alert(varstring);
    console.log(varstring);
  //  alert(varstring);


    $.post('functions/userfunctions.php?action=newUser&' + varstring, function (response) {
       alert(response);
    });
} 
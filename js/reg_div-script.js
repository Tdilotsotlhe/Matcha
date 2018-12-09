

$(document).ready(function(){
    location.hash = "Register";
    $("#regBtn").on("click", function (event) {
        alert("work");
        var vars = $('#reg_form').serialize();
      //  event.preventDefault();
        /* var vars = $("input").each(function() {
            alert($(this).val());
        }); */
        
        console.log(vars);
        newMember(vars);
     
    });
});

 function newMember(varstring) {
    
     console.log("testnewmember fucn");
    console.log(varstring);
    $.post('functions/userfunctions.php?action=newUser&' + varstring, function (response) {
       
       if(response == 1){
        $("#content_wrapper").load("content/forms.php #login_div", function() {
            /*  $.getScript("js/"+val+"-script.js", function() {
                 alert("Script loaded and executed.");    
               }); */
     
             $("#DynamicScript").attr('src', "js/login_div.js");
             console.log($("#DynamicScript").attr('src'));
           });
      
       }
    });
} 
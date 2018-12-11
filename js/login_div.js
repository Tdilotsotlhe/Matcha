$("#loginBtn").on("click", function (event) {

    user = ($('#username').val());
    pass = ($('#password').val());


   newLogin(user,pass);
});

function newLogin(u, p) {
   vars = "username="+u+"&password="+p;
    $.post('functions/userfunctions.php?action=Login&'+vars, function (response) {
       //console.log(response + " sdgdgthe response");
      // alert("newlogin");
       if(response == 1){
           newnav($("#Dashb"));
       }
    }); 
 }
 
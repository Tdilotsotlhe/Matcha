$(document).ready(function(){
    location.hash = "Home";
    console.log($("#DynamicScript").attr('src'));
    //$("#DynamicScript").attr('src', "js/loadnew.js"); 
    //console.log($("#DynamicScript").attr('src'));
navigation();
$(".navigation").addClass("w3-animate-opacity");


checkLogin(); 
setInterval(function () {
checkLogin(); 
 }, 500);
});





//navigation function
function navigation(){

$(".navigation").click(function () {
    var val = this.getAttribute("data-location");

    alert(val);


    location.hash = val;
    $("#content_wrapper").load("content/forms.php #"+val, function() {
       /*  $.getScript("js/"+val+"-script.js", function() {
            alert("Script loaded and executed.");    
          }); */

        $("#DynamicScript").attr('src', "js/"+val+".js");
        console.log($("#DynamicScript").attr('src'));
      });
 

});

}






//new nav function
function newnav(location){
    //hide divs
    profileKick();
    $(".DynamicDivs").hide();

    if(location == "Dashboard"){
        alert("tsek");
        $('#'+location).show();
        return ;
    }


    console.log(location);
    if (location.getAttribute("data-location") == "logout"){
        alert("logging out");
        logout();
       // return false();
    }
    $('#'+location.getAttribute("data-location")).show();
    

    if($('#'+location.getAttribute("data-location")).length){
        alert("Div1 exists");
        //attach event listeners
        attachEvents(location.getAttribute("data-location"));
    }else{
        alert("Div1 does not exists");
    } 


    }

function attachEvents(loc){
    switch (loc) {
        case "login_div":
        $("#loginBtn").on("click", function (event) {
            alert("work");
            //var logvars = $('.loginform').serialize();
            user = ($('#username').val());
            pass = ($('#password').val());
            //console.log(logvars);
           newLogin(user,pass);
        });
            break;
        case "reg_div":
        $("#regBtn").on("click", function (event) {
            alert("work");
            var vars = $('#reg_form').serialize();
            
            console.log(vars);
            newMember(vars);
        });
            break;
    
        default:
            break;
    }
    /* $('#loginBtn').click(function (e) { 
        e.preventDefault();
        alert("logingngnng");
    }); */
}



function checkLogin(){
    
    $.post('functions/userfunctions.php?action=checkLog', function (response) {
        if (response == "1") {
         
            x = 1;
            //return true;
           // alert(response);
            /* $("#login").html("Logout");
            $("#login").attr("data-location", "logout"); */
            $("#login").hide("slow");
            $("#logout").show("slow");
            $("#register").hide("slow");
        }else{
            //make sepoerate logout button
            $("#register").show("slow");
            $("#login").show("slow");
            $("#logout").hide("slow");
            //$("#login").attr("data-location", "login_div");
            x = 0;
          //  location.replace("index.php#locked");
            //return false;
           // alert(response);
            //alert("Not Logged In BIYAAATCH");
        }
    });
}


function logout(){
    
    $.post('functions/logout.php', function (response) {
        if (response == "1") {
          alert("BYE");
         // $('#login').html("login");
        }else{
            return false;
        }
    });
}






function login_ajax() {
    alert('login');
    console.log($('#username').val());
 }


 function newMember(varstring) {
    console.log("testnewmember fucn");
   console.log(varstring);
   $.post('functions/userfunctions.php?action=newUser&' + varstring, function (response) {
      
      if(response == 1){
          newnav("login_div");
      /*  $("#content_wrapper").load("content/forms.php #login_div", function() {
             $.getScript("js/"+val+"-script.js", function() {
                alert("Script loaded and executed.");    
              }); 
    
           // $("#DynamicScript").attr('src', "js/login_div.js");
            //console.log($("#DynamicScript").attr('src'));
          }); */
     
      }
   });
}



 function newLogin(u, p) {
   // console.log("testnewmember fucn");
  // console.log(varstring);
   $.post('functions/userfunctions.php?action=Login&username=' + u + "&password=" + p, function (response) {
      alert(response + "dashboard navigaiton");
     // alert("newlogin");
      if(response == 1){
          newnav("Dashboard");
      }
   });
}


function profileKick(){
    alert("profile Kick");
    $.post('functions/userfunctions.php?action=emptyProfile', function (response) {
        console.log(response);
        alert(response);
        if (response == "1") {
            //hide all divs

            //load profile div
        }else{
           //do nothing
        }
    });
}
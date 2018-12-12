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


function allAjax(sendTo, method, values, AsyncOrSync, action){

    request = "";
    request = $.ajax({
        type: method,
        url: sendTo,
        data: "action="+action+"&"+values,
        async: AsyncOrSync
        /* dataType: "dataType", */
     /*    success: function (response) {
            return response;
        } */
    });
    return request;

}





//navigation function
function navigation(){

$(".navigation").click(function () {
    var val = this.getAttribute("data-location");

    alert(val);
/*     var curScriptElement = document.currentScript;
    alert(curScriptElement); */

    location.hash = val;
    $("#content_wrapper").load("content/forms.php #"+val, function() {
         $.getScript("js/"+val+"-script.js", function() {
            alert("Script loaded and executed.");    
          }); 


      });
 

});

}


function ScriptManage(scriptname, action){
    if(action == "remove"){
        $("script[src ='js/"+scriptname+"']").remove;
    }
    if(action == "add"){
        $.getScript("js/"+scriptname+".js");
        window.location.hash = scriptname;
    }
}



//new nav function
function newnav(location){

/*     var navItem = location.getAttribute("data-location"); */
navItem = window.location.hash;
navItem = navItem.replace("#","");

    $(".DynamicDivs").hide();

   // alert("currentscript:" + window.location.hash);
    
    if(location == "Dashboard"){
        alert("tsek");
        $('#'+location).show();
        window.location.hash = location;
        return ;
    }
 //   console.log(location);
    if (location.getAttribute("data-location") == "logout"){
        alert("logging out");
        logout();
       // return false();
    }
    $('#'+location.getAttribute("data-location")).show();
    

    if($('#'+location.getAttribute("data-location")).length){
      //  alert("Div1 exists");
      //load JS
     // window.location.hash = location;
      ScriptManage(navItem, "remove");
      ScriptManage(location.getAttribute("data-location"), "add");

        //attach event listeners
      //  attachEvents(location.getAttribute("data-location"));
    }else{
        alert("Div1 does not exists");
    } 


    }

/* function attachEvents(loc){
    switch (loc) {
        case "login_div":
        $("#loginBtn").on("click", function (event) {
            //alert("work");
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
    }); 
} */



function checkLogin(){
    
    $.post('functions/userfunctions.php?action=checkLog', function (response) {
        if (response == "1") {
         
            x = 1;
            $("#login").hide("slow");
            $("#logout").show("slow");
            $("#register").hide("slow");
        }else{
            $("#register").show("slow");
            $("#login").show("slow");
            $("#logout").hide("slow");
            x = 0;
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
          ("login_div");
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


/* 
 function newLogin(u, p) {
   // console.log("testnewmember fucn");
   console.log(u);
  console.log(p); 
  vars = "username="+u+"&password="+p;
   $.post('functions/userfunctions.php?action=Login&'+vars, function (response) {
      
     // alert("newlogin");
      if(response == '1'){
        console.log(response + " sdgdgthe response");
         alert("ok");
         // newnav();
      }
   }); 
} */


function profileKick(){
    alert("profile Kick");
    $.post('functions/userfunctions.php?action=emptyProfile', function (response) {
        //console.log(response);
       // alert(response);
        if (response == "1") {
            //hide all divs

            //load profile div
        }else{
           //do nothing
        }
    });
}
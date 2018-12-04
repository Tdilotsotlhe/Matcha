$(document).ready(function(){
    location.hash = "Home";
navigation();
$(".navigation").addClass("w3-animate-opacity");

checkLogin(); 
setInterval(function () {
checkLogin(); 
 }, 3000);
});





//navigation function
function navigation(){

$(".navigation").click(function () {
    var val = this.getAttribute("data-location");
    $("#"+val).animate({height: '300px', opacity: '0.4'}, "slow");

    $("#"+val).addClass("w3-blue");

    location.hash = val;
    $("#content_wrapper").load("content/forms.php #"+val, function() {
       // alert( "Load was performed.");
       // this.animate({opacity: "0.2"});
      });
 

});

}


function checkLogin(){
    
    $.post('functions/userfunctions.php?action=checkLog', function (response) {
        if (response == "1") {
            x = 1;
            //return true;
           // alert(response);
            $("#login").html("Logout");
        }else{
            x = 0;
            location.replace("index.php#locked");
            //return false;
           // alert(response);
            //alert("Not Logged In BIYAAATCH");
        }
    });
}

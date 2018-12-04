$(document).ready(function(){
    location.hash = "Home";
navigation();
$(".navigation").addClass("w3-animate-opacity");

checkLogin();
});


//navigation function
function navigation(){

$(".navigation").click(function () {
    var val = this.getAttribute("data-location");
    $("#"+val).animate({height: '300px', opacity: '0.4'}, "slow");
    location.hash = val;
    $("#"+val).addClass("w3-blue");

    $("#content_wrapper").load("content/forms.php #"+val, function() {
       // alert( "Load was performed.");
       // this.animate({opacity: "0.2"});
      });

});

}

function checkLogin(){
    $.post('functions/userfunctions.php?action=checkLog', function (response) {
        if (response == 1) {
            alert("responsewetwe");
        }else{
            alert("Not Logged In BIYAAATCH");
        }
    });
}

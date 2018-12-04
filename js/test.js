$(document).ready(function(){
    location.hash = "Home";
navigation();
$(".navigation").addClass("w3-black");
//locListen("Home");
});


//navigation function
function navigation(){

$(".navigation").click(function () {
    //this.addClass("w3-blue");
   // $(".navigation").removeClass("w3-red");
  //  $(".navigation").addClass("w3-black");
    //alert(this.getAttribute("data-location"));
    var val = this.getAttribute("data-location");
    $("#"+val).animate({height: '300px', opacity: '0.4'}, "slow");
    location.hash = val;
    $("#"+val).addClass("w3-blue");

    $("#content_wrapper").load("content/forms.php #"+val, function() {
       // alert( "Load was performed.");
        //locListen(val);
       // this.animate({opacity: "0.2"});
      });
     // $(".navigation").animate({opacity: "1"});
});

}

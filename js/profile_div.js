var test = "1";

/* function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(showPosition);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
      
function showPosition(position) {
    x.innerHTML="Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
}

function loctest(){
var x = document.getElementById("demo");
alert(x);
} */

/* function getLocation(x) {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; 
  } */

/*   function getLocation(ddd) {
      alert(ddd);
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(showPosition);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  function showPosition(position) {
    x.innerHTML="Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
}


  function loctest(){
    var x = document.getElementById("demo");
    getLocation(x);
    } */

$(document).ready(function(){
    location.hash = "Profile";
    var userinfo = fetchUserinfo();
    userinfo = JSON.parse(userinfo.responseText);
    loadProfile(userinfo);
    loadInterests(userinfo);
    //console.log(userinfo.responseText);

/*    $("#profileLoadBtn").click(function (e) { 
        e.preventDefault();
        var x = document.getElementById("demo");
        
        
      }); */
    //loadGallery();
        
    


/*     loctest(); */

});


function fetchUserinfo(){
   //return allAjax("functions/userfunctions.php","post","loadProfile=1","false","getProf");
   $.ajaxSetup({async: false});  
return $.post('functions/userfunctions.php?action=getProf&loadProfile=1', function (response) {
//  return response;
});






///////geolocation end

//$.ajaxSetup({async: true});  



}

// function loadLocation() {
//     var x = document.getElementById("demo");
// /* function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.watchPosition(showPosition);
//   } else {
//     x.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }
// function showPosition(position) {
//   x.innerHTML = "Latitude: " + position.coords.latitude + 
//   "<br>Longitude: " + position.coords.longitude; 
// } */
// }


function loadProfile(userprof) {

//console.log(userprof);
// alert(userprof);
$("#profileName").html(userprof[1]);
//load location and DOB

}
function showme(item){
    console.log(item);
    var w = item.getAttribute("data-key");
  alert(w);
 // alert(item.getAttribute("data-location"));
}

function loadInterests(userprof) {
     //console.log(userprof[9]);

   prof = JSON.parse(userprof[9]);
   interArray = prof["Interests"];
   console.log(interArray);
   $("#interests").html("");
   for (var key in interArray) {
    console.log(interArray[key]);
    var elm = "<span id='"+key+"' data-key='"+key+"' onclick='showme(this)' class='w3-tag w3-small w3-theme-l3 w3-hover-blue'>"+interArray[key]+"</span><br>";
    $("#interests").append(elm);
}
//////////geolocation


}
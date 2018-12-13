var test = "1";
test = 
$(document).ready(function(){
    location.hash = "Profile";
    var userinfo = fetchUserinfo();
    loadProfile(JSON.parse(userinfo.responseText));
    console.log(userinfo.responseText);
    //loadInterests();
    //loadGallery();
});
function fetchUserinfo(){
   //return allAjax("functions/userfunctions.php","post","loadProfile=1","false","getProf");
   $.ajaxSetup({async: false});  
return $.post('functions/userfunctions.php?action=getProf&loadProfile=1', function (response) {
//  return response;
});

//$.ajaxSetup({async: true});  



}

function loadProfile(userprof) {

console.log(userprof);

$("#profileName").html("test");

}

function loadInterests() {

}
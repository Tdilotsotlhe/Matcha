var test = "1";

$(document).ready(function(){
    location.hash = "Profile";
    var userinfo = fetchUserinfo();
    userinfo = JSON.parse(userinfo.responseText);
    loadProfile(userinfo);
    loadGallery();
    loadMembers();
    //loadInterests(userinfo);
    $("#uploadForm").on('submit',(function(e) {
      e.preventDefault();
      //alert("defPrev");
      ajaxupload();
    }));

});


function fetchGal(){
$.ajaxSetup({async: false});  
return $.post('functions/userfunctions.php?action=getpics', function (response) {
});

}

function loadMembers(){
  alert("member loader");
  $.ajaxSetup({async: false});  
 members = $.post('functions/userfunctions.php?action=loadmembers', function (response) {
 });
 //console.log(members.responseText);
 memberArray = JSON.parse(members.responseText);
 console.log(memberArray);


 for (var i= 0; i < memberArray.length; i++)
 {
   //make div
   console.log(memberArray[i][1]);
   var carddiv = $("<div class='w3-card-4'></div>");
   var ptag = $('<p></p>').text(memberArray[i]['username']); 

   ptag.appendTo(carddiv);
   carddiv.appendTo('#memberProf');
  // $("memberProf").append(content);
 }
/* 
 for (const key in memberArray) {
  if (memberArray.hasOwnProperty(key)) {
      const element =memberArray[key];
      alert(element);
  } */
}





function loadGallery(){
  images = fetchGal();
  images = JSON.parse(images.responseText);
  console.log(images);
 // console.log(JSON.parse(images.responseText));
  $('#profilePics').html("");

  for (var p = 0; p < images.length; p++){
    //alert(images[p]);
    num = Math.floor((Math.random() * 100) + 1);
     var img = $('<img>'); 
    img.attr('src', "images/"+images[p]+"?v="+num);
    img.attr('width', "60px");
    img.attr('height', "60px");
    img.attr('name', images[p]);
    img.appendTo('#profilePics');
    img.on('click', function() {
      alert(this.name);
    });
    //$('#profilePics').append(images.responseText[p]);

  }

 // $('#profilePics').html(JSON.parse(images.responseText));
}


function fetchUserinfo(){
   //return allAjax("functions/userfunctions.php","post","loadProfile=1","false","getProf");
   $.ajaxSetup({async: false});  
return $.post('functions/userfunctions.php?action=getProf&loadProfile=1', function (response) {
//  return response;
});

}

function ajaxupload() {
  var hr = new XMLHttpRequest();
   var url = "functions/profilepic.php";
   var thefile = document.getElementById("userpic").files[0];
  var formData = new FormData();
  formData.append("userpic", thefile);
   hr.open("POST", url, false);
   hr.onreadystatechange = function() {
       if(hr.readyState == 4 && hr.status == 200) {
           var return_data = hr.responseText;
         // alert(return_data);
         console.log("up proc occ");
         loadGallery();
          ///refresh profile pic div
       }
   }
   hr.send(formData); 

 
  }



function loadProfile(userprof) {

//console.log(userprof);
//alert(userprof);
$("#profileName").html(userprof['first_name']);

theprof = JSON.parse(userprof['profile']);
//alert(theprof.location);
theprof2 = JSON.parse(theprof.interests);

$("#interests").html("");
for(var w = 0; w < theprof2.length; w++){

  element = $("<span class='w3-badge w3-green'></span><br>").text(theprof2[w]); 

  $("#interests").append(element);


}

$("#profileLocation").html(theprof.location);


}

function showme(item){
    console.log(item);
    var w = item.getAttribute("data-key");
  alert(w);
 // alert(item.getAttribute("data-location"));
}

function loadInterests(userprof) {
     //console.log(userprof[9]);

 //  prof = JSON.parse(userprof[9]);
   //interArray = prof["Interests"];
   //console.log(interArray);
   $("#interests").html("");
   for (var key in interArray) {
    //console.log(interArray[key]);
    var elm = "<span id='"+key+"' data-key='"+key+"' onclick='showme(this)' class='w3-tag w3-small w3-theme-l3 w3-hover-blue'>"+interArray[key]+"</span><br>";
    $("#interests").append(elm);
}
//////////geolocation


}
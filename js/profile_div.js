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
  //alert("member loader");
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





imageCard = '<div class="w3-container w3-card w3-white w3-round w3-margin"><br>\
<img src="/w3images/avatar2.png" alt="Avatar" class="w3-left w3-circle w3-margin-right" style="width:60px">\
<span class="w3-right w3-opacity">1 min</span>\
		<h4>John Doe</h4><br>\
		<hr class="w3-clear">\
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut\
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\
			laboris nisi ut aliquip ex ea commodo consequat.</p>\
		<div class="w3-row-padding" style="margin:0 -16px">\
			<div class="w3-half">\
				<img src="/w3images/lights.jpg" style="width:100%" alt="Northern Lights" class="w3-margin-bottom">\
			</div>\
			<div class="w3-half">\
				<img src="/w3images/nature.jpg" style="width:100%" alt="Nature" class="w3-margin-bottom">\
			</div>\
		</div>\
		<button type="button" class="w3-button w3-theme-d1 w3-margin-bottom"><i class="fa fa-thumbs-up"></i>\
			 Like</button>\
		<button type="button" class="w3-button w3-theme-d2 w3-margin-bottom"><i class="fa fa-comment"></i>\
			 Comment</button>\
	</div>';




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
     img.attr('id', images[p]);
    img.attr('src', "images/"+images[p]+"?v="+num);
    img.attr('width', "60px");
    img.attr('height', "60px");
    img.attr('name', images[p]);
    img.appendTo('#profilePics');
    img.on('click', function() {
    var r = confirm("Set as profile picture?");
    if (r == true) {
      setProfPic(this.id);
    } else {
      txt = "You pressed Cancel!";
    }
    });
    //$('#profilePics').append(images.responseText[p]);

  }

 // $('#profilePics').html(JSON.parse(images.responseText));
}

function setProfPic(imagname) {
  $.post('functions/userfunctions.php?action=setPic&imgname='+imagname, function (response) {
    //console.log(response);
     newDP = loadProfPic().responseText;
     //console.log(newDP);
     newDP = JSON.parse(newDP);
     newDP = JSON.parse(newDP['profile']);
     console.log(newDP['dpset']);
     $("#profPic").attr("src", "images/"+newDP['dpset']+"?sdfg43");
    //  newDP['dpset'];
     //console.log(JSON.parse(newDP.responseText));
     //picName = JSON.parse(newDP['profile']);
     //console.log(picName);
    
  });
  ///loadprofilepicfunction
}

function loadProfPic(){
 return $.post('functions/userfunctions.php?action=dpLoad', function (response) {
    //console.log(response);
   /*  wholeRow = JSON.parse(response);
    wholeRow2 = JSON.parse(wholeRow['profile']);
    console.log(wholeRow2['dpset']);
    $("profPic").attr("src", "images/"+wholeRow2['dpset']); */

  });
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

function fetchAndLoadDP(){
  theuser = fetchUserinfo();
  theuser = JSON.parse(theuser.responseText);
  theuser = JSON.parse(theuser['profile']);
  $("#profPic").attr("src", "images/"+theuser['dpset']);

}



function loadProfile(userprof) {

fetchAndLoadDP();


////////////

$("#profileName").html(userprof['first_name']);

theprof = JSON.parse(userprof['profile']);
//alert(theprof.location);
theprof2 = JSON.parse(theprof.interests);
console.log(theprof2);

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
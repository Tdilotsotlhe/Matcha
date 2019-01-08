newUsersLocation = "";

$(document).ready(function(){
    getLocation();
    location.hash = "Register";
    $("#regBtn").on("click", function (event) {
        alert("work");
       // alert(newUsersLocation);
        var vars = $('#reg_form').serialize();
        console.log(vars);
        var arr_unchecked_values = $('input[type=checkbox]:checked').map(function(){return this.name}).get();
      //  vars.push({name: "location", value: newUsersLocation});
        vars += "&location="+newUsersLocation;
        //console.log(vars);
        newMember(vars, arr_unchecked_values);
    });
});

function getLocation()
  {

  if (navigator.geolocation)
    {
     // alert("it works");
      navigator.geolocation.getCurrentPosition(showPosition, showError);

    }
  else
  {
  alert("Geolocation is not supported by this browser.");
  }  
  }
  function showPosition(position)
  {
    url = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+position.coords.latitude+","+position.coords.longitude+"&key=AIzaSyA47t1t0JjL53u3KznXoMF_6oeVVjWTYaM";
    $.post(url, function (response) {
      //var jsonLoc = JSON.stringify(response.results);
      console.log("G API START");
/* 
      console.log(response.results[2].address_components[2].long_name);
      console.log(response.results[2].address_components[5].long_name);
      console.log(response.results[2].address_components[6].long_name); */
      newUsersLocation = response.results[2].address_components[2].long_name
       +", "+response.results[2].address_components[5].long_name+", "+response.results[2].address_components[6].long_name;
      console.log("G API END");
  });

  }

  function ipFetch()
  {
    url = "http://api.ipstack.com/check?access_key=d115280486eb2f2f8ebb6038c3dd4423";
  //  url = "https://geoip-db.com/jsonp/";
      $.post(url, function (response) {
        console.log(response.city +", "+response.region_name+", "+response.country_name);
        newUsersLocation = response.city +", "+response.region_name+", "+response.country_name;
       // alert(newUsersLocation);
      });
  };


  function gMapSrch(res){

          //////////googlemaps start
          url = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+res['latitude']+","+res["longitude"]+"&key=AIzaSyA47t1t0JjL53u3KznXoMF_6oeVVjWTYaM";
          $.post(url, function (response2) {
            console.log("gmaps");
          console.log(response2.results[2].address_components[2].long_name);
          });   
          //////////googlemaps end

  }


  function showError(error) {
      //run IP geoloc on failure
    switch(error.code) {
      case error.PERMISSION_DENIED:
     //   alert("You have denied the request for Geolocation.");
        ipFetch();
        break;
      case error.POSITION_UNAVAILABLE:
     //   alert("Location information is unavailable.");
        ipFetch();
        break;
      case error.TIMEOUT:
      //  alert("The request to get your location timed out.");
        ipFetch();
        break;
      case error.UNKNOWN_ERROR:
     //   alert("An unknown error occurred.");
        ipFetch();
        break;
    }
  }

 function newMember(varstring, interests) {
    
    $.post('functions/userfunctions.php?action=newUser&'+ varstring +"&profile="+ JSON.stringify(interests), function (response) {
      // alert(JSON.parse(response));
    // console.log(JSON.parse(response));
       if(response == 1){
        $("#content_wrapper").load("content/forms.php #login_div", function() {
            /*  $.getScript("js/"+val+"-script.js", function() {
                 alert("Script loaded and executed.");    
               }); */
     
             $("#DynamicScript").attr('src', "js/login_div.js");
             console.log($("#DynamicScript").attr('src'));
           });
      
       }else{
         alert("reg failed");
         console.log(response);
       }
    });
} 
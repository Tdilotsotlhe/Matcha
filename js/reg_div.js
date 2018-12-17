

$(document).ready(function(){
    location.hash = "Register";
    $("#regBtn").on("click", function (event) {
        alert("work");
       
      //  event.preventDefault();
        /* var vars = $("input").each(function() {
            alert($(this).val());
        }); */
        var vars = $('#reg_form').serialize();
        
         console.log(vars);
        var arr_unchecked_values = $('input[type=checkbox]:checked').map(function(){return this.name}).get();
         //console.log(arr_unchecked_values);
       //  newMember(vars, arr_unchecked_values);
     
    });
});

function getLocation()
  {

  if (navigator.geolocation)
    {
      alert("it works");
/*       url = "https://geoip-db.com/jsonp/";
      $.post(url, function (response) {
      console.log(response.slice(9,-1));
      }); */
     
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
    console.log(response.results[4]["geometry"]["location"]["lat"]+" , "+response.results[4]["geometry"]["location"]["lng"]);
    console.log("G API END");
  });

  }

  function ipFetch()
  {

    ///////////IP search start

    url = "http://api.ipstack.com/check?access_key=d115280486eb2f2f8ebb6038c3dd4423";
  //  url = "https://geoip-db.com/jsonp/";
      $.post(url, function (response) {
        //var jsonified = response.slice(9,-1);
        //var test = JSON.parse(jsonified);
        console.log(response);
      console.log(response['latitude']);
      console.log(response["longitude"]);
      gMapSrch(response);
      });

      //////////IP search end

  };


  function gMapSrch(res){

          //////////googlemaps start
          url = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+res['latitude']+","+res["longitude"]+"&key=AIzaSyA47t1t0JjL53u3KznXoMF_6oeVVjWTYaM";
          $.post(url, function (response2) {
            console.log("gmaps");
          console.log(response2.results[4]);
          });   
          //////////googlemaps end

  }

/*   function newLocationFunc(theAddy){
    url = "https://geoip-db.com/jsonp/"+theAddy;
    console.log(url);
    $.post(url, function (response) {
      var jsonified = response.slice(9,-1);
      var test = JSON.parse(jsonified);
    console.log(test);
    console.log(test['latitude']);
    console.log(test["longitude"]);
  });
} */


  
  function showError(error) {
      //run IP geoloc on failure
    switch(error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        ipFetch();
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        ipFetch();
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        ipFetch();
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        ipFetch();
        break;
    }
  }

 function newMember(varstring, interests) {
    
    // console.log("testnewmember fucn");
   // console.log(varstring);
    $.post('functions/userfunctions.php?action=newUser&' + varstring +"&profile="+ JSON.stringify(interests), function (response) {
       alert(JSON.parse(response));
     console.log(response);
       if(response == 1){
        $("#content_wrapper").load("content/forms.php #login_div", function() {
            /*  $.getScript("js/"+val+"-script.js", function() {
                 alert("Script loaded and executed.");    
               }); */
     
             $("#DynamicScript").attr('src', "js/login_div.js");
             console.log($("#DynamicScript").attr('src'));
           });
      
       }
    });
} 


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
      navigator.geolocation.getCurrentPosition(showPosition);

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
    console.log(response.results[4]);
    });
/*     return position.coords.latitude + 
    "," + position.coords.longitude; */	
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
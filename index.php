
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Matcha</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="css/w3.css" />
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/test.js"></script>
    <script id ="DynamicScript" src="js/dummy.js"></script>
    <style>
      html { background-color: #B94FC1; } 
body { margin:0; }
.gradient { content: ""; height: 100%; width: 100%; position: fixed; z-index: -6; }
.gradient.one { background-image: linear-gradient(to bottom, #5856D6 0%, #C644FC 100%);}
.gradient.two { background-image: linear-gradient(to bottom, #C643FC 0%, #FF5F37 100%); display:none; }

    </style>
</head>
<script>


$(function() {
    fadeToggle( $('.gradient.one') );
    fadeToggle( $('.gradient.two') );
});

function fadeToggle(el, hide) {
    el.fadeToggle(5000,null,function() { fadeToggle(el); });
}

function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }


}

</script>
<body >
<div class="gradient one"></div>
<div class="gradient two"></div>
<!-- <div class="w3-container w3-teal">
  <h1>Header</h1>
</div> -->
<div class="w3-container w3-black w3-top">

    <div class="w3-bar-block w3-black w3-hide-small">
        <p id="Dashb" data-location="Dashboard" onclick="newnav(this)" class="newnav w3-button w3-hover-grey w3-black">Home</p>
        <p id="profile" data-location="profile_div" onclick="newnav(this)" class="newnav w3-button w3-hover-grey w3-black">Profile</p>
        <p id="friends" data-location="friends_div" class="newnav w3-button w3-hover-grey w3-black">Friends</p>
        <p id="login" data-location="login_div" data-script="login.js" onclick="newnav(this);window.location.hash = 'login_div'" class="newnav w3-button w3-hover-grey w3-black">Login</p>
        <p id="logout" data-location="logout" data-script="logout.js" onclick="newnav(this);window.location.hash = 'Logout'" class="newnav w3-button w3-hover-grey w3-black">Logout</p>
        <p id="register" data-location="reg_div" data-script="register.js" onclick="newnav(this);window.location.hash = 'reg_div'" class="newnav w3-button w3-hover-grey w3-black">Register</p>
        <p id="matcha" data-location="Matcha" class="newnav w3-button w3-hover-grey w3-black">MATCHA</p>
        <p class="w3-right w3-animate-fading">MATCHA</p>
    </div>


<button onclick="myFunction('Demo1')" class="w3-button w3-block w3-black w3-left-align w3-hide-large w3-hide-medium">
Menu</button>
<div id="Demo1" class="w3-hide">
<p id="Dashb2" data-location="Dashboard" onclick="newnav(this)" class="newnav w3-block w3-left-align w3-button w3-hover-grey w3-grey">Home</p>
        <p id="profile" data-location="profile_div" onclick="newnav(this)" class="newnav w3-block w3-left-align w3-button w3-hover-grey w3-grey">Profile</p>
        <p id="friends" data-location="friends_div" class="newnav w3-block w3-left-align w3-button w3-hover-grey w3-grey">Friends</p>
        <p id="login" data-location="login_div" data-script="login.js" onclick="newnav(this);window.location.hash = 'login_div'" class="newnav w3-block w3-left-align w3-button w3-hover-grey w3-grey">Login</p>
        <p id="logout" data-location="logout" data-script="logout.js" onclick="newnav(this);window.location.hash = 'Logout'" class="newnav w3-block w3-left-align w3-button w3-hover-grey w3-grey">Logout</p>
        <p id="register" data-location="reg_div" data-script="register.js" onclick="newnav(this);window.location.hash = 'reg_div'" class="newnav w3-block w3-left-align w3-button w3-hover-grey w3-grey">Register</p>
        <p id="Matcha" data-location="Matcha" class="newnav w3-button w3-hover-grey w3-grey w3-block w3-left-align ">MATCHA</p>
</div>

</div>
<br>
    <!-- contentwrapper open up -->
    <div id="content_wrapper" class="w3-container" style="margin-bottom:80px;margin-top:80px;width:100%;">

        <!-- New Approach -->
<!-- <div class="w3-cell-row">
        <p id="demo">Click the button to get your coordinates:</p>
<button  onclick="getLocation()">Try It</button>
</div>-->
<script>
//var x=document.getElementById("demo");

</script> 

<!-- Login Div -->
<!-- <div id="profile_div" class="DynamicDivs w3-container w3-padding w3-animate-zoom" style="max-width:1400px;margin-top:80px;display: none;">    -->
<div id="login_div" class="DynamicDivs w3-container w3-padding w3-animate-left" style="max-width:100%;margin-top:80px;display: none;">
<div class="w3-cell w3-rest">
<form id="log_form" class="w3-container"  onsubmit="return false">
<input id="username" placeholder="username" class="w3-input w3-animate-input" type="text" style="width:170px" ><br>
<input id="password" placeholder="password" class="w3-input w3-animate-input" type="text" style="width:170px"><br>
<button id="loginBtn"  class="w3-btn w3-white w3-border w3-border-purple w3-hover-purple">Login</button>
</form>
</div>
</div>


<!-- Login Div -->


<!-- Reg Div -->

<div id="reg_div" class="DynamicDivs w3-cell-row w3-animate-left" style="max-width:1400px;margin-top:80px;display: none;"">
<form id="reg_form" onsubmit="return false">
<div class="w3-half w3-padding">
<h1> Basic </h1>
<label>username</label>
<input id="regusername" name="username" type="text"   class="w3-input w3-clear" required>
<label>Name</label>
<input id="name" name="name" type="text"   class="w3-input w3-clear" required>
<label>Surname</label>
<input id="surname" name="surname" type="text"  class="w3-input w3-clear" required>
<label>Password</label>
<input id="pass1" name="pass1"  type="text"  class="w3-input w3-clear" required>
<label>Verify Password</label>
<input id="pass2" name="pass2" type="text"  class="w3-input w3-clear" required>
<label>Email</label>
<input type="email"  id="email" name="email" class="w3-input w3-clear" required>
<label>Date of Birth</label>
<input type="date"  id="dob" name="dob" class="w3-input w3-clear" required>

</div>

<div class="w3-half w3-padding w3-border-blue">
<h1> Profile </h1>

<label>Gender</label>
<select id="gender" class="w3-select" name="option">
  <option value="" disabled selected>Choose your Gender</option>
  <option value="male">Male</option>
  <option value="female">Female</option>
  <option value="ask">ask</option>
</select>

<label>Preference</label>
<select id="prefs" class="w3-select" name="option">
  <option value="" disabled selected>Choose your Preference</option>
  <option value="male">Male</option>
  <option value="female">Female</option>
  <option value="Bi">Both</option>
  <option value="none">None</option>
  <option value="PIE">&#8719;</option>
</select>
<hr>
<label>Location</label>
<p id="" name=""  type="text" onclick="getLocation()"  class="w3-input w3-red w3-hover-grey" >Access Location?</p>
<hr>
<label>Interests</label><br>
<input id="sports"  name="sports" class="w3-check" type="checkbox" >
<label>SPORTS</label>
<input id="food" name="food"  class="w3-check" type="checkbox">
<label>FOOD</label>
<input id="movies"  name="movies" class="w3-check" type="checkbox" >
<label>MOVIES</label><br>
<input id="tv" name="tv"  class="w3-check" type="checkbox">
<label>TV</label>
<input id="outdoor"  name="oda" class="w3-check" type="checkbox">
<label>OUTDOOR ACTIVITIES</label>
<textarea placeholder="Enter BIO" rows="4" cols="50" id="Bio" name="Bio"  class="w3-input" type="text" required></textarea>
<!-- <label>BIO</label><br> -->



<!-- <button id="regBtn"  class="w3-btn w3-hover-grey" >Register</button>Register<button> -->
</form>
</div>
<div class="w3-row">

<button id="regBtn"  class="w3-btn w3-hover-grey w3-center w3-black" >Register</button><!-- Register<button> -->

</div>
</div>

<!-- Reg Div -->




<!-- Dashboard Div -->
<div id="Dashboard" class="DynamicDivs  w3-animate-left w3-padding w3-content " style="max-width:1400px;margin-top:80px;display: none;"">

<div class="w3-third w3-padding">
  <div class="w3-card-4 w3-dark-grey">

  <div class="w3-container w3-center">
    <h3>Friend request</h3>
    <img src="" alt="Avatar" style="width:80%">
    <h5>Johndfg Doe</h5>

    <button class="w3-button w3-green">Accept</button>
    <button class="w3-button w3-red">Decline</button>
  </div>
  </div>
</div>
<div class="w3-third w3-padding">
  <div class="w3-card-4 w3-dark-grey">

  <div class="w3-container w3-center">
    <h3>Friend request</h3>
    <img src="" alt="Avatar" style="width:80%">
    <h5>John Doe</h5>

    <button class="w3-button w3-green">Accept</button>
    <button class="w3-button w3-red">Decline</button>
  </div>
  </div>
</div>
<div class="w3-third w3-padding">
  <div class="w3-card-4 w3-dark-grey">

  <div class="w3-container w3-center">
    <h3>Friend request</h3>
    <img src="" alt="Avatar" style="width:80%">
    <h5>John Doe</h5>

    <button class="w3-button w3-green">Accept</button>
    <button class="w3-button w3-red">Decline</button>
  </div>
  </div>
</div>







</div>


<!-- Dashboard Div -->


<!-- profile Div -->



<!-- <meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-blue-grey.css">
<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Open+Sans'>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
html,body,h1,h2,h3,h4,h5 {font-family: "Open Sans", sans-serif}
</style> -->



<!-- Page Container -->
<div id="profile_div" class="DynamicDivs w3-container w3-padding w3-animate-zoom" style="max-width:100%;margin-top:80px;display: none;">    
  <!-- The Grid -->
  <div class="w3-row">
    <!-- Left Column -->
    <div class="w3-col m3">
      <!-- Profile -->
      <div class="w3-card w3-round w3-white">
        <div class="w3-container">
         <h4 class="w3-center">My Profile</h4>
         <p class="w3-center"><img src="https://api.adorable.io/avatars/166/abott@adorable.png" class="w3-circle" style="height:106px;width:106px" alt="Avatar"></p>
         <hr>
         <p><i class="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i><label id="profileName"> Name</label></p>
         <p ><i class="fa fa-home fa-fw w3-margin-right w3-text-theme"></i> <font id="profileLocation">London, UK</font> 
         <p id="profileDOB"><i class="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i> April 1, 1988</p>
        </div>
      </div>
      <br>
      

      
      <!-- Interests --> 
      <div class="w3-card w3-round w3-white w3-hide-small">
        <div class="w3-container">
          <p>Interests</p>
          <div id="interests">

        </div>
        </div>
      </div>
      <br>

    
    <!-- End Left Column -->
    </div>
    
    <!-- Middle Column -->
    <div class="w3-col m7">
    
      <div class="w3-row-padding">
        <div class="w3-col m12">
          <div class="w3-card w3-round w3-white">
            <div class="w3-container w3-padding">
              <h6 class="w3-opacity">Photo Gallery</h6>
              <p name="profilePics" id="profilePics">sdfsdf</p>
              	<form id="uploadForm" action="functions/profilepic.php" method="post">
		<div id="targetOuter">
			<div id="targetLayer"></div>
			
			<div class="icon-choose-image" >
			<input name="userpic" id="userpic" type="file" class="inputFile" />
			</div>
		</div>
		<div>
			<input type="submit" value="Upload Photo" class="btnSubmit" />
		</div>
	</form>
            </div>
          </div>
        </div>
      </div>
      
      <div class="w3-container w3-card w3-white w3-round w3-margin"><br>
      
        
        <h4>Member Profiles</h4><br>
        <hr class="w3-clear">
 
          <div class="w3-row-padding" style="margin:0 -16px">
            <div class="w3-quarter">
              <img src="" style="width:100%" alt="Northern Lights" class="w3-margin-bottom">
            </div>
            <div class="w3-quarter">
              <img src="" style="width:100%" alt="Nature" class="w3-margin-bottom">
          </div>
            <div class="w3-quarter">
              <img src="" style="width:100%" alt="Northern Lights" class="w3-margin-bottom">
            </div>
            <div class="w3-quarter">
              <img src="" style="width:100%" alt="Nature" class="w3-margin-bottom">
          </div>
        </div>
        <button type="button" class="w3-button w3-left w3-theme-d1 w3-margin-bottom"><i class="fa fa-thumbs-up"></i> Left</button> 
        <button type="button" class="w3-button w3-right w3-theme-d2 w3-margin-bottom"><i class="fa fa-comment"></i> Right</button> 
      </div>
      

      
    <!-- End Middle Column -->
    </div>
    
    <!-- Right Column -->
    <div class="w3-col m2">
      <div class="w3-card w3-round w3-white w3-center">
        <div class="w3-container">
          <p>Upcoming Events:</p>
          <img src="" alt="Forest" style="width:100%;">
          <p><strong>Holiday</strong></p>
          <p>Friday 15:00</p>
          <p><button class="w3-button w3-block w3-theme-l4">Info</button></p>
        </div>
      </div>
      <br>
      
      <div class="w3-card w3-round w3-white w3-center">
        <div class="w3-container">
          <p>Friend Request</p>
          <img src="" alt="Avatar" style="width:50%"><br>
          <span>Jane Doe</span>
          <div class="w3-row w3-opacity">
            <div class="w3-half">
              <button class="w3-button w3-block w3-green w3-section" title="Accept"><i class="fa fa-check"></i></button>
            </div>
            <div class="w3-half">
              <button class="w3-button w3-block w3-red w3-section" title="Decline"><i class="fa fa-remove"></i></button>
            </div>
          </div>
        </div>
      </div>
      <br>
      
      
      
      <div class="w3-card w3-round w3-white w3-padding-32 w3-center">
        <p><i class="fa fa-bug w3-xxlarge"></i></p>
      </div>
      
    <!-- End Right Column -->
    </div>
    
  <!-- End Grid -->
  </div>
  
<!-- End Page Container -->
</div>


 






<!-- profile Div -->
































    </div>
    <!-- contentwrapper close -->

<!-- <div class="w3-row w3-bottom"> -->
      <footer class="w3-container w3-padding-8 w3-black w3-bottom">
    <h4 class=" w3-animate-opacity w3-center">MATCHA</h4>
  </footer>
<!-- </div> -->
</body>


<script>
// Get the Sidebar
var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
        overlayBg.style.display = "none";
    } else {
        mySidebar.style.display = 'block';
        overlayBg.style.display = "block";
    }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
    overlayBg.style.display = "none";
}
</script>

<script>

</script>

</html>



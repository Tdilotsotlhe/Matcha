<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="css/w3.css" />
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/test.js"></script>
    <script id ="DynamicScript" src="js/dummy.js"></script>
    <style>

    </style>
</head>
<body  class='w3-light-grey'>
    <div class="w3-container w3-mobile w3-header">
    <h1 class="w3-center">MATCHA</h1>
    <ul class="w3-center ">
        <li id="Dashb" data-location="Dashboard" onclick="newnav(this)" class="newnav w3-button w3-hover-grey w3-black">Home</li>
        <li id="profile" data-location="profile_div" onclick="newnav(this)" class="newnav w3-button w3-hover-grey w3-black">Profile</li>
        <li id="friends" data-location="friends_div" class="newnav w3-button w3-hover-grey w3-black">Friends</li>
        <li id="login" data-location="login_div" data-script="login.js" onclick="newnav(this);window.location.hash = 'login_div'" class="newnav w3-button w3-hover-grey w3-black">Login</li>
        <li id="logout" data-location="logout" data-script="logout.js" onclick="newnav(this);window.location.hash = 'Logout'" class="newnav w3-button w3-hover-grey w3-black">Logout</li>
        <li id="register" data-location="reg_div" data-script="register.js" onclick="newnav(this);window.location.hash = 'reg_div'" class="newnav w3-button w3-hover-grey w3-black">Register</li>
        <li id="Matcha" data-location="Matcha" class="newnav w3-button w3-hover-grey w3-black">MATCHA</li>
    </ul>
</div>
    <!-- contentwrapper open -->
    <div id="content_wrapper">
        <!-- New Approach -->

        

<!-- Login Div -->

<div id="login_div" class="DynamicDivs w3-container w3-animate-left" style="display: none;">
<form id="log_form" class="loginform"  onsubmit="return false">
<input id="username" placeholder="username" class="w3-input">
<input id="password" placeholder="password" class="w3-input">
<button id="loginBtn"  class="w3-btn w3-hover-grey">Login<button>
</form>
</div> 

<!-- Login Div -->


<!-- Reg Div -->

<div id="reg_div" class="DynamicDivs w3-container w3-animate-left" style="display: none;">
<form id="reg_form" onsubmit="return false">
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
<input type="text"  id="email" name="email" class="w3-input w3-clear" required>
<button id="regBtn"  class="w3-btn w3-hover-grey" >Register</button><!-- Register<button> -->
</form>
</div>

<!-- Reg Div -->




<!-- Dashboard Div -->
<div id="Dashboard" class="DynamicDivs w3-animate-zoom" style="display: none;">

<div class="w3-row-padding w3-margin-bottom">
    <div class="w3-quarter">
      <div class="w3-container w3-red w3-padding-16">
        <div class="w3-left"><i class="fa fa-comment w3-xxxlarge"></i></div>
        <div class="w3-right">
          <h3>52</h3>
        </div>
        <div class="w3-clear"></div>
        <h4>Messages</h4>
      </div>
    </div>
    <div class="w3-quarter">
      <div class="w3-container w3-blue w3-padding-16">
        <div class="w3-left"><i class="fa fa-eye w3-xxxlarge"></i></div>
        <div class="w3-right">
          <h3>99</h3>
        </div>
        <div class="w3-clear"></div>
        <h4>Views</h4>
      </div>
    </div>
    <div class="w3-quarter">
      <div class="w3-container w3-teal w3-padding-16">
        <div class="w3-left"><i class="fa fa-share-alt w3-xxxlarge"></i></div>
        <div class="w3-right">
          <h3>23</h3>
        </div>
        <div class="w3-clear"></div>
        <h4>Shares</h4>
      </div>
    </div>
    <div class="w3-quarter">
      <div class="w3-container w3-orange w3-text-white w3-padding-16">
        <div class="w3-left"><i class="fa fa-users w3-xxxlarge"></i></div>
        <div class="w3-right">
          <h3>50</h3>
        </div>
        <div class="w3-clear"></div>
        <h4>Users</h4>
      </div>
    </div>
  </div>
  <div class="w3-panel">
    <div class="w3-row-padding" style="margin:0 -16px">
      <div class="w3-third">
        <h5>Regions</h5>
        <div class="w3-card-4">
  <img src="images/water.jpg" alt="Norway" height="100px"; width="100px";>
  <div class="w3-container w3-center">
    <p>The Italian / Austrian Alps</p>
  </div>
</div>
      </div>
      <div class="w3-twothird">
        <h5>Feeds</h5>
        <table class="w3-table w3-striped w3-white">
          <tbody><tr>
            <td><i class="fa fa-user w3-text-blue w3-large"></i></td>
            <td>New record, over 90 views.</td>
            <td><i>10 mins</i></td>
          </tr>
          <tr>
            <td><i class="fa fa-bell w3-text-red w3-large"></i></td>
            <td>Database error.</td>
            <td><i>15 mins</i></td>
          </tr>
          <tr>
            <td><i class="fa fa-users w3-text-yellow w3-large"></i></td>
            <td>New record, over 40 users.</td>
            <td><i>17 mins</i></td>
          </tr>
          <tr>
            <td><i class="fa fa-comment w3-text-red w3-large"></i></td>
            <td>New comments.</td>
            <td><i>25 mins</i></td>
          </tr>
          <tr>
            <td><i class="fa fa-bookmark w3-text-blue w3-large"></i></td>
            <td>Check transactions.</td>
            <td><i>28 mins</i></td>
          </tr>
          <tr>
            <td><i class="fa fa-laptop w3-text-red w3-large"></i></td>
            <td>CPU overload.</td>
            <td><i>35 mins</i></td>
          </tr>
          <tr>
            <td><i class="fa fa-share-alt w3-text-green w3-large"></i></td>
            <td>New shares.</td>
            <td><i>39 mins</i></td>
          </tr>
        </tbody></table>
      </div>
    </div>
  </div>
  <div class="w3-container">
    <h5>Recent Users</h5>
    <ul class="w3-ul w3-card-4 w3-white">
      <li class="w3-padding-16">
        <span class="w3-xlarge">Mike</span><br>
      </li>
      <li class="w3-padding-16">
        <span class="w3-xlarge">Jill</span><br>
      </li>
      <li class="w3-padding-16">
        <span class="w3-xlarge">Jane</span><br>
      </li>
    </ul>
  </div>

</div>


<!-- Dashboard Div -->


<!-- profile Div -->
<div id="profile_div" class=" DynamicDivs w3-container  w3-cell w3-mobile w3-theme-d4 w3-animate-opacity w3-animate-zoom" style="display: none;">
  <p>MY PROFILE</p>

  <div class="w3-panel w3-text-theme w3-round-xlarge">
<label>username</label>
<input class="w3-input w3-theme-d4" type="text" id="newname">
<p><button onclick="changeuser();" class="w3-btn w3-round">Submit</button></p>
</div>
  
  <div class="w3-panel  w3-text-theme w3-round-xlarge">
  <label>email</label>
<input class="w3-input w3-theme-d4" type="text" id="newemail">
<p><button onclick="changeemail()" class="w3-btn w3-round">Submit</button></p>

</div>
  
<div class="w3-panel  w3-text-theme w3-round-xlarge">
<label>Notifications</label>
<input id="notcheckbox" class="w3-check" type="checkbox" checked="checked">
</div>


<!-- profile Div -->































    </div>
    <!-- contentwrapper close -->


      <footer class="w3-container w3-padding-16 w3-clear">
    <h4 class=" w3-clear  w3-center w3-animate-bottom">MATCHA</h4>
  </footer>
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

</html>

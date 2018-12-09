<!-- login form -->
<div id="login_div" class="w3-container w3-animate-left">
<form id="login_form" onsubmit="alert('submit!');return false">
<input id="username" placeholder="username" class="w3-input">
<input id="password" placeholder="password" class="w3-input">
<button id="loginBtn" class="w3-btn w3-hover-grey">Login<button>
</form>
</div> 

<!-- registration form -->
<div id="reg_div" class="w3-container w3-animate-left">
<div id="reg_form" >
<label>username</label>
<input id="username" name="username" type="text"   class="w3-input" required>
<label>Name</label>
<input id="name" name="name" type="text"   class="w3-input" required>
<label>Surname</label>
<input id="surname" name="surname" type="text"  class="w3-input" required>
<label>Password</label>
<input id="pass1" name="pass1"  type="text"  class="w3-input" required>
<label>Verify Password</label>
<input id="pass2" name="pass2" type="text"  class="w3-input" required>
<label>Email</label>
<input type="text"  id="email" name="email" class="w3-input" required>
<button id="regBtn"  class="w3-btn w3-hover-grey" >Register</button><!-- Register<button> -->
</div>

</div>

<!-- upload image form -->
<div id="upload_div" class="w3-container w3-animate-left">
<form id="login">
<input id="username" class="w3-input">
<input id="password" class="w3-input">
<button id="loginBtn" class="w3-btn w3-hover-grey">Login<button>
</form>
</div>

<!-- profile div -->
<div id="Profile" class="w3-container  w3-cell w3-mobile w3-theme-d4 w3-animate-opacity w3-animate-zoom">
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


<!-- users cards -->
<div id="user cards" class="w3-container">
  <h4><b>John</b></h4>    
  <p>Architect and engineer</p>    
  </div>

  <!-- login/registration -->
<!-- <div id="loginreg" class="w3-container w3-red">
<div id="login_div" class="w3-container w3-animate-left">
<form id="login_form">
<input id="username" placeholder="username" class="w3-input">
<input id="password" placeholder="password" class="w3-input">
<button id="loginBtn" class="w3-btn w3-hover-grey">Login<button>
</form>
</div>

<div id="reg_div" class="w3-container w3-animate-left">
<form id="login">
<input id="username" class="w3-input">
<input id="password" class="w3-input">
<button id="loginBtn" class="w3-btn w3-hover-grey">Login<button>
</form>
</div>
</div> -->
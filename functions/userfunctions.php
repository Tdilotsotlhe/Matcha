<?php

if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

switch ($_REQUEST['action']) {
    case 'checkLog':
            if (isset($_SESSION['username'])) {
                echo 1;
               // exit;
            }else{
                echo 0;
            }
        break;

    case 'newUser':
        if (isset($_REQUEST['username'])) {
           reguser();
        }else{
            echo 0;
        }
    break;

    case 'emptyProfile':
        if (checkProf() == "1") {
           echo 1;
        }else{
            echo 0;
        }
    break;

    case 'Login':
      /*   if (isset($_REQUEST['username'])) { */
           Login();
      /*   }else{ */
      /*       echo 0; */
      /*   } */
    break;
        

    case 'getProf':
         if (isset($_REQUEST['loadProfile'])) { 
           fetchProfile();
        }else{ 
            echo 0; 
        } 
    break;
        
    case 'getMyIP':
            getIP();
    break;
        
    }
    

    function fetchProfile(){
      $id = $_SESSION['uid'];

      require_once "../config/database.php";

      try {
          $dbh = new PDO($DB_DSN, $DB_USER, $DB_PASS);
          $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
        print "Error!: " . $e->getMessage() . "<br/>";
        die();
        }
        
         try {
          $dbh->query("USE ".$DB_NAME);
        } catch (Exception $e) {
           die("db creation failed!");
        } 
        
          try { 
            $stmt = $dbh->prepare("SELECT * FROM users WHERE `user_id`=?");
            if($stmt->execute([$id])){
              
              if($row = $stmt->fetch()){ 

                     echo json_encode($row);
                    // exit();
                  }
                  else{
                      echo 0;
                      exit();
                  }
            }
          } catch (PDOException $e) {
        print "Error!: " . $e->getMessage() . "<br/>";
        die();
        }
      
    }



function reguser()
{


include "../config/database.php";




 $user = $_REQUEST['username'];
 $pass = $_REQUEST['pass1'];
 $pass2 = $_REQUEST['pass2'];
 $email = $_REQUEST['email'];
 $acthash =md5(rand(0,1010));

 //run validation

 //Var_dump($_POST);

try {
  $dbh = new PDO($DB_DSN, $DB_USER, $DB_PASS);
  $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
 // echo "yes";
} catch (PDOException $e) {
print "Error!: " . $e->getMessage() . "<br/>";
die();
}


 //select DB
 try {
  $dbh->query("USE ".$DB_NAME);
} catch (Exception $e) {
   die("db creation failed!");
} 



  try { 
    $test = array();
    $test['Profiletype'] = "NewProfile";
    $test['friends'] = "none";
    $test['interests'] = $_REQUEST['profile'];
    $test['gender'] = $_REQUEST['option'];
     // $newprofile = json_encode($test);
    //  $newprofile = json_encode("empty prilfe : empty");

    $sql = "INSERT INTO users (username, passw, email, acthash, `first_name`, `last_name`, `profile`) VALUES (:username, :passw, :email, :acthash, :nme, :snme, :pfile)";
    $stmt= $dbh->prepare($sql);
    $stmt->bindParam(':username', $user);
    $stmt->bindParam(':passw', $pass);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':acthash', $acthash);
    $stmt->bindParam(':nme', $_REQUEST['name']);
    $stmt->bindParam(':snme', $_REQUEST['surname']);
    $stmt->bindParam(':pfile', $newprofile);


  if($stmt->execute()){
    //sendVerify($email, $acthash);
    echo "1";
  }
   
 } catch (PDOException $e) {
print "Error!: " . $e->getMessage() . "<br/>";
die();
 }  




////move to new file for other email functionss
function  sendVerify($em, $ah)
{
//require "Mail.php";
$to = $em;
$subject = "Camagru account activation";

$message = "
<html>
<head>
<title>Camagru Account Activaiton</title>
</head>
<body>
<p>Welcome to camagru!</p>
<p>Thank you fore registering!</p>
<p>Pleasue use the link below to activate your account</p>
<p>".$ah."</p>
http://localhost:8080/camagru/act.php?act=".$ah."
</body>
</html>
";

// Always set content-type when sending HTML email

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
//$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";


if(mail($to,$subject,$message,$headers, "-f phenom92@gmail.here"))
{
  echo "Instructions :";
  $errorMessage = error_get_last()['message'];
  echo $errorMessage;
}
else{
  $errorMessage = error_get_last()['message'];
  echo $errorMessage;
}

}






}




//////throw scripts into seperate sections

function setlogin($row)
    {
      $_SESSION['uid'] = $row['user_id'];
      $_SESSION['username'] = $row['username'];
     // $_SESSION['emailnotif'] = $row["notification"];
    }

function Login(){
/*     var_dump($_REQUEST);
    echo "fokol"; */


    require_once "../config/database.php";


    $user = $_REQUEST['username'];
    $pwrd = $_REQUEST['password']; 
    
 /*    echo $user;
    echo $pwrd;
    exit(); */
    
    try {
        $dbh = new PDO($DB_DSN, $DB_USER, $DB_PASS);
        $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      } catch (PDOException $e) {
      print "Error!: " . $e->getMessage() . "<br/>";
      die();
      }
      
       try {
        $dbh->query("USE ".$DB_NAME);
      } catch (Exception $e) {
         die("db creation failed!");
      } 
      
        try { 
          $stmt = $dbh->prepare("SELECT * FROM users WHERE username=?");
          if($stmt->execute([$user])){
            
            if($row = $stmt->fetch()){ 
            //  var_dump(simplexml_load_string($unser));
            
           
                 if (strcmp($row['username'], $user) == 0 && $pwrd == $row['passw'])
                {
                
                    setlogin($row);
                   // echo "Welcome ".$row['username']; 
                   echo "1";
                   exit();
                
                }
                else{
                    echo 0;
                }
          }
        }
       } catch (PDOException $e) {
      print "Error!: " . $e->getMessage() . "<br/>";
      die();
      }
    



}




function checkProf(){
  include "../config/database.php";

    if(isset($_SESSION['uid'])){

    

    try {
      $dbh = new PDO($DB_DSN, $DB_USER, $DB_PASS);
      $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // echo "yes";
    } catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
    }

    //select DB
    try {
      $dbh->query("USE ".$DB_NAME);
    } catch (Exception $e) {
      die("db creation failed!");
    } 




    try { 
    

    $sql = "SELECT * FROM users WHERE user_id = :id";
    
    $stmt= $dbh->prepare($sql);
    $stmt->bindParam(':id', $_SESSION['uid']);
    if($row = $stmt->execute()){
    //sendVerify($email, $acthash);
    echo $row['profile'];
    }else{
      echo "shit";
    }

    } catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
    }  
  }else{
    echo 0;
    exit();
  }


}


function getIP()
{
  echo $_SERVER['REMOTE_ADDR'];
}



?>
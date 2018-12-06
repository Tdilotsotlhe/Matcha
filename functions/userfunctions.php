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
        
    }
    
function reguser()
{
    var_dump($_REQUEST);
    echo $_REQUEST['username'];
    echo $_REQUEST['name'];
    echo $_REQUEST['surname'];
    echo $_REQUEST['pass1'];
    echo $_REQUEST['pass2'];
    echo $_REQUEST['email'];
}



?>
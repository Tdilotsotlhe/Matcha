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
    }





?>
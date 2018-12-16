<?php
$DB_DSN = 'mysql:host=localhost';
$DB_USER = "root";
$DB_PASS = "adambogas123";
$DB_NAME = "matcha";
$options = [
    // turn off emulation mode for "real" prepared statements
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION, //turn on errors in the form of exceptions
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC, //make the default fetch be an associative array
  ];
$dbh = NULL;
if (session_status() == PHP_SESSION_NONE) {
  session_start();
}


function newDB(){
  global $DB_DSN,$DB_NAME,$DB_PASS,$DB_USER;

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

  return $dbh;
}
?>
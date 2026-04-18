<?php
//file for SLG connection
$db_servername = "localhost";
$db_username = "root";
$db_password = "";
$db_database_name = "shortlinks_golf";
    //the database connection string will be changed to include actual login info
    $db_conn = mysqli_connect($db_servername, $db_username, $db_password, $db_database_name);
?>
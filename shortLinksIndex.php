<?php
session_start();
$welcomeMessage = "";
$errorMessage = "";
require_once("SLGDBCon.php");
if(isset($_SESSION['GroupSesName'])) {
        $welcomeMessage = $_SESSION['GroupSesName'];
        } else {
        echo "No session data found.";
    }
if ($_SERVER['REQUEST_METHOD']=='POST'){
    $GIDInput = $_POST['GIDInput'];
    $GroupSessionName = $_SESSION["GroupSesName"];
    $sql = "SELECT * FROM playing_group WHERE group_name = '$GroupSessionName' AND group_code = '$GIDInput';";
    $result = mysqli_query($db_conn, $sql);
    $check = mysqli_fetch_array($result);

    if(isset($check)){
        header('Location: SLGMakeALobby.php');
    } else {
        $errorMessage ="Incorrect group code, Please try again";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shortlinks homepage</title>
    <link rel="stylesheet" href="MainSLCSS.css">
    <script src="SLGvalidUser.js"></script>
</head>
<body>
    <div><?php echo $errorMessage;?></div>
    <h1>Welcome to Shortlinks Golf, <?php echo $welcomeMessage?> group!</h1><br>
    <h2>When you are ready to start, login using your group ID</h2><br>
    <form action="shortLinksIndex.php" name="loginForm" id="LoginForm" method="post" onsubmit="return validUser();">
        <input type="text" id="GIDInput" name="GIDInput" required placeholder="Group ID">
        <br><div id="GIDErr"></div><br>
        <input type="Submit"></input>
    </form>
</body>
</htm
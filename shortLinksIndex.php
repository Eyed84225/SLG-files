<?php
//the connection to the database to check the group will go here
//for now the group ID is set 0001 for test purpose
$GroupID = 0x0001;
//Input from form
$GIDInput = $_POST['GIDInput'];
if($GIDInput == $GroupID){
    header('Location: SLGMakeALobby.php');
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
    <h1>Welcome to Shortlinks Golf</h1>
    <h2>When you are ready to start, login using your group ID</h2>
    <!-- PlaceHolder for now -->
    <form action="shortLinksIndex.php" name="loginForm" id="LoginForm" method="post" onsubmit="return validUser();">
        <input type="text" id="GIDInput" name="GIDInput" required placeholder="Group ID">
        <br><div id="GIDErr"></div><br>
        <input type="Submit"></input>
    </form>
</body>
</html>
<?php
session_start();
$Username = $_POST['UserName'];
echo "<script>console.log('$Username');</script>";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MakeAPlayer</title>
    <link rel="stylesheet" href="MakeAPlayer.css">
    <script src="MakeAPlayer.js"></script>
</head>
<body>
    <h1>ShortLinks Golf</h1>
    <h2>Avatar Creation</h2>
    <!-- Avas -->
    <div class="Avatarholder">
        <div class="AvatarPlace" id="AvaOne" onclick="Avatar1Pick();">
            Avatar One<br>
            <img class="avatar" id="AvatarOnePic" src="AvatarM_01mouthclosed.png" alt="Male Avatar 1">
        </div>
        <div class="AvatarPlace" id="AvaTwo" onclick="Avatar2Pick();">
            Avatar Two<br>
            <img class="avatar" id="AvatarTwoPic" src="AvatarF_02mouthclosed.png" alt="Female Avatar 1">
        </div>
        <div class="AvatarPlace" id="AvaThree" onclick="Avatar3Pick();">
            Avatar Three<br>
            <img class="avatar" id="AvatarThreePic" src="AvatarM_03.png" alt="Male Avatar 2">
        </div>
        <div class="AvatarPlace" id="AvaFour" onclick="Avatar4Pick();">
            Avatar Four<br>
            <img class="avatar" id="AvatarFourPic" src="Avatarf_04mouthclosed.png" alt="Female Avatar 2">
        </div>
        <div class="AvatarPlace" id="AvaFive" onclick="Avatar5Pick();">
            Avatar Five<br>
            <img class="avatar" id="AvatarFivePic" src="AvatarA_05mouthclosed.png" alt="Animal Avatar">
        </div>

        <div class="AvatarPlace" id="AvaSix" onclick="Avatar6Pick();">
            Avatar Six<br>
            <img class="avatar" id="AvatarSixPic" src="AvatarA_06mouthclosed.png" alt="Animal Avatar">
        </div>
        <div class="AvatarPlace" id="AvaSeven" onclick="Avatar7Pick();">
            Avatar Seven<br>
            <img class="avatar" id="AvatarSevenPic" src="AvatarA_07mouthclosed.png" alt="Animal Avatar">
        </div>
        <div class="AvatarPlace" id="AvaEight" onclick="Avatar8Pick();">
            Avatar Eight<br>
            <img class="avatar" id="AvatarEightPic" src="AvatarA_08mouthclosed.png" alt="Animal Avatar">
        </div>
        <div class="AvatarPlace" id="AvaNine" onclick="Avatar9Pick();">
            Avatar Nine<br>
            <img class="avatar" id="AvatarNinePic" src="AvatarA_09mouthclosed.png" alt="Animal Avatar">
        </div>
        <div class="AvatarPlace" id="AvaTen" onclick="Avatar10Pick();">
            Avatar Ten<br>
            <img class="avatar" id="AvatarTenPic" src="AvatarA_10mouthclosed.png" alt="Animal Avatar">
        </div>
    </div>
    <br>
    <form name="UserForm" id="UserForm" onsubmit="return validName();" action="MakeAPlayer.php" method="post">
        <input type="text" required placeholder="Player Name" id="UserName" name="UserName">
        <br>
        <div id="UserErr"></div>
        <button type="submit">Submit Username</button>
    </form>
</body>
</html>
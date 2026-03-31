<?php
session_start();
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
    <!-- For now, alt will be void but can be change for accessibility-->
    <div class="Avatarholder">
        <div class="AvatarPlace" id="AvaOne" onclick="Avatar1Pick();">Avatar One
            <div class="Picholder"><img id="AvatarOnePic" src="AvatarM_01mouthclosed.png" alt=""></div>
        </div>
        <div class="AvatarPlace" id="AvaTwo" onclick="Avatar2Pick();">Avatar Two
            <div class="Picholder"><img id="AvatarTwoPic" src="AvatarM_03.png" alt=""></div>
        </div>
        <div class="AvatarPlace" id="AvaThree" onclick="Avatar3Pick();">Avatar Three
            <div class="Picholder"><img id="AvatarThreePic" src="Avatarf_04mouthclosed.png" alt=""></div>
        </div>
        <div class="AvatarPlace" id="AvaFour" onclick="Avatar4Pick();">Avatar Four
            <div class="Picholder"><img id="AvatarFourPic" src="AvatarA_05mouthclosed.png" alt=""></div>
        </div>
    </div>
    <br>
    <div class="Avatarholder">
        <div class="AvatarPlace" id="AvaFive" onclick="Avatar5Pick();">Avatar Five
            <div class="PicHolder" id=><img id="AvatarFivePic" src="AvatarA_06mouthclosed.png" alt=""></div>
        </div>
        <div class="AvatarPlace" id="AvaSix" onclick="Avatar6Pick();">Avatar Six
            <div class="PicHolder" id=><img id="AvatarSixPic" src="AvatarA_07mouthclosed.png" alt=""></div>
        </div>
        <div class="AvatarPlace" id="AvaSeven" onclick="Avatar7Pick();">Avatar Seven
            <div class="PicHolder" id=><img id="AvatarSevenPic" src="AvatarA_08mouthclosed.png" alt=""></div>
        </div>
    </div>
    <!-- <form action="MakeAPlayer.php" method="get" name="UserForm" id="UserForm" onsubmit="return validName();">
        <input type="text" required placeholder="Player Name" id="TxtUserName">
        <br>
        <div id="UserErr"></div>
        <button type="submit">Submit Username</button>
    </form> -->
</body>
</html>
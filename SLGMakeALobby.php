<?php
session_start();
// add way for session vars to be held.
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Make a Lobby</title>
    <link rel="stylesheet" href="MakeALobby.css">
</head>
<body>
    <!-- Can be set up to be dynamic and only include how many players are in the group -->
    <!-- For now, will include button to move forward with how many players are inputed -->
    <h1>Shortlinks Golf</h1>
    <h2>Welcome, </h2>
    <div class="Playerholder">
        <div class="Player" id="PlayerOneCont" name="Player1" onclick="PlayerOneSetup();">Player One
            <div id="Player1AvaPick"><img class="Hidden" id="Player1AvaPickImg" src="" alt=""></div>
        </div>

        <div class="Player" id="PlayerTwoCont" name="Player2" onclick="PlayerTwoSetup();">Player Two
            <div id="Player2AvaPick"><img class="Hidden" id="Player2AvaPickImg" src="" alt=""></div>
        </div>
            
        <div class="Player" id="PlayerThreeCont" name="Player3" onclick="PlayerThreeSetup();">Player Three
            <div id="Player3AvaPick"><img class="Hidden" id="Player3AvaPickImg" src="" alt=""></div>
        </div>
        <div class="Player" id="PlayerFourCont" name="Player4" onclick="PlayerFourSetup();">Player Four
            <div id="Player4AvaPick"><img class="Hidden" id="Player4AvaPickImg" src="" alt=""></div>
        </div>
    </div>
    <br>
    <p>When all players are ready, press the button below to play some golf!</p>
    <button onclick="Playtime();">Time to Play</button>
    <script src="MakeALobby.js"></script>

</body>
</html>
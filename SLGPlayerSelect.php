<?php
session_start()
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PlayerSelect</title>
    <link rel="stylesheet" href="SLGPlayerSelect.css">
</head>
<body>
    <h1>Player Select</h1>
    <h2>Now that all players are setup, select your profile and prepare to headout!</h2>
    <div class="Playerholder">
        <div class="Player" id="PlayerOneCont" name="Player1" onclick="PlayerOneSelect();">Player One
            <div id="Player1NamePick"></div>
            <div id="Player1AvaPick"><img class="Hidden" id="Player1AvaPickImg" src="" alt=""></div>
        </div>

        <div class="Player" id="PlayerTwoCont" name="Player2" onclick="PlayerTwoSelect();">Player Two
            <div id="Player2NamePick"></div>
            <div id="Player2AvaPick"><img class="Hidden" id="Player2AvaPickImg" src="" alt=""></div>
        </div>
            
        <div class="Player" id="PlayerThreeCont" name="Player3" onclick="PlayerThreeSelect();">Player Three
            <div id="Player3NamePick"></div>
            <div id="Player3AvaPick"><img class="Hidden" id="Player3AvaPickImg" src="" alt=""></div>
        </div>
        <div class="Player" id="PlayerFourCont" name="Player4" onclick="PlayerFourSelect();">Player Four
            <div id="Player4NamePick"></div>
            <div id="Player4AvaPick"><img class="Hidden" id="Player4AvaPickImg" src="" alt=""></div>
        </div>
    </div>
    <script src="SLGPlayerSelect.js"></script>
</body>
</html>
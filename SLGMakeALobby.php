<?php
session_start();
$welcomeMessage = "";
require_once("SLGDBCon.php");
if(isset($_SESSION['GroupSesName'])) {
        $welcomeMessage = $_SESSION['GroupSesName'];
        } else {
        echo "No session data found.";
    }
function UpdatePlayer(){
    $data = json_decode(file_get_contents('php://input'), true) ?: [];
    if (isset($data['P1Csettings'])) {
    $_SESSION['P1Csettings'] = $data['P1Csettings'];
    print_r($_SESSION['P1Csettings']);
    exit;
    } else {
        echo "It biffed";
    }
}UpdatePlayer();

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
    <h2>Welcome, <?php echo $welcomeMessage ?> Group</h2>
    <div class="Playerholder">
        <div class="Player" id="PlayerOneCont" name="Player1" onclick="PlayerOneSetup();">Player One
            <div id="Player1NamePick"></div>
            <div id="Player1AvaPick"><img class="Hidden" id="Player1AvaPickImg" src="" alt=""></div>
        </div>

        <div class="Player" id="PlayerTwoCont" name="Player2" onclick="PlayerTwoSetup();">Player Two
            <div id="Player2NamePick"></div>
            <div id="Player2AvaPick"><img class="Hidden" id="Player2AvaPickImg" src="" alt=""></div>
        </div>
            
        <div class="Player" id="PlayerThreeCont" name="Player3" onclick="PlayerThreeSetup();">Player Three
            <div id="Player3NamePick"></div>
            <div id="Player3AvaPick"><img class="Hidden" id="Player3AvaPickImg" src="" alt=""></div>
        </div>
        <div class="Player" id="PlayerFourCont" name="Player4" onclick="PlayerFourSetup();">Player Four
            <div id="Player4NamePick"></div>
            <div id="Player4AvaPick"><img class="Hidden" id="Player4AvaPickImg" src="" alt=""></div>
        </div>
    </div>
    <br>
    <p>When all players are ready, press the button below to play some golf!</p>
    <button onclick="Playtime();">Time to Play</button>
    <script src="MakeALobby.js"></script>
</body>
</html>
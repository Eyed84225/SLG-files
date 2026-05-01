<?php
session_start();
$welcomeMessage = "";
require_once("SLGDBCon.php");
if(isset($_SESSION['GroupSesName'])) {
        $welcomeMessage = $_SESSION['GroupSesName'];
        } else {
        echo "No session data found.";
    }

$json = file_get_contents('php://input');
$data = json_decode($json, true);
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    header('Content-Type: application/json');
//p1
    if (isset($data['POneAvaChoice'], $data['POneNameChoice'])) {
        $_SESSION['POneAvaChoice'] = $data['POneAvaChoice'];
        $_SESSION['POneNameChoice'] = $data['POneNameChoice'];

        echo json_encode([
            "status" => "success",
            "received_data1" => $data['POneAvaChoice'],
            "received_data2" => $data['POneNameChoice']
        ]);
        exit;
    } 
    // else {
    //     echo json_encode([
    //         "status" => "error",
    //         "message" => "No data received for p1"
    //     ]);
    //     exit;
    // }
//p2
    if (isset($data['PTwoAvaChoice'], $data['PTwoNameChoice'])) {
        $_SESSION['PTwoAvaChoice'] = $data['PTwoAvaChoice'];
        $_SESSION['PTwoNameChoice'] = $data['PTwoNameChoice'];

        echo json_encode([
            "status" => "success",
            "received_data1" => $data['PTwoAvaChoice'],
            "received_data2" => $data['PTwoNameChoice']
        ]);
        exit;
    } 
    // else {
    //     echo json_encode([
    //         "status" => "error",
    //         "message" => "No data received for p2"
    //     ]);
    //     exit;
    // }
//p3
    if (isset($data['PThreeAvaChoice'], $data['PThreeNameChoice'])) {
        $_SESSION['PThreeAvaChoice'] = $data['PThreeAvaChoice'];
        $_SESSION['PThreeNameChoice'] = $data['PThreeNameChoice'];

        echo json_encode([
            "status" => "success",
            "received_data1" => $data['PThreeAvaChoice'],
            "received_data2" => $data['PThreeNameChoice']
        ]);
        exit;
    } 
    // else {
    //     echo json_encode([
    //         "status" => "error",
    //         "message" => "No data received for p3"
    //     ]);
    //     exit;
    // }
//p4
    if (isset($data['PFourAvaChoice'], $data['PFourNameChoice'])) {
        $_SESSION['PFourData'] = $data['PFourAvaChoice'];
        $_SESSION['PFourNameChoice'] = $data['PFourNameChoice'];

        echo json_encode([
            "status" => "success",
            "received_data1" => $data['PFourAvaChoice'],
            "received_data2" => $data['PFourNameChoice']
        ]);
        exit;
    } 
    else {
        echo json_encode([
            "status" => "error",
            "message" => "No data received"
        ]);
        exit;
    }
    }
function DbUpdate(){
    $p1AvaData = $_SESSION['POneAvaChoice'];
    $p1NameData = $_SESSION['POneNameChoice'];
    // p2
    $p2AvaData = $_SESSION['PTwoAvaChoice'];
    $p2NameData = $_SESSION['PTwoNameChoice'];
    //p3
    $p3AvaData = $_SESSION['PThreeAvaChoice'];
    $p3NameData = $_SESSION['PThreeNameChoice'];
    //p4
    $p4AvaData = $_SESSION['PFourAvaChoice'];
    $p4NameData = $_SESSION['PFourNameChoice'];
    // sql to check if their is a rec, will update later
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Make a Lobby</title>
    <link rel="stylesheet" href="MakeALobby.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
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
    <p>When all players are ready,<br>press the button below to confirm setup and then step out on to the green!</p>
    <button onclick="Playtime();">Time to Play</button>
    <script src="MakeALobby.js"></script>
</body>
</html>
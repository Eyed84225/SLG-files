<!-- <?php
session_start();
require_once("SLGDBCon.php");
$sql = "SELECT avatarName, avatar_image_path FROM avatar";
$resultsql = mysqli_query($db_conn, $sql);

if (mysqli_num_rows($resultsql) > 0) {
     while($row = mysqli_fetch_assoc($resultsql)) {
         echo "Ava Name: " . $row["avatarName"]. " - Path: " . $row["avatar_image_path"]. "<br>";
    }
    echo "</table>";
} else {
    echo "No results found.";
}
$db_conn->close();
?> -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Actual lobby</title>
    <link rel="stylesheet" href="GameLobby.css">
</head>
<body>
    <h1>Short Links Golf</h1>
    <h2>Time to play some Golf!<br>Who would like to hit first?</h2>
    <div class="Playerholder">
        <div class="Player" id="PlayerOneCont" name="Player1">Player One
            <div id="Player1NamePick"></div>
            <div id="Player1AvaPick"><img class="Hidden" id="Player1AvaPickImg" src="" alt=""></div>
        </div>

        <div class="Player" id="PlayerTwoCont" name="Player2">Player Two
            <div id="Player2NamePick"></div>
            <div id="Player2AvaPick"><img class="Hidden" id="Player2AvaPickImg" src="" alt=""></div>
        </div>
            
        <div class="Player" id="PlayerThreeCont" name="Player3">Player Three
            <div id="Player3NamePick"></div>
            <div id="Player3AvaPick"><img class="Hidden" id="Player3AvaPickImg" src="" alt=""></div>
        </div>
        <div class="Player" id="PlayerFourCont" name="Player4">Player Four
            <div id="Player4NamePick"></div>
            <div id="Player4AvaPick"><img class="Hidden" id="Player4AvaPickImg" src="" alt=""></div>
        </div>
    </div>
    <br>
    <!-- Alexander's Overlays -->
    <!-- Scorecard button -->
    <button id="showScorecard">Scorecard</button>

    <!-- Overlay for the scoreboard -->
    <div id="overlay"></div>

    <!-- Scorecard -->
    <div class="scoreCard" id="scoreCard">
        <button id="closeBtn">X</button>
        <h2>Scorecard</h2>
        <table>
            <thead>
                <tr>
                    <th>Player</th>
                    <th>Hole 1</th>
                    <th>Hole 2</th>
                    <th>Hole 3</th>
                    <th>Hole 4</th>
                    <th>Hole 5</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Player 1</td>
                    <td>4</td>
                    <td>5</td>
                    <td>3</td>
                    <td>4</td>
                    <td>4</td>
                    <td>20</td>
                </tr>
                <tr>
                    <td>Player 2</td>
                    <td>5</td>
                    <td>4</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>21</td>
                </tr>
                <tr>
                    <td>Player 3</td>
                    <td>3</td>
                    <td>4</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>19</td>
                </tr>
                <tr>
                    <td>Player 4</td>
                    <td>5</td>
                    <td>4</td>
                    <td>3</td>
                    <td>4</td>
                    <td>3</td>
                    <td>19</td>
                </tr>
            </tbody>
        </table>
    </div>

    
    <div class="infoBoxes">
        <div class="textBox" id="faq">
            <img src="FAQ icon.png" class="boxIcon" alt="FAQ Icon">
            <p>FAQ</p>
        </div>
        <div class="textBox" id="golf">
            <img src="Course Play Kno-How icon.png" class="boxIcon" alt="Course Know How Icon">
            <p>Course Play Know-How</p>
        </div>
        <div class="textBox" id="tips">
            <img src="golf-ball.png" class="boxIcon" alt="Golf Ball Icon">
            <p>Shot Play Tip</p>
        </div>
    </div>

    <!-- Added overlays for FAQ, Shot Tip, and Course play know-how -->
    <div class="overlaySlide" id="faqOverlay">
        <button class="closeOverlay">X</button>
        <h2>FAQ</h2>
        <p>Q. How do I start playing Shortlinks™ Golf?<br>1. Once all of the group's players are setup, the Engagement App will get the first player ready to hit at the first hole's long shot play</p>
        <p>2. Complete long shot play as directed by the respective long shot play system.</p>
        <p>When remaining yardage for the hole is within the range of the current hole's finishing fairway distance (often, between 50-100yds), navigation instructions will transition you to the other side of the player's lounge; and onto your current hole's SLG Finishing Fairway for you to physically play and putt your shots to finish the hole.</p>  
    </div>

    <div class="overlaySlide" id="courseOverlay">
        <button class="closeOverlay">X</button>
        <h2>Course Play Know-How</h2>
        <!-- Remove when we have more tips -->
        <p>Tips about course strategy, and club selection</p>
        <p>When your approach shot on the finishing fairway ends up being off the green, take your putter along with any other club used. This helps wuth pace of play.</p>
    </div>

    <div class="overlaySlide" id="tipsOverlay">
        <button class="closeOverlay">X</button>
        <h2>Shot Play Tip</h2>
        <p>Recommend using loftier (higher degree) club than your 45% wedge your previously used at this distance.</p>
        <br>
        <p>You hit the green, but then<br>came to rest 5yds beyond the green.</p>
    </div>

    <script src="SLGGameLobby.js"></script>
</body>
</html>
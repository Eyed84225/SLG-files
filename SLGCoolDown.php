<?php
session_start();
$ActivePlayer = $_SESSION['ActivePlayer'];

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cooldown</title>
    <link rel="stylesheet" href="SLGCoolDown.css">
</head>
<body>
    <div class="banners">
        <div class="topBox">
	        <h2><?php echo $ActivePlayer?> is active player!</h2>
        </div>

        <div class="activePlayerText">
            <!-- Moon cut as seen in figma -->
            <div class="halfMoon"></div>
            <img class="avatar" id="PImg" src="" alt="Player avatar">
            <h1 class="playerShotText"><?php echo $ActivePlayer?>, Hangout while the rest of your group plays</h1>
        </div>
    </div>
    <br>
        <button id="showScorecard">Scorecard</button>

    <!-- Overlay for the scoreboard -->
    <div id="overlay"></div>

    <!-- Scorecard -->
    <div class="overlayPanel" id="scoreCard">
        <button class="closeOverlay">Close X</button>
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
                    <th>Hole 6</th>
                    <th>Hole 7</th>
                    <th>Hole 8</th>
                    <th>Hole 9</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr id="PlayerOneShots">
                    <td>Player 1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr id="PlayerTwoShots">
                    <td>Player 2</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr id="PlayerThreeShots">
                    <td>Player 3</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr id="PlayerFourShots">
                    <td>Player 4</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
            </tbody>
        </table>
    </div>

    
    <div class="infoBoxes">
        
        <div class="textBox" id="golf">
            <img src="icons\Course Play Kno-How icon.png" class="boxIcon" alt="Course Know How Icon">
            <p>Course Play Know-How</p>
        </div>

        <div class="textBox" id="faq">
            <img src="icons\FAQ icon.png" class="boxIcon" alt="FAQ Icon">
            <p>FAQ</p>
        </div>

        <div class="textBox" id="tips">
            <img src="icons\golf-ball.png" class="boxIcon" alt="Golf Ball Icon">
            <p>Shot Play Tip</p>
        </div>
    </div>

    <!-- Added overlays for FAQ, Shot Tip, and Course play know-how -->
    <div class="overlayPanel" id="faqOverlay">
        <button class="closeOverlay">X</button>
        <h2>FAQ</h2>
        <p>Q. How do I start playing Shortlinks™ Golf?<br>1. Once all of the group's players are setup, the Engagement App will get the first player ready to hit at the first hole's long shot play</p>
        <br>
        <p>2. Complete long shot play as directed by the respective long shot play system.</p>
        <p>When remaining yardage for the hole is within the range of the current hole's finishing fairway distance (often, between 50-100yds), navigation instructions will transition you to the other side of the player's lounge; and onto your current hole's SLG Finishing Fairway for you to physically play and putt your shots to finish the hole.</p>
          
    </div>

    <div class="overlayPanel" id="courseOverlay">
        <button class="closeOverlay">X</button>
        <h2>Course Play Know-How</h2>
        <!-- Remove when we have more tips -->
        <p>Tips about course strategy, and club selection</p>
        <p>When your approach shot on the finishing fairway ends up being off the green, take your putter along with any other club used. This helps with pace of play.</p>
    </div>

    <div class="overlayPanel" id="tipsOverlay">
        <button class="closeOverlay">X</button>
        <h2>Shot Play Tip</h2>
        <p>Recommend using loftier (higher degree) club than your 45% wedge your previously used at this distance.</p>
        <br>
        <p>You hit the green, but then<br>came to rest 5yds beyond the green.</p>
    </div>
    <script src="SLGCoolDown.js"></script>
</body>
</html>
<?php
session_start();
$ActivePlayer = $_SESSION['ActivePlayer'];

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shot Score</title>
    <link rel="stylesheet" href="SLGScoreShot.css">
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
            <h1 class="playerShotText"><?php echo $ActivePlayer?> confirm your score below!</h1>
        </div>
    </div>

    <h3>How many strokes for this shot?</h3>
    <form action="SLGScoreShot.php" method="POST" id="ShotReg" Name="ShotReg" onsubmit="ScoreCheck();">
    <input type="text" id="ScoreInput" name="ScoreInput" required placeholder="0">
    <!-- <button id="ReplayBTN" onclick="ReplayLastShot();">Replay Last Shot</button> -->
    <button id="completeShot" type="Submit">Confirm Score</button>
    </form>
    <div id="SErr"></div>
    <div id="scoreCard">
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
                    <td id="PlayerOneName">Player 1</td>
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
                    <td id="PlayerTwoName">Player 2</td>
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
                    <td id="PlayerThreeName">Player 3</td>
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
                    <td id="PlayerFourName">Player 4</td>
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
    <script src="SLGScoreShot.js"></script>
</body>
</html>
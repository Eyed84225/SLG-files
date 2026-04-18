<?php 
require_once("SLGDBCon.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome Page</title>
    <link rel="stylesheet" href="MainSLCSS.css">
</head>
<body>
    <body>
    <div class="welcomeMessage">
        <h1 class="title">Welcome to the Short Links Companion App</h1>
        <p class="subtitle">We are excited to have you here and can't wait to host your group on the fairway</p>
        <button class="startBtn" onclick="LoadIndex();">Tap to Begin</button>
    </div>

    <script>
        function LoadIndex(){
            window.location.href = 'SLGFindGroup.php';
        }
    </script>
</body>
</html>
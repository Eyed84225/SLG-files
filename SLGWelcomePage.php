<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome Page</title>
    <link rel="stylesheet" href="MainSLCSS.css">

</head>
<body>
    <h1>Welcome to the Short Links Companion App</h1>
    <p>We are excited to have you here and can't wait to host your group on the fairway</p>
    <button onclick="LoadIndex();">Tap to Begin</button>

    <script>
        function LoadIndex(){
            window.location.href = 'shortLinksIndex.php';
        }
    </script>
</body>
</html>
<?php
    session_start();
    require_once("SLGDBCon.php");
    $FirstGroupsql = "SELECT group_name FROM playing_group ORDER BY group_name LIMIT 1 OFFSET 1";
    $SecondGroupsql = "SELECT group_name FROM playing_group ORDER BY group_name LIMIT 1 OFFSET 0";
    $ThridGroupsql = "SELECT group_name FROM playing_group ORDER BY group_name LIMIT 1 OFFSET 2";
    $Firstresultsql = mysqli_query($db_conn, $FirstGroupsql);
    $Secondresultsql = mysqli_query($db_conn, $SecondGroupsql);
    $Thirdresultsql = mysqli_query($db_conn, $ThridGroupsql);
    $checkOne = mysqli_fetch_array($Firstresultsql);
    $checkTwo = mysqli_fetch_array($Secondresultsql);
    $checkThree = mysqli_fetch_array($Thirdresultsql);
    $stringOne = $checkOne["group_name"];
    $stringTwo = $checkTwo["group_name"];
    $stringThree = $checkThree["group_name"];

    function GroupOneSessionStart($groupName){
            $_SESSION['id'] = session_id();
            $_SESSION['GroupSesName'] = $groupName;
            print_r($_SESSION['GroupSesName']);
    }
    function GroupTwoSessionStart($groupName){
            $_SESSION['id'] = session_id();
            $_SESSION['GroupSesName'] = $groupName;
            print_r($_SESSION['GroupSesName']);
    }
    function GroupThreeSessionStart($groupName){
            $_SESSION['id'] = session_id();
            $_SESSION['GroupSesName'] = $groupName;
            print_r($_SESSION['GroupSesName']);
    }
    
    if(isset($_POST['functionName'])) {
        if($_POST['functionName'] == 'GroupOneSessionStart'){
            GroupOneSessionStart($_POST['groupName']);
            exit;
        }
    }
    if(isset($_POST['functionName'])) {
        if($_POST['functionName'] == 'GroupTwoSessionStart'){
            GroupTwoSessionStart($_POST['groupName']);
            exit;
        }
    }
    if(isset($_POST['functionName'])) {
        if($_POST['functionName'] == 'GroupThreeSessionStart'){
            GroupThreeSessionStart($_POST['groupName']);
            exit;
        }
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FindGroup</title>
    <link rel="stylesheet" href="MainSLCSS.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="FindGroup.js"></script>
</head>
<body>
    <h1>Please, select your group</h1>
    <!-- First group -->
    <div>
    <?php
        if(isset($checkOne)){
            echo "<div class='groupHolder' id='g1' onclick='Firstgroup(\"".$stringOne."\")'>". "Active Groups: ". $checkOne["group_name"]."</div>"."<br>";
        } else {
            echo "No results found.";
        }
        // second data
        if(isset($checkTwo)){
            echo "<div class='groupHolder' id='g2' onclick='Secondgroup(\"".$stringTwo."\")'>". "Active Groups: ". $checkTwo["group_name"]."</div>"."<br>";
        } else {
            echo "No results found.";
        }
        // third group
        if(isset($checkThree)){
            echo "<div class='groupHolder' id='g3' onclick='Thirdgroup(\"".$stringThree."\")'>". "Active Groups: ". $checkThree["group_name"]."</div>"."<br>";
        } else {
            echo "No results found.";
        }
    ?>
    </div>
</body>
</html>
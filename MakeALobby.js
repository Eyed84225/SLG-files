const PlayerOneCon = document.getElementById('PlayerOneCont');
const PlayerTwoCon = document.getElementById('PlayerTwoCont');
const PlayerThreeCon = document.getElementById('PlayerThreeCont');
const PlayerFourCon = document.getElementById('PlayerFourCont');
var PlayerNumber;
var Player1Pick;
var Player2Pick;
var Player3Pick;
var Player4Pick;
function PlayerOneSetup(){
    PlayerOneCon.classList.add('locked');
    PlayerNumber=1;
    sessionStorage.setItem("PlayerNumberRec", PlayerNumber);

    window.location.href = "MakeAPlayer.php";
}
function PlayerTwoSetup(){
    PlayerTwoCon.classList.add('locked');
    PlayerNumber=2;
    sessionStorage.setItem("PlayerNumberRec", PlayerNumber);

    window.location.href = "MakeAPlayer.php";
}
function PlayerThreeSetup(){
    PlayerTwoCon.classList.add('locked');
    PlayerNumber=3;
    sessionStorage.setItem("PlayerNumberRec", PlayerNumber);

    window.location.href = "MakeAPlayer.php";
}
function PlayerFourSetup(){
    PlayerTwoCon.classList.add('locked');
    PlayerNumber=4;
    sessionStorage.setItem("PlayerNumberRec", PlayerNumber);

    window.location.href = "MakeAPlayer.php";
}
const storedChoice = sessionStorage.getItem("AvaChoice").trim();
const storedName = sessionStorage.getItem("PlayerName")
PlayerNumber = sessionStorage.getItem("PlayerNumberRec");
function CheckAvaChoice() {
    console.log(storedChoice);
    console.log(PlayerNumber);
    if (PlayerNumber == 1){
        Player1Pick = storedChoice;
        Player1Name = storedName;
        sessionStorage.setItem("PlayerOneChoice",Player1Pick);
        sessionStorage.setItem("PlayerOneName", Player1Name);
        console.log("Player 1 has chose");
    }
    if(PlayerNumber == 2){
        Player2Pick = storedChoice;
        Player2Name = storedName;
        sessionStorage.setItem("PlayerTwoChoice",Player2Pick);
        sessionStorage.setItem("PlayerTwoName", Player2Name);
        console.log("Player 2 has chose"); 
    }
    if(PlayerNumber == 3){
        Player3Pick = storedChoice;
        Player3Name = storedName;
        sessionStorage.setItem("PlayerThreeChoice",Player3Pick);
        sessionStorage.setItem("PlayerThreeName", Player3Name);
        console.log("Player 3 has chose");
    }
    if(PlayerNumber == 4){
        Player4Pick = storedChoice;
        Player4Name = storedName;
        sessionStorage.setItem("PlayerFourChoice",Player4Pick);
        sessionStorage.setItem("PlayerFourName", Player4Name);
        console.log("Player 4 has chose");
    }
    else{
        console.log("Move along");
    }
}
function CheckStorage() {
    // Player Setup Options
    //p1
    if( sessionStorage.getItem("PlayerOneChoice") != null){
        let P1Img = document.getElementById("Player1AvaPickImg");
        let P1Choice = sessionStorage.getItem("PlayerOneChoice").trim();
        let P1Name = sessionStorage.getItem("PlayerOneName");
        // data push to php 
        fetch('SLGMakeALobby.php', {
        method: 'POST',
        body: JSON.stringify({ P1Csettings: P1Choice })
        });
        // Name Change
        document.getElementById("Player1NamePick").textContent = P1Name;
        // Image changes
        if(P1Choice === "Avatar One"){
            P1Img.src = "AvatarM_01mouthclosed.png";
            P1Img.classList.remove('Hidden')
            PlayerOneCon.classList.add('locked');
            document.getElementById('Player1AvaPick').contentEditable = false;
        }
        if(P1Choice === "Avatar Two"){
            P1Img.src = "AvatarF_02mouthclosed.png";
            P1Img.classList.remove('Hidden')
            PlayerOneCon.classList.add('locked');
            document.getElementById('Player1AvaPick').contentEditable = false;
        }
        if(P1Choice === "Avatar Three"){
            P1Img.src = "AvatarM_03.png";
            P1Img.classList.remove('Hidden')
            PlayerOneCon.classList.add('locked');
            document.getElementById('Player1AvaPick').contentEditable = false;
        }
        if(P1Choice === "Avatar Four"){
            P1Img.src = "AvatarF_04mouthclosed.png";
            P1Img.classList.remove('Hidden')
            PlayerOneCon.classList.add('locked');
            document.getElementById('Player1AvaPick').contentEditable = false;
        }
        if(P1Choice === "Avatar Five"){
            P1Img.src = "AvatarA_05mouthclosed.png";
            P1Img.classList.remove('Hidden')
            PlayerOneCon.classList.add('locked');
            document.getElementById('Player1AvaPick').contentEditable = false;
        }
        if(P1Choice === "Avatar Six"){
            P1Img.src = "AvatarA_06mouthclosed.png";
            P1Img.classList.remove('Hidden')
            PlayerOneCon.classList.add('locked');
            document.getElementById('Player1AvaPick').contentEditable = false;
        }
        if(P1Choice === "Avatar Seven"){
            P1Img.src = "AvatarA_07mouthclosed.png";
            P1Img.classList.remove('Hidden')
            PlayerOneCon.classList.add('locked');
            document.getElementById('Player1AvaPick').contentEditable = false;
        }
        if(P1Choice === "Avatar Eight"){
            P1Img.src = "AvatarA_08mouthclosed.png";
            P1Img.classList.remove('Hidden')
            PlayerOneCon.classList.add('locked');
            document.getElementById('Player1AvaPick').contentEditable = false;
        }
        if(P1Choice === "Avatar Nine"){
            P1Img.src = "AvatarA_09mouthclosed.png";
            P1Img.classList.remove('Hidden')
            PlayerOneCon.classList.add('locked');
            document.getElementById('Player1AvaPick').contentEditable = false;
        }
        if(P1Choice === "Avatar Ten"){
            P1Img.src = "AvatarA_10mouthclosed.png";
            P1Img.classList.remove('Hidden')
            PlayerOneCon.classList.add('locked');
            document.getElementById('Player1AvaPick').contentEditable = false;
        }
    }
    //p2
    if( sessionStorage.getItem("PlayerTwoChoice") != null){
        let P2Img = document.getElementById("Player2AvaPickImg");
        let P2Choice = sessionStorage.getItem("PlayerTwoChoice").trim();
        let P2Name = sessionStorage.getItem("PlayerTwoName");
        // Name Change
        document.getElementById("Player2NamePick").textContent = P2Name;
        // Image changes
        if(P2Choice === "Avatar One"){
            P2Img.src = "AvatarM_01mouthclosed.png";
            P2Img.classList.remove('Hidden')
            PlayerTwoCon.classList.add('locked');
            document.getElementById('Player2AvaPick').contentEditable = false;
        }
        if(P2Choice === "Avatar Two"){
            P2Img.src = "AvatarF_02mouthclosed.png";
            P2Img.classList.remove('Hidden')
            PlayerTwoCon.classList.add('locked');
            document.getElementById('Player2AvaPick').contentEditable = false;
        }
        if(P2Choice === "Avatar Three"){
            P2Img.src = "AvatarM_03.png";
            P2Img.classList.remove('Hidden')
            PlayerTwoCon.classList.add('locked');
            document.getElementById('Player2AvaPick').contentEditable = false;
        }
        if(P2Choice === "Avatar Four"){
            P2Img.src = "AvatarF_04mouthclosed.png";
            P2Img.classList.remove('Hidden')
            PlayerTwoCon.classList.add('locked');
            document.getElementById('Player2AvaPick').contentEditable = false;
        }
        if(P2Choice === "Avatar Five"){
            P2Img.src = "AvatarA_05mouthclosed.png";
            P2Img.classList.remove('Hidden')
            PlayerTwoCon.classList.add('locked');
            document.getElementById('Player2AvaPick').contentEditable = false;
        }
        if(P2Choice === "Avatar Six"){
            P2Img.src = "AvatarA_06mouthclosed.png";
            P2Img.classList.remove('Hidden')
            PlayerTwoCon.classList.add('locked');
            document.getElementById('Player2AvaPick').contentEditable = false;
        }
        if(P2Choice === "Avatar Seven"){
            P2Img.src = "AvatarA_07mouthclosed.png";
            P2Img.classList.remove('Hidden')
            PlayerTwoCon.classList.add('locked');
            document.getElementById('Player2AvaPick').contentEditable = false;
        }
        if(P2Choice === "Avatar Eight"){
            P2Img.src = "AvatarA_08mouthclosed.png";
            P2Img.classList.remove('Hidden')
            PlayerTwoCon.classList.add('locked');
            document.getElementById('Player2AvaPick').contentEditable = false;
        }
        if(P2Choice === "Avatar Nine"){
            P2Img.src = "AvatarA_09mouthclosed.png";
            P2Img.classList.remove('Hidden')
            PlayerTwoCon.classList.add('locked');
            document.getElementById('Player2AvaPick').contentEditable = false;
        }
        if(P2Choice === "Avatar Ten"){
            P2Img.src = "AvatarA_10mouthclosed.png";
            P2Img.classList.remove('Hidden')
            PlayerTwoCon.classList.add('locked');
            document.getElementById('Player2AvaPick').contentEditable = false;
        }
    }
    //p3
    if( sessionStorage.getItem("PlayerThreeChoice") != null){
        let P3Img = document.getElementById("Player3AvaPickImg");
        let P3Choice = sessionStorage.getItem("PlayerThreeChoice").trim();
        let P3Name = sessionStorage.getItem("PlayerThreeName");
        // Name Change
        document.getElementById("Player3NamePick").textContent = P3Name;
        // Image changes
        if(P3Choice === "Avatar One"){
            P3Img.src = "AvatarM_01mouthclosed.png";
            P3Img.classList.remove('Hidden')
            PlayerThreeCon.classList.add('locked');
            document.getElementById('Player3AvaPick').contentEditable = false;
        }
        if(P3Choice === "Avatar Two"){
            P3Img.src = "AvatarF_02mouthclosed.png";
            P3Img.classList.remove('Hidden')
            PlayerThreeCon.classList.add('locked');
            document.getElementById('Player3AvaPick').contentEditable = false;
        }
        if(P3Choice === "Avatar Three"){
            P3Img.src = "AvatarM_03.png";
            P3Img.classList.remove('Hidden')
            PlayerThreeCon.classList.add('locked');
            document.getElementById('Player3AvaPick').contentEditable = false;
        }
        if(P3Choice === "Avatar Four"){
            P3Img.src = "AvatarF_04mouthclosed.png";
            P3Img.classList.remove('Hidden')
            PlayerThreeCon.classList.add('locked');
            document.getElementById('Player3AvaPick').contentEditable = false;
        }
        if(P3Choice === "Avatar Five"){
            P3Img.src = "AvatarA_05mouthclosed.png";
            P3Img.classList.remove('Hidden')
            PlayerThreeCon.classList.add('locked');
            document.getElementById('Player3AvaPick').contentEditable = false;
        }
        if(P3Choice === "Avatar Six"){
            P3Img.src = "AvatarA_06mouthclosed.png";
            P3Img.classList.remove('Hidden')
            PlayerThreeCon.classList.add('locked');
            document.getElementById('Player3AvaPick').contentEditable = false;;
        }
        if(P3Choice === "Avatar Seven"){
            P3Img.src = "AvatarA_07mouthclosed.png";
            P3Img.classList.remove('Hidden')
            PlayerThreeCon.classList.add('locked');
            document.getElementById('Player3AvaPick').contentEditable = false;
        }
        if(P3Choice === "Avatar Eight"){
            P3Img.src = "AvatarA_08mouthclosed.png";
            P3Img.classList.remove('Hidden')
            PlayerThreeCon.classList.add('locked');
            document.getElementById('Player3AvaPick').contentEditable = false;        
        }
        if(P3Choice === "Avatar Nine"){
            P3Img.src = "AvatarA_09mouthclosed.png";
            P3Img.classList.remove('Hidden')
            PlayerThreeCon.classList.add('locked');
            document.getElementById('Player3AvaPick').contentEditable = false;        
        }
        if(P3Choice === "Avatar Ten"){
            P3Img.src = "AvatarA_10mouthclosed.png";
            P3Img.classList.remove('Hidden')
            PlayerThreeCon.classList.add('locked');
            document.getElementById('Player3AvaPick').contentEditable = false;        
        }
    }
    //p4
    if( sessionStorage.getItem("PlayerFourChoice") != null){
        let P4Img = document.getElementById("Player4AvaPickImg");
        let P4Choice = sessionStorage.getItem("PlayerFourChoice").trim();
        let P4Name = sessionStorage.getItem("PlayerFourName");
        // Name Change
        document.getElementById("Player4NamePick").textContent = P4Name;
        // Image changes
        if(P4Choice === "Avatar One"){
            P4Img.src = "AvatarM_01mouthclosed.png";
            P4Img.classList.remove('Hidden')
            PlayerFourCon.classList.add('locked');
            document.getElementById('Player4AvaPick').contentEditable = false;
        }
        if(P4Choice === "Avatar Two"){
            P4Img.src = "AvatarF_02mouthclosed.png";
            P4Img.classList.remove('Hidden')
            PlayerFourCon.classList.add('locked');
            document.getElementById('Player4AvaPick').contentEditable = false;
        }
        if(P4Choice === "Avatar Three"){
            P4Img.src = "AvatarM_03.png";
            P4Img.classList.remove('Hidden')
            PlayerFourCon.classList.add('locked');
            document.getElementById('Player4AvaPick').contentEditable = false;
        }
        if(P4Choice === "Avatar Four"){
            P4Img.src = "AvatarF_04mouthclosed.png";
            P4Img.classList.remove('Hidden')
            PlayerFourCon.classList.add('locked');
            document.getElementById('Player4AvaPick').contentEditable = false;
        }
        if(P4Choice === "Avatar Five"){
            P4Img.src = "AvatarA_05mouthclosed.png";
            P4Img.classList.remove('Hidden')
            PlayerFourCon.classList.add('locked');
            document.getElementById('Player4AvaPick').contentEditable = false;
        }
        if(P4Choice === "Avatar Six"){
            P4Img.src = "AvatarA_06mouthclosed.png";
            P4Img.classList.remove('Hidden')
            PlayerFourCon.classList.add('locked');
            document.getElementById('Player4AvaPick').contentEditable = false;
        }
        if(P4Choice === "Avatar Seven"){
            P4Img.src = "AvatarA_07mouthclosed.png";
            P4Img.classList.remove('Hidden')
            PlayerFourCon.classList.add('locked');
            document.getElementById('Player4AvaPick').contentEditable = false;
        }
        if(P4Choice === "Avatar Eight"){
            P4Img.src = "AvatarA_08mouthclosed.png";
            P4Img.classList.remove('Hidden')
            PlayerFourCon.classList.add('locked');
            document.getElementById('Player4AvaPick').contentEditable = false;
        }
        if(P4Choice === "Avatar Nine"){
            P4Img.src = "AvatarA_09mouthclosed.png";
            P4Img.classList.remove('Hidden')
            PlayerFourCon.classList.add('locked');
            document.getElementById('Player4AvaPick').contentEditable = false;
        }
        if(P4Choice === "Avatar Ten"){
            P4Img.src = "AvatarA_10mouthclosed.png";
            P4Img.classList.remove('Hidden')
            PlayerFourCon.classList.add('locked');
            document.getElementById('Player4AvaPick').contentEditable = false;
        }
    }
    else{
        console.log("Check CLeared")
    }
}
function Playtime(){
    window.location.href = "SLGGameLobby.php";
}
CheckAvaChoice();
CheckStorage();
sessionStorage.removeItem("AvaChoice");
sessionStorage.removeItem("PlayerName");
sessionStorage.removeItem("PlayerNumberRec");
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
// const storedName = sessionStorage.getItem("PlayerName")
PlayerNumber = sessionStorage.getItem("PlayerNumberRec");
function CheckAvaChoice() {
    console.log(storedChoice);
    console.log(PlayerNumber);
    if (PlayerNumber == 1){
        Player1Pick = storedChoice;
        sessionStorage.setItem("PlayerOneChoice",Player1Pick);
        console.log("Player 1 has chose");
        // sessionStorage.setItem("Player1Name", storedName)
    }
    if(PlayerNumber == 2){
        Player2Pick = storedChoice;
        sessionStorage.setItem("PlayerTwoChoice",Player2Pick);
        console.log("Player 2 has chose"); 
    }
    if(PlayerNumber == 3){
        Player3Pick = storedChoice;
        sessionStorage.setItem("PlayerThreeChoice",Player3Pick);
        console.log("Player 3 has chose");
    }
    if(PlayerNumber == 4){
        Player4Pick = storedChoice;
        sessionStorage.setItem("PlayerFourChoice",Player4Pick);
        console.log("Player 4 has chose");
    }
    else{
        console.log("Move along");
    }
}
function CheckStorage() {
    // Player Setup Options
    if( sessionStorage.getItem("PlayerOneChoice") != null){
        let P1Img = document.getElementById("Player1AvaPickImg");
        let P1Choice = sessionStorage.getItem("PlayerOneChoice").trim();
        if(P1Choice === "Avatar One"){
            P1Img.src = "AvatarM_01mouthclosed.png";
            P1Img.classList.remove('Hidden')
            PlayerOneCon.classList.add('locked');
            document.getElementById('Player1AvaPick').contentEditable = false;
        }
        if(P1Choice === "Avatar Two"){
            P1Img.src = "AvatarM_03.png";
            P1Img.classList.remove('Hidden')
            PlayerOneCon.classList.add('locked');
            document.getElementById('Player1AvaPick').contentEditable = false;
        }
        if(P1Choice === "Avatar Three"){
            P1Img.src = "Avatarf_04mouthclosed.png";
            P1Img.classList.remove('Hidden')
            PlayerOneCon.classList.add('locked');
            document.getElementById('Player1AvaPick').contentEditable = false;
        }
        if(P1Choice === "Avatar Four"){
            P1Img.src = "AvatarA_05mouthclosed.png";
            P1Img.classList.remove('Hidden')
            PlayerOneCon.classList.add('locked');
            document.getElementById('Player1AvaPick').contentEditable = false;
        }
        if(P1Choice === "Avatar Five"){
            P1Img.src = "AvatarA_06mouthclosed.png";
            P1Img.classList.remove('Hidden')
            PlayerOneCon.classList.add('locked');
            document.getElementById('Player1AvaPick').contentEditable = false;
        }
        if(P1Choice === "Avatar Six"){
            P1Img.src = "AvatarA_07mouthclosed.png";
            P1Img.classList.remove('Hidden')
            PlayerOneCon.classList.add('locked');
            document.getElementById('Player1AvaPick').contentEditable = false;
        }
        if(P1Choice === "Avatar Seven"){
            P1Img.src = "AvatarA_08mouthclosed.png";
            P1Img.classList.remove('Hidden')
            PlayerOneCon.classList.add('locked');
            document.getElementById('Player1AvaPick').contentEditable = false;
        }
    }
    
    if( sessionStorage.getItem("PlayerTwoChoice") != null){
        let P2Img = document.getElementById("Player2AvaPickImg");
        let P2Choice = sessionStorage.getItem("PlayerTwoChoice").trim();
        if(P2Choice === "Avatar One"){
            P2Img.src = "AvatarM_01mouthclosed.png";
            P2Img.classList.remove('Hidden')
            PlayerTwoCon.classList.add('locked');
            document.getElementById('Player2AvaPick').contentEditable = false;
        }
        if(P2Choice === "Avatar Two"){
            P2Img.src = "AvatarM_03.png";
            P2Img.classList.remove('Hidden')
            PlayerTwoCon.classList.add('locked');
            document.getElementById('Player2AvaPick').contentEditable = false;
        }
        if(P2Choice === "Avatar Three"){
            P2Img.src = "Avatarf_04mouthclosed.png";
            P2Img.classList.remove('Hidden')
            PlayerTwoCon.classList.add('locked');
            document.getElementById('Player2AvaPick').contentEditable = false;
        }
        if(P2Choice === "Avatar Four"){
            P2Img.src = "AvatarA_05mouthclosed.png";
            P2Img.classList.remove('Hidden')
            PlayerTwoCon.classList.add('locked');
            document.getElementById('Player2AvaPick').contentEditable = false;
        }
        if(P2Choice === "Avatar Five"){
            P2Img.src = "AvatarA_06mouthclosed.png";
            P2Img.classList.remove('Hidden')
            PlayerTwoCon.classList.add('locked');
            document.getElementById('Player2AvaPick').contentEditable = false;
        }
        if(P2Choice === "Avatar Six"){
            P2Img.src = "AvatarA_07mouthclosed.png";
            P2Img.classList.remove('Hidden')
            PlayerTwoCon.classList.add('locked');
            document.getElementById('Player2AvaPick').contentEditable = false;
        }
        if(P2Choice === "Avatar Seven"){
            P2Img.src = "AvatarA_08mouthclosed.png";
            P2Img.classList.remove('Hidden')
            PlayerTwoCon.classList.add('locked');
            document.getElementById('Player2AvaPick').contentEditable = false;
        }
    }
    if( sessionStorage.getItem("PlayerThreeChoice") != null){
        let P3Img = document.getElementById("Player3AvaPickImg");
        let P3Choice = sessionStorage.getItem("PlayerThreeChoice").trim();
        if(P3Choice === "Avatar One"){
            P3Img.src = "AvatarM_01mouthclosed.png";
            P3Img.classList.remove('Hidden')
            PlayerThreeCon.classList.add('locked');
            document.getElementById('Player3AvaPick').contentEditable = false;
        }
        if(P3Choice === "Avatar Two"){
            P3Img.src = "AvatarM_03.png";
            P3Img.classList.remove('Hidden')
            PlayerThreeCon.classList.add('locked');
            document.getElementById('Player3AvaPick').contentEditable = false;
        }
        if(P3Choice === "Avatar Three"){
            P3Img.src = "Avatarf_04mouthclosed.png";
            P3Img.classList.remove('Hidden')
            PlayerThreeCon.classList.add('locked');
            document.getElementById('Player3AvaPick').contentEditable = false;
        }
        if(P3Choice === "Avatar Four"){
            P3Img.src = "AvatarA_05mouthclosed.png";
            P3Img.classList.remove('Hidden')
            PlayerThreeCon.classList.add('locked');
            document.getElementById('Player3AvaPick').contentEditable = false;
        }
        if(P3Choice === "Avatar Five"){
            P3Img.src = "AvatarA_06mouthclosed.png";
            P3Img.classList.remove('Hidden')
            PlayerThreeCon.classList.add('locked');
            document.getElementById('Player3AvaPick').contentEditable = false;
        }
        if(P3Choice === "Avatar Six"){
            P3Img.src = "AvatarA_07mouthclosed.png";
            P3Img.classList.remove('Hidden')
            PlayerThreeCon.classList.add('locked');
            document.getElementById('Player3AvaPick').contentEditable = false;
        }
        if(P3Choice === "Avatar Seven"){
            P3Img.src = "AvatarA_08mouthclosed.png";
            P3Img.classList.remove('Hidden')
            PlayerOneCon.classList.add('locked');
            document.getElementById('Player1AvaPick').contentEditable = false;
        }
    }
    if( sessionStorage.getItem("PlayerFourChoice") != null){
        let P4Img = document.getElementById("Player4AvaPickImg");
        let P4Choice = sessionStorage.getItem("PlayerFourChoice").trim();
        if(P4Choice === "Avatar One"){
            P4Img.src = "AvatarM_01mouthclosed.png";
            P4Img.classList.remove('Hidden')
            PlayerFourCon.classList.add('locked');
            document.getElementById('Player4AvaPick').contentEditable = false;
        }
        if(P4Choice === "Avatar Two"){
            P4Img.src = "AvatarM_03.png";
            P4Img.classList.remove('Hidden')
            PlayerFourCon.classList.add('locked');
            document.getElementById('Player4AvaPick').contentEditable = false;
        }
        if(P4Choice === "Avatar Three"){
            P4Img.src = "Avatarf_04mouthclosed.png";
            P4Img.classList.remove('Hidden')
            PlayerFourCon.classList.add('locked');
            document.getElementById('Player4AvaPick').contentEditable = false;
        }
        if(P4Choice === "Avatar Four"){
            P4Img.src = "AvatarA_05mouthclosed.png";
            P4Img.classList.remove('Hidden')
            PlayerFourCon.classList.add('locked');
            document.getElementById('Player4AvaPick').contentEditable = false;
        }
        if(P4Choice === "Avatar Five"){
            P4Img.src = "AvatarA_06mouthclosed.png";
            P4Img.classList.remove('Hidden')
            PlayerFourCon.classList.add('locked');
            document.getElementById('Player4AvaPick').contentEditable = false;
        }
        if(P4Choice === "Avatar Six"){
            P4Img.src = "AvatarA_07mouthclosed.png";
            P4Img.classList.remove('Hidden')
            PlayerFourCon.classList.add('locked');
            document.getElementById('Player4AvaPick').contentEditable = false;
        }
        if(P4Choice === "Avatar Seven"){
            P4Img.src = "AvatarA_08mouthclosed.png";
            P4Img.classList.remove('Hidden')
            PlayerFourCon.classList.add('locked');
            document.getElementById('Player4AvaPick').contentEditable = false;
        }
    }
    else{
        console.log("Check CLeared")
    }
}
CheckAvaChoice();
CheckStorage();
sessionStorage.removeItem("AvaChoice");
sessionStorage.removeItem("PlayerNumberRec");
console.log("2nd"+storedChoice);
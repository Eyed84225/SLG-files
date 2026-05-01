const PlayerOneCon = document.getElementById('PlayerOneCont');
const PlayerTwoCon = document.getElementById('PlayerTwoCont');
const PlayerThreeCon = document.getElementById('PlayerThreeCont');
const PlayerFourCon = document.getElementById('PlayerFourCont');
function CheckStorage() {
    // Player Setup Options
    if( sessionStorage.getItem("PlayerOneChoice") != null){
        let P1Img = document.getElementById("Player1AvaPickImg");
        let P1Choice = sessionStorage.getItem("PlayerOneChoice").trim();
        let P1Name = sessionStorage.getItem("PlayerOneName");
        // Name Change
        document.getElementById("Player1NamePick").textContent = P1Name;
        // Image changes
        if(P1Choice === "Avatar One"){
            P1Img.src = "AvatarM_01mouthclosed.png";
            P1Img.classList.remove('Hidden')
        }
        if(P1Choice === "Avatar Two"){
            P1Img.src = "AvatarF_02mouthclosed.png";
            P1Img.classList.remove('Hidden')
        }
        if(P1Choice === "Avatar Three"){
            P1Img.src = "AvatarM_03.png";
            P1Img.classList.remove('Hidden')
        }
        if(P1Choice === "Avatar Four"){
            P1Img.src = "AvatarF_04mouthclosed.png";
            P1Img.classList.remove('Hidden')
        }
        if(P1Choice === "Avatar Five"){
            P1Img.src = "AvatarA_05mouthclosed.png";
            P1Img.classList.remove('Hidden')
        }
        if(P1Choice === "Avatar Six"){
            P1Img.src = "AvatarA_06mouthclosed.png";
            P1Img.classList.remove('Hidden')
        }
        if(P1Choice === "Avatar Seven"){
            P1Img.src = "AvatarA_07mouthclosed.png";
            P1Img.classList.remove('Hidden')
        }
        if(P1Choice === "Avatar Eight"){
            P1Img.src = "AvatarA_08mouthclosed.png";
            P1Img.classList.remove('Hidden')
        }
        if(P1Choice === "Avatar Nine"){
            P1Img.src = "AvatarA_09mouthclosed.png";
            P1Img.classList.remove('Hidden')
        }
        if(P1Choice === "Avatar Ten"){
            P1Img.src = "AvatarA_10mouthclosed.png";
            P1Img.classList.remove('Hidden')
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
        }
        if(P2Choice === "Avatar Two"){
            P2Img.src = "AvatarF_02mouthclosed.png";
            P2Img.classList.remove('Hidden')
        }
        if(P2Choice === "Avatar Three"){
            P2Img.src = "AvatarM_03.png";
            P2Img.classList.remove('Hidden')
        }
        if(P2Choice === "Avatar Four"){
            P2Img.src = "AvatarF_04mouthclosed.png";
            P2Img.classList.remove('Hidden')
        }
        if(P2Choice === "Avatar Five"){
            P2Img.src = "AvatarA_05mouthclosed.png";
            P2Img.classList.remove('Hidden')
        }
        if(P2Choice === "Avatar Six"){
            P2Img.src = "AvatarA_06mouthclosed.png";
            P2Img.classList.remove('Hidden')
        }
        if(P2Choice === "Avatar Seven"){
            P2Img.src = "AvatarA_07mouthclosed.png";
            P2Img.classList.remove('Hidden')
        }
        if(P2Choice === "Avatar Eight"){
            P2Img.src = "AvatarA_08mouthclosed.png";
            P2Img.classList.remove('Hidden')
        }
        if(P2Choice === "Avatar Nine"){
            P2Img.src = "AvatarA_09mouthclosed.png";
            P2Img.classList.remove('Hidden')
        }
        if(P2Choice === "Avatar Ten"){
            P2Img.src = "AvatarA_10mouthclosed.png";
            P2Img.classList.remove('Hidden')
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
        }
        if(P3Choice === "Avatar Two"){
            P3Img.src = "AvatarF_02mouthclosed.png";
            P3Img.classList.remove('Hidden')
        }
        if(P3Choice === "Avatar Three"){
            P3Img.src = "AvatarM_03.png";
            P3Img.classList.remove('Hidden')
        }
        if(P3Choice === "Avatar Four"){
            P3Img.src = "AvatarF_04mouthclosed.png";
            P3Img.classList.remove('Hidden')
        }
        if(P3Choice === "Avatar Five"){
            P3Img.src = "AvatarA_05mouthclosed.png";
            P3Img.classList.remove('Hidden')
        }
        if(P3Choice === "Avatar Six"){
            P3Img.src = "AvatarA_06mouthclosed.png";
            P3Img.classList.remove('Hidden')
        }
        if(P3Choice === "Avatar Seven"){
            P3Img.src = "AvatarA_07mouthclosed.png";
            P3Img.classList.remove('Hidden')
        }
        if(P3Choice === "Avatar Eight"){
            P3Img.src = "AvatarA_08mouthclosed.png";
            P3Img.classList.remove('Hidden')
        }
        if(P3Choice === "Avatar Nine"){
            P3Img.src = "AvatarA_09mouthclosed.png";
            P3Img.classList.remove('Hidden')
        }
        if(P3Choice === "Avatar Ten"){
            P3Img.src = "AvatarA_10mouthclosed.png";
            P3Img.classList.remove('Hidden')
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
        }
        if(P4Choice === "Avatar Two"){
            P4Img.src = "AvatarF_02mouthclosed.png";
            P4Img.classList.remove('Hidden')
        }
        if(P4Choice === "Avatar Three"){
            P4Img.src = "AvatarM_03.png";
            P4Img.classList.remove('Hidden')
        }
        if(P4Choice === "Avatar Four"){
            P4Img.src = "AvatarF_04mouthclosed.png";
            P4Img.classList.remove('Hidden')
        }
        if(P4Choice === "Avatar Five"){
            P4Img.src = "AvatarA_05mouthclosed.png";
            P4Img.classList.remove('Hidden')
        }
        if(P4Choice === "Avatar Six"){
            P4Img.src = "AvatarA_06mouthclosed.png";
            P4Img.classList.remove('Hidden')
        }
        if(P4Choice === "Avatar Seven"){
            P4Img.src = "AvatarA_07mouthclosed.png";
            P4Img.classList.remove('Hidden')
        }
        if(P4Choice === "Avatar Eight"){
            P4Img.src = "AvatarA_08mouthclosed.png";
            P4Img.classList.remove('Hidden')
        }
        if(P4Choice === "Avatar Nine"){
            P4Img.src = "AvatarA_09mouthclosed.png";
            P4Img.classList.remove('Hidden')
        }
        if(P4Choice === "Avatar Ten"){
            P4Img.src = "AvatarA_10mouthclosed.png";
            P4Img.classList.remove('Hidden')
        }
    }
    else{
        console.log("Done and dusted")
    }
}
CheckStorage();

function PlayerOneSelect(){
    let P1Name = sessionStorage.getItem("PlayerOneName")
    sessionStorage.setItem("PlayerSelected", P1Name);
    window.location.href = "SLGGameLobby.php";
}
function PlayerTwoSelect(){
    let P2Name = sessionStorage.getItem("PlayerTwoName")
    sessionStorage.setItem("PlayerSelected", P2Name);
    window.location.href = "SLGGameLobby.php";
}
function PlayerThreeSelect(){
    let P3Name = sessionStorage.getItem("PlayerThreeName")
    sessionStorage.setItem("PlayerSelected", P3Name);
    window.location.href = "SLGGameLobby.php";
}
function PlayerFourSelect(){
    let P4Name = sessionStorage.getItem("PlayerFourName")
    sessionStorage.setItem("PlayerSelected", P4Name);
    window.location.href = "SLGGameLobby.php";
}
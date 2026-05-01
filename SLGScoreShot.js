function GrabPlayerData(){
    let P1Img = document.getElementById("PImg")
    let P1Choice = sessionStorage.getItem("PlayerOneChoice")
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
        // name for scoreboard
        let P1Name = sessionStorage.getItem("PlayerOneName");
        document.getElementById("PlayerOneName").textContent = P1Name;

        let P2Name = sessionStorage.getItem("PlayerTwoName");
        document.getElementById("PlayerTwoName").textContent = P2Name;

        let P3Name = sessionStorage.getItem("PlayerThreeName");
        document.getElementById("PlayerThreeName").textContent = P3Name;
        
        let P4Name = sessionStorage.getItem("PlayerFourName");
        document.getElementById("PlayerFourName").textContent = P2Name;
}
GrabPlayerData();

function ScoreCheck(){
    let form = document.ShotReg;
    let shotInput = form.ScoreInput.value.trim();
    let isVal = true;
    let NumCheck = Number(shotInput)
    if(Number.isInteger(NumCheck) != true){
        document.getElementById("SErr").textContent = "Please enter a number";
        isVal = false;
    } else {
        event.preventDefault(); 
        ScreenSwitch();
    }
    return isVal;
}
function ScreenSwitch(){
    window.location.href = 'SLGCoolDown.php';
}

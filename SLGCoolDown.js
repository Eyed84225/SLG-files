const overlay = document.getElementById("overlay");

const scoreCard = document.getElementById("scoreCard");
const faqOverlay = document.getElementById("faqOverlay");
const courseOverlay = document.getElementById("courseOverlay");
const tipsOverlay = document.getElementById("tipsOverlay");

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
}
GrabPlayerData();
const PlayerOrder = JSON.parse(sessionStorage.getItem("PlayerOrder"));

console.log(PlayerOrder)
function ReActivePlayer(){
    if(sessionStorage.getItem("PlayerSelected") == PlayerOrder[0][1]){
        //ajxa call to update active player
        window.location.href = 'SLGHP6.php'
    } else{
        //ajax call to update active player then
        console.log("Not the active player")
        window.location.href = 'SLGCoolDown.php';
    } 
}

setTimeout(ReActivePlayer, 5000);

//js for buttons
document.getElementById("showScorecard")
    .addEventListener("click", () => openOverlay(scoreCard));

document.getElementById("faq")
    .addEventListener("click", () => openOverlay(faqOverlay));


document.getElementById("golf")
    .addEventListener("click", () => openOverlay(courseOverlay));

document.getElementById("tips")
    .addEventListener("click", () => openOverlay(tipsOverlay));


// function to open the overlays
function openOverlay(panel){
    closeAll();
    panel.classList.add("show");
    overlay.classList.add("show");
}

// function to close the overlays
function closeAll(){
    document.querySelectorAll(".overlayPanel")
        .forEach(p => p.classList.remove("show"));
    overlay.classList.remove("show");
}

// close button
document.querySelectorAll(".closeOverlay")
    .forEach(btn => btn.addEventListener("click", closeAll));

overlay.addEventListener("click", closeAll);
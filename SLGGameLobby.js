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
let OrderArray = [
    "1",
    "2",
    "3",
    "4",
]
console.log(OrderArray)
// let PlayOrderKeeper = 0;
// var PlayerSelect
// function PlayerOneReady(){
//     PlayerSelect = 1;
//     sessionStorage.setItem("PlayerSelectRec", PlayerSelect);
//     PlayOrder();
//     PlayerOneCon.classList.add('Selected')
// }
// function PlayerTwoReady(){
//     PlayerSelect = 2;
//     sessionStorage.setItem("PlayerSelectRec", PlayerSelect);
//     PlayOrder();
//     PlayerTwoCon.classList.add('Selected')
// }
// function PlayerThreeReady(){
//     PlayerSelect = 3;
//     sessionStorage.setItem("PlayerSelectRec", PlayerSelect);
//     PlayOrder();
//     PlayerThreeCon.classList.add('Selected')
// }
// function PlayerFourReady(){
//     PlayerSelect = 4;
//     sessionStorage.setItem("PlayerSelectRec", PlayerSelect);
//     PlayOrder();
//     PlayerFourCon.classList.add('Selected')
// }
// function PlayOrder(){
//     if(PlayOrderKeeper == 0){
//         let First = sessionStorage.getItem("PlayerSelectRec");
//         sessionStorage.setItem("FirstPlayer", First);
//         OrderArray[0] = sessionStorage.getItem("FirstPlayer");
//         PlayOrderKeeper = PlayOrderKeeper + 1;
//         console.log("First up is Player" + OrderArray[0]);
//         sessionStorage.removeItem("PlayerSelectRec");
//         return;
//     }
//     if(PlayOrderKeeper == 1){
//         let Second = sessionStorage.getItem("PlayerSelectRec");
//         sessionStorage.setItem("SecondPlayer", Second);
//         OrderArray[1] = sessionStorage.getItem("SecondPlayer");
//         PlayOrderKeeper = PlayOrderKeeper + 1;
//         console.log("Second up is Player" + OrderArray[1]);
//         sessionStorage.removeItem("PlayerSelectRec");
//         return;
//     }
//     if(PlayOrderKeeper == 2){
//         let Third = sessionStorage.getItem("PlayerSelectRec");
//         sessionStorage.setItem("ThirdPlayer", Third);
//         OrderArray[2] = sessionStorage.getItem("ThirdPlayer");
//         PlayOrderKeeper = PlayOrderKeeper + 1;
//         console.log("Third up is Player" + OrderArray[2]);
//         sessionStorage.removeItem("PlayerSelectRec");
//         return;
//     }
//     if(PlayOrderKeeper == 3){
//         let Fourth = sessionStorage.getItem("PlayerSelectRec");
//         sessionStorage.setItem("FourthPlayer", Fourth);
//         OrderArray[3] = sessionStorage.getItem("FourthPlayer");
//         PlayOrderKeeper = PlayOrderKeeper + 1;
//         console.log("Fourth up is Player" + OrderArray[3]);
//         sessionStorage.removeItem("PlayerSelectRec");
//     }
//     if(PlayOrderKeeper == 4){
//         console.log("Time to playyyyyyy")
//     }
//     console.log(OrderArray);
// }
//Alexanders JS
// elements for my scorecard
const btn = document.getElementById("showScorecard");
const scoreCard = document.getElementById("scoreCard");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");

// close the overlay
closeBtn.addEventListener("click", () => {
    scoreCard.classList.remove("show");
    overlay.addEventListener("click", closeAll);
})
// Users will also be able to close if they click outside the overlat
overlay.addEventListener("click", () => {
    scoreCard.classList.remove("show");
    overlay.addEventListener("click", closeAll);
})
btn.addEventListener("click", () => {
    scoreCard.classList.toggle("show");
    overlay.classList.toggle("show");
})
const faqBox = document.getElementById("faq");
const golfBox = document.getElementById("golf");
const tipBox = document.getElementById("tips");

const faqOverlay = document.getElementById("faqOverlay");
const courseOverlay = document.getElementById("courseOverlay");
const tipsOverlay = document.getElementById("tipsOverlay");

faqBox.addEventListener("click", () => openOverlay(faqOverlay));
golfBox.addEventListener("click", () => openOverlay(courseOverlay));
tipBox.addEventListener("click", () => openOverlay(tipsOverlay));

// open the overlay
function openOverlay(slide){
    closeAll(); // closes all to prevent errors
    slide.classList.add("show");
    overlay.classList.add("show");
}

// close all overlays
function closeAll(){
    faqOverlay.classList.remove("show");
    courseOverlay.classList.remove("show");
    tipsOverlay.classList.remove("show");
    scoreCard.classList.remove("show");
    overlay.classList.remove("show");
}

// closebutton for overlay
document.querySelectorAll(".closeOverlay").forEach(btn => {
    btn.addEventListener("click", closeAll);
});
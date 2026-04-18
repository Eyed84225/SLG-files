function Avatar1Pick(){
    const Ava1Picked = document.getElementById("AvaOne").textContent;
    console.log(Ava1Picked);
    sessionStorage.setItem("AvaChoice", Ava1Picked);
}
function Avatar2Pick(){
    const Ava2Picked = document.getElementById("AvaTwo").textContent;
    console.log(Ava2Picked);
    sessionStorage.setItem("AvaChoice", Ava2Picked);
}
function Avatar3Pick(){
    const Ava3Picked = document.getElementById("AvaThree").textContent;
    console.log(Ava3Picked);
    sessionStorage.setItem("AvaChoice", Ava3Picked);
}
function Avatar4Pick(){
    const Ava4Picked = document.getElementById("AvaFour").textContent;
    console.log(Ava4Picked);
    sessionStorage.setItem("AvaChoice", Ava4Picked);
}
function Avatar5Pick(){
    const Ava5Picked = document.getElementById("AvaFive").textContent;
    console.log(Ava5Picked);
    sessionStorage.setItem("AvaChoice", Ava5Picked);
}
function Avatar6Pick(){
    const Ava6Picked = document.getElementById("AvaSix").textContent;
    console.log(Ava6Picked);
    sessionStorage.setItem("AvaChoice", Ava6Picked);
}
function Avatar7Pick(){
    const Ava7Picked = document.getElementById("AvaSeven").textContent;
    console.log(Ava7Picked);
    sessionStorage.setItem("AvaChoice", Ava7Picked);
    
}
function Avatar8Pick(){
    const Ava8Picked = document.getElementById("AvaEight").textContent;
    console.log(Ava8Picked);
    sessionStorage.setItem("AvaChoice", Ava8Picked);
}
function Avatar9Pick(){
    const Ava9Picked = document.getElementById("AvaNine").textContent;
    console.log(Ava9Picked);
    sessionStorage.setItem("AvaChoice", Ava9Picked);
}
function Avatar10Pick(){
    const Ava10Picked = document.getElementById("AvaTen").textContent;
    console.log(Ava10Picked);
    sessionStorage.setItem("AvaChoice", Ava10Picked);
    
}
function validName(){
    let form = document.UserForm;
    let UserName = form.UserName.value.trim();
    let isVal = true;

    if(UserName.length <= 2){
            document.getElementById("UserErr").textContent = "Please enter a Username";
            isVal = false;
        }
    sessionStorage.setItem("PlayerName", UserName);
    console.log(isVal);
    console.log(UserName);
    return isVal;
}
function doubleCheck(){
    if(sessionStorage.getItem("PlayerName") != null && sessionStorage.getItem("AvaChoice") != null){
        window.location.href = 'SLGMakeALobby.php';
    } else {
        document.getElementById("UserErr").textContent = "Please ensure you have selected an avatar!";
    }
}
doubleCheck();

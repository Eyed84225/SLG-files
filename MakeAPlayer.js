function Avatar1Pick(){
    const Ava1Picked = document.getElementById("AvaOne").textContent;
    console.log(Ava1Picked);
    sessionStorage.setItem("AvaChoice", Ava1Picked);
    window.location.href = 'SLGMakeALobby.php';
}
function Avatar2Pick(){
    const Ava2Picked = document.getElementById("AvaTwo").textContent;
    console.log(Ava2Picked);
    sessionStorage.setItem("AvaChoice", Ava2Picked);
    window.location.href = 'SLGMakeALobby.php';
}
function Avatar3Pick(){
    const Ava3Picked = document.getElementById("AvaThree").textContent;
    console.log(Ava3Picked);
    sessionStorage.setItem("AvaChoice", Ava3Picked);
    window.location.href = 'SLGMakeALobby.php';
}
function Avatar4Pick(){
    const Ava4Picked = document.getElementById("AvaFour").textContent;
    console.log(Ava4Picked);
    sessionStorage.setItem("AvaChoice", Ava4Picked);
    window.location.href = 'SLGMakeALobby.php';
}
function Avatar5Pick(){
    const Ava5Picked = document.getElementById("AvaFive").textContent;
    console.log(Ava5Picked);
    sessionStorage.setItem("AvaChoice", Ava5Picked);
    window.location.href = 'SLGMakeALobby.php';
}
function Avatar6Pick(){
    const Ava6Picked = document.getElementById("AvaSix").textContent;
    console.log(Ava6Picked);
    sessionStorage.setItem("AvaChoice", Ava6Picked);
    window.location.href = 'SLGMakeALobby.php';
}
function Avatar7Pick(){
    const Ava7Picked = document.getElementById("AvaSeven").textContent;
    console.log(Ava7Picked);
    sessionStorage.setItem("AvaChoice", Ava7Picked);
    window.location.href = 'SLGMakeALobby.php';
}
function validName(){
    let form = document.UserForm;
    let UserName = form.TxtUserName.value.trim();
    if(UserName.length == 0){
            document.getElementById("UserErr").textContent = "Please enter a Username";
            isVal = false;
        }
    // sessionStorage.setItem("PlayerName", UserName);
    return isVal;
}
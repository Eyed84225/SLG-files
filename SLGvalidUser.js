function validUser(){
    let form = document.loginForm;
    let GIDInputVar = form.GIDInput.value.trim();
    let isVal = true;
    let GroupID = 0x0001;
    if(GIDInputVar.length == 0){
        document.getElementById("GIDErr").textContent = "Please enter your Group ID";
        isVal = false;
    }
    if(GIDInputVar != GroupID){
        document.getElementById("GIDErr").textContent = "Please enter a Valid Group ID";
        isVal = false;
    }
    //will clear storage for now, later down the line will update a database so no need for this
    sessionStorage.clear();
    return isVal;
}
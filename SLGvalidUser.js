function validUser(){
    let form = document.loginForm;
    let GIDInputVar = form.GIDInput.value.trim();
    let isVal = true;
    if(GIDInputVar.length == 0){
        document.getElementById("GIDErr").textContent = "Please enter your Group ID";
        isVal = false;
    }
    //will clear storage for now, later down the line will update a database so no need for this
    sessionStorage.clear();
    return isVal;
}
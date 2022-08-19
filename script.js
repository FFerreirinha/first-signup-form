password = document.getElementById("password");
confirmpassword = document.getElementById("confirmpassword");
errormessage = document.getElementsByClassName("errormessage")[0];

function passwordCheck() {
    if (password.value === confirmpassword.value) {
        errormessage.setAttribute("id", "");
        confirmpassword.classList.remove("passerror");
        password.classList.remove("passerror");
    }
    else {
        errormessage.setAttribute("id", "error")
        confirmpassword.classList.add("passerror");
        password.classList.add("passerror");
    }

    return 0;
}

confirmpassword.addEventListener("focusout", () => {passwordCheck()});
password.addEventListener("focusout", () => {passwordCheck()});
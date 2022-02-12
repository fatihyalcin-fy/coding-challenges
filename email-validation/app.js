const eMail = document.getElementById("email");
const buttonCheck = document.querySelector(".button");
const result = document.querySelector(".result")

buttonCheck.addEventListener("click", ()=>{
    if(eMail.value.includes("@") == false) {
        result.innerHTML += " Please insert valid e-mail address."
    }

    else if(eMail.value[-3] == "." || eMail)

})
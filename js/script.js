let inputpassword = document.querySelector(".password");
let strength = document.querySelector("#strength");

let msg = document.querySelector(".message");

inputpassword.addEventListener('input', function () {
    if (inputpassword.value.length > 0) {
        msg.style.display = "block";
    } else {
        msg.style.display = "none"
    }
    if (inputpassword.value.length < 4) {
        strength.innerHTML = "weak";
        strength.style.color = "red";
    } else if (inputpassword.value.length >= 4 && inputpassword.value.length < 8) {
        strength.innerHTML = "medium";
        strength.style.color = "yellow";
    }
    else if (inputpassword.value.length >= 8) {
        strength.innerHTML = "strong";
        strength.style.color = "green";
    }


    let eyeicon = document.getElementById("eyeicon");
        let password = document.getElementById("password");

        eyeicon.onclick = function(){

            if(password.type=="password"){
                password.type = "text";
                eyeicon.src = "eye-open.png"
            }else{
                password.type = "password"
                eyeicon.src = "eye-close.png"
            }

        }

  


}
    //console.log(inputpassword.);

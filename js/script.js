function validate (event) {

    let message = document.getElementById("message");
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let password2 = document.getElementById("password2").value;

    event.preventDefault();

    if (name.length < 3) {
        console.log("wrong");
        message.className = "alert alert-danger";
        message.innerText = "Name is too short";
    } else if (password.length < 8 || password2.length < 8) {

        message.className = "alert alert-danger"
        message.innerText = "Password is too short"

    } else if (password != password2){

        message.className = "alert alert-danger"
        message.innerText = "Password does not match"

    }  else { 

        message.className = "alert alert-info"
        message.innerText = "Success !!! Form Submitted"

    }

}

let regform = document.getElementById("regform").addEventListener("submit",validate);
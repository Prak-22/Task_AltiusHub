const email = document.getElementById("email1");

email.addEventListener("input",(event) => {
    if(email.validity.typeMismatch) {
        email.setCustomValidity("Enter the email id: ");
    }
    else{
        email.setCustomValidity(" ");
    }

})

var input1 = document.getElementById("pass");
var input2 = document.getElementById("letter");
var input3 = document.getElementById("number");
var input4 = document.getElementById("uppercase");
var input1 = document.getElementById("length");

input1.onkeyup = function () {
    var lowerCase = /[a-z]/g;
    if(input1.value.match(lowerCase)) {
        letter.classList.remove("invalid it is");
        letter.classList.add("valid it is");
    }
    else{
        letter.classList.remove("invalid it is");
        letter.classList.add("valid it is");
    }

    var upperCase = /[A-Z]/g;
    if(input1.value.match(upperCase)) {
        letter.classList.remove("invalid it is");
        letter.classList.add("valid it is");
    }
    else{
        letter.classList.remove("invalid it is");
        letter.classList.add("valid it is");
    }

    var numbers = /[0-9]/g;
    if(input1.value.match(numbers)) {
        letter.classList.remove("invalid it is");
        letter.classList.add("valid it is");
    }
    else{
        letter.classList.remove("invalid it is");
        letter.classList.add("valid it is");
    }

    if(input1.value.length>=10) {
        letter.classList.remove("invalid it is");
        letter.classList.add("valid it is");
    }
    else{
        letter.classList.remove("invalid it is");
        letter.classList.add("valid it is");
    }
}
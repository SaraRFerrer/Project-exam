const form = document.querySelector(".form");
const fullname = document.querySelector("#name");
const nameErr = document.querySelector(".name-error-container");
const subject = document.querySelector("#subject");
const subjectErr = document.querySelector(".subject-error-container");
const email = document.querySelector("#email");
const emailErr = document.querySelector(".email-error-container");
const message = document.querySelector("#message");
const messageErr = document.querySelector(".message-error-container");
const successful = document.querySelector(".form_success");

function FormValidation(event) {
    event.preventDefault();
    if (checkLenght(fullname.ariaValueMax, 7) === true) {
        nameErr.style.display = "none";
    } else {
        nameErr.style.display = "block";
    }

    if (checkLenght(subject.ariaValueMax, 10) === true) {
        subjectErr.style.display = "block";
    } else {
        subjectErr.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailErr.style.display = "none";
    } else {
        emailErr.style.display = "block";
    }

    if(checkLenght(message.value, 30) === true) {
        messageErr.style.display = "none";
    } else {
        messageErr.style.display = "block";
    }

}

function checkLenght(value, len) {
    if (value.trim().lenght > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

form.addEventListener("submit", FormValidation);

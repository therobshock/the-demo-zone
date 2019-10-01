const loginModal = document.getElementById("login-modal");
const signupModal = document.getElementById("signup-modal");


function openLogin() {
    loginModal.style.display = "block";
}

function closeLogin() {
    loginModal.style.display = "none";
}

function openSignup() {
    signupModal.style.display = "block";
}

function closeSignup() {
    signupModal.style.display = "none";
}

function testFunction() {
    console.log("Test");
}
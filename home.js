// for the registration popup
 function initializeRegistrationPopup() {
    const showRegistrationPopup = document.getElementById("show-registration-popup");
    const registrationOverlay = document.getElementById("registration-overlay");
    const registrationPopup = document.getElementById("registration-popup");
    const backToLogin = document.getElementById("back-to-login");
    const registrationSuccess = document.getElementById("registration-success");

    showRegistrationPopup.addEventListener("click", function () {
        registrationOverlay.style.display = "block";
        registrationPopup.style.display = "block";
        
    });

    backToLogin.addEventListener("click", function () {
        registrationOverlay.style.display = "none";
        registrationPopup.style.display = "none";
        
    });

    const registerButton = document.getElementById("register-button");
    registerButton.addEventListener("click", function () {
const registerEmail = document.getElementById("register-email").value;
const registerPassword = document.getElementById("register-password").value;
if (!registerEmail || !registerPassword) {
    alert("Please fill in all the required details.");
} else {
    // Show alert message first
    alert("Registration Successful! You can now login.");

    // Clear the form
    document.getElementById("register-email").value = "";
    document.getElementById("register-password").value = "";

    // Redirect to the login page 
    window.location.href = "login_page.html";
}
});

}


//for the forgot popup
function initializePopups() {

const showForgotPasswordPopup = document.getElementById("show-forgot-password-popup");

const forgotPasswordOverlay = document.getElementById("forgot-password-overlay");

const forgotPasswordPopup = document.getElementById("forgot-password-popup");


showForgotPasswordPopup.addEventListener("click", function () {
    forgotPasswordOverlay.style.display = "block";
    forgotPasswordPopup.style.display = "block";
});

const backToLogin = document.getElementById("back-to-login");
const backToLoginForgot = document.getElementById("back-to-login-forgot");



backToLoginForgot.addEventListener("click", function () {
    forgotPasswordOverlay.style.display = "none";
    forgotPasswordPopup.style.display = "none";
});

const forgotPasswordButton = document.getElementById("forgot-password-button");

forgotPasswordButton.addEventListener("click", function () {
    const email = document.getElementById("forgot-email").value;
    const  password = document.getElementById("old-password").value;
    const  newpassword = document.getElementById("new-password").value;

    if (!email) {
        alert("Please fill in your email to reset your password.");
    } else if (!password) {
        alert("Please fill in your password to reset your password.");
    }else if (!newpassword) {
        alert ("Please fill in your new password to reset your password.");
    }else{
        // Simulate password reset
        alert("Password reset successful!");

        // Redirect to the login page
        window.location.href = "login_page.html";
    }
});
}
initializePopups();
initializeRegistrationPopup();

// Function to skip the video and hide the start button
function skipVideo() {
    var video = document.getElementById("myVideo");
    var skipButton = document.getElementById("skipButton");
    var startButton = document.getElementById("startButton");

    // Skip the video
    video.pause();
    video.currentTime = video.duration;

    // Hide both the skip button and the start button
    skipButton.style.display = "none";
    startButton.style.display = "none";

    // Add a delay using setTimeout to allow time for the video to pause
    setTimeout(function() {
        // 
        window.location.href = "./html/home.html";
    }, 1500); //  (1.5 seconds) delay before navigating
}

// Function to toggle video play/pause
function startVideo() {
    // Get references to the video element and the start button
    var video = document.getElementById('myVideo');
    var startButton = document.getElementById('startButton');

    // Start the video
    video.play();

    // Hide the button
    startButton.style.display = 'none';
}


startVideo();

//for the start page mode select message
function showMessage() {
    var selectedMode = document.getElementById("gameMode").value;
    var messageElement = document.getElementById("message");
  
    if (selectedMode === "advance") {
      messageElement.textContent = "You have 1.00 minute to finish the game";
    } else if (selectedMode === "classic") { 
      messageElement.textContent = "You have 1.59 minutes to finish the game";
    } else {
      messageElement.textContent = "Please select a mode";
    }
    
  }
  
showMessage();


  
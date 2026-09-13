 const signupForm = document.getElementById("signupForm");

if (signupForm) {
    signupForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    alert("Signup successful!");
window.location.href = "login.html";
});
}
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email === "" || password === "") {
            alert("Please fill all fields!");
            return;
        }

        alert("Login successful!");
window.location.href = "index.html";
    });
}
const learnMoreBtn = document.getElementById("learnMoreBtn");

if (learnMoreBtn) {
    learnMoreBtn.addEventListener("click", function() {
        document.getElementById("aboutMessage").textContent =
            "Keep learning, keep practicing and keep growing with StudentHub! 🚀";
    });
}
const feedbackForm = document.getElementById("feedbackForm");

if (feedbackForm) {
    feedbackForm.addEventListener("submit", function(event) {
        event.preventDefault();

        alert("Thank you for your valuable feedback! 😊");

        feedbackForm.reset();
    });
}
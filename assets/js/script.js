// Check if user is already logged in
document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("isLoggedIn") === "true") {
    document.getElementById("login-page").style.display = "none";
    document.getElementById("landing-page").style.display = "block";
    }
   
    // Load saved guest list from localStorage
    if (localStorage.getItem("guests")) {
    guests = JSON.parse(localStorage.getItem("guests"));
    updateGuestList();
    }
   
    // Restore selected service
    const savedService = localStorage.getItem("selectedService");
    if (savedService) {
    document.getElementById("personal-info-form").style.display = "block";
    document.getElementById("event-details").value = savedService;
    }
    });
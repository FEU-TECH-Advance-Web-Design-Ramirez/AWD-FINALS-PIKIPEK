// Check if user  is already logged in
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
    
    // Login Function
    function login(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
       
        if (username.trim() !== "" && password.trim() !== "") {
        document.getElementById("login-page").style.display = "none";
        document.getElementById("landing-page").style.display = "block";
       
        // Save login state
        localStorage.setItem("isLoggedIn", "true");
        } else {
        alert("Please enter a username and password.");
        }
        }

        // Logout Function
    function logout() {
        document.getElementById("landing-page").style.display = "none";
        document.getElementById("login-page").style.display = "block";
       
        // Clear login state
        localStorage.removeItem("isLoggedIn");
        }
       
        // Show form when a service is selected
        function serviceDetails(service) {
        document.getElementById("personal-info-form").style.display = "block";
        document.getElementById("event-details").value = "Interested in " + service.replace("-", " ");
       
        // Save selected service
        localStorage.setItem("selectedService", "Interested in " + service.replace("-", " "));
        }
        // Hide form when cancel is clicked
    function closeForm() {
        document.getElementById("personal-info-form").style.display = "none";
       
        // Remove stored service selection
        localStorage.removeItem("selectedService");
        }
       
        // Handle form submission
        function submitForm(event) {
        event.preventDefault();
        alert("Your information has been submitted successfully!");
        closeForm();
        }
       
        let guests = [];

          // Add guest and store in localStorage
    function addGuest(event) {
        event.preventDefault();
       
        const name = document.getElementById("guest-name").value;
        const rsvp = document.getElementById("rsvp-status").value;
       
        if (name.trim() === "") {
        alert("Please enter a guest name.");
        return;
        }
       
        guests.push({ name, rsvp });
        localStorage.setItem("guests", JSON.stringify(guests)); // Save to localStorage
        updateGuestList();
        document.getElementById("guest-name").value = "";
        }
       
        // Remove guest and update localStorage
        function removeGuest(index) {
        guests.splice(index, 1);
        localStorage.setItem("guests", JSON.stringify(guests)); // Update storage
        updateGuestList();
        }
       
        // Update guest list UI
        function updateGuestList() {
        const tbody = document.getElementById("guest-list-body");
        tbody.innerHTML = "";
       
        guests.forEach((guest, index) => {
        const row = `<tr>
        <td>${guest.name}</td>
        <td>${guest.rsvp}</td>
        <td><button onclick="removeGuest(${index})" class="cta-button cancel-button">Remove</button></td>
        </tr>`;
        tbody.innerHTML += row;
        });
        }
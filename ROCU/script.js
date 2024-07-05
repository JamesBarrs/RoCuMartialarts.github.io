// Simulated function for creating account and updating UI
function createAccount() {
    // Assume you retrieve the user's name from a form input
    let userName = document.getElementById('userNameInput').value;

    // Update the link text with the user's name
    document.getElementById('createAccountLink').textContent = userName;
}

// Example: Listen for form submission and update UI
document.addEventListener('DOMContentLoaded', function() {
    // Simulated form submission event
    document.getElementById('createAccountForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        createAccount(); // Call function to update UI
    });
});

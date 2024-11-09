// script.js

// Function to display a welcome alert upon loading the page
window.onload = function () {
    alert("Welcome to Foodie Fanatix! Enjoy exploring ♡");

    // Attach event listener to the submit button
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); 

            const name = form.querySelector('input[type="text"]').value;
            const email = form.querySelector('input[type="email"]').value;
            const phone = form.querySelector('input[type="text"]:nth-of-type(2)').value;
            const message = form.querySelector('textarea').value;

            // Validation check
            if (!name || !email || !phone || !message) {
                alert("Please fill out all fields before submitting!");
                return;
            }

            form.reset();
        });
    }
}

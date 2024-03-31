document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});





// Function to redirect to the index page after login
function redirectToIndex() {
    window.location.href = "index.html";
}

// Function to redirect to the login page after registering
function redirectToLogin() {
    window.location.href = "login.html";
}

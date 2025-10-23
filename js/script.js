function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');
}

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelector('.navbar a.active').classList.remove('active');
        this.classList.add('active');
    });
});

const currentUrl = window.location.href;
document.querySelectorAll('.navbar a').forEach(link => {
    if (link.href === currentUrl) {
        link.classList.add('active');
    }
});

// JavaScript to toggle "Sign In" and "Log Out"
const loginLink = document.getElementById('login');
loginLink.addEventListener('click', function (event) {
    if (loginLink.textContent === 'Sign In') {
        // Redirect to Sign-In page
        window.location.href = 'Sign-In.html';
        localStorage.setItem('isSignedIn', 'true');
    } else {
        event.preventDefault();
        openModal();
    }
});

// Check if user is signed in using localStorage
const isSignedIn = localStorage.getItem('isSignedIn') === 'true';
if (isSignedIn) {
    loginLink.textContent = 'Log Out';
    loginLink.href = '#'; // Prevent navigation
}

// Functions to handle modal
function openModal() {
    document.getElementById('logoutModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('logoutModal').style.display = 'none';
}

function confirmLogout() {
    localStorage.removeItem('isSignedIn');
    window.location.href = 'index.html'; // Redirect to index page
}

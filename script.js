// Current user state
let currentUser = null;
let currentRole = null;

// Navigation functions
function navigateTo(page) {
    window.location.href = page;
}

function logout() {
    currentUser = null;
    currentRole = null;
    navigateTo('index.html');
}

// Modal functions
function showLoginModal(role) {
    if (role === 'student') {
        document.getElementById('modalTitle').textContent = 'Student Login';
        document.getElementById('loginModal').style.display = 'flex';
    } else if (role === 'counselor') {
        document.getElementById('modalTitle').textContent = 'Counselor Login';
        document.getElementById('loginModal').style.display = 'flex';
    } else if (role === 'counselor-signup') {
        document.getElementById('signupModalTitle').textContent = 'Counselor Sign Up';
        document.getElementById('signupRole').value = 'counselor';
        document.getElementById('signupModal').style.display = 'flex';
    }
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function processLogin() {
    // Simulate login process
    const email = document.getElementById('loginEmail').value;
    const role = document.getElementById('modalTitle').textContent.includes('Student') ? 'student' : 'counselor';
    
    // For demo purposes, just set a mock user
    currentUser = {
        name: role === 'student' ? 'John Student' : 'Dr. Rachel Smith',
        email: email,
        role: role
    };
    
    currentRole = role;
    
    // Close modal and navigate to appropriate dashboard
    closeModal('loginModal');
    
    if (role === 'student') {
        navigateTo('home.html');
    } else {
        navigateTo('counselor-dashboard.html');
    }
}

function processSignup() {
    // Simulate signup process
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const role = document.getElementById('signupRole').value;
    
    // For demo purposes, just set a mock user
    currentUser = {
        name: name,
        email: email,
        role: role
    };
    
    currentRole = role;
    
    // Close modal and navigate to appropriate dashboard
    closeModal('signupModal');
    
    if (role === 'student') {
        navigateTo('home.html');
    } else {
        navigateTo('counselor-dashboard.html');
    }
}

function loginAsStudent(method) {
    if (method === 'google') {
        alert('This would redirect to Google OAuth service in a real application.');
    }
    
    // For demo, just set a mock student user
    currentUser = {
        name: 'John Student',
        email: 'student@example.com',
        role: 'student'
    };
    
    currentRole = 'student';
    
    navigateTo('home.html');
}

// Set up modal switch links
document.addEventListener('DOMContentLoaded', function() {
    const switchToSignup = document.getElementById('switchToSignup');
    const switchToLogin = document.getElementById('switchToLogin');
    
    if (switchToSignup) {
        switchToSignup.addEventListener('click', (e) => {
            e.preventDefault();
            closeModal('loginModal');
            document.getElementById('signupModal').style.display = 'flex';
        });
    }
    
    if (switchToLogin) {
        switchToLogin.addEventListener('click', (e) => {
            e.preventDefault();
            closeModal('signupModal');
            document.getElementById('loginModal').style.display = 'flex';
        });
    }
    
    // Close modal if clicked outside
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
    
    // Set active navigation link based on current page
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
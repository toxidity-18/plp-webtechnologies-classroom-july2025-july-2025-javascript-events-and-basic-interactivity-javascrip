// Part 1: Event handling - show a message when button clicked
const showMessageBtn = document.getElementById('showMessageBtn');
const message = document.getElementById('message');

showMessageBtn.addEventListener('click', () => {
  message.style.display = 'block'; // Show the hidden message
});

// Part 2: Interactive features

//  Light/Dark Mode Toggle -
const toggleThemeBtn = document.getElementById('toggleThemeBtn');

toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode'); // Toggle 'dark-mode' class on body
});

// --- Counter Buttons ---
const decreaseBtn = document.getElementById('decreaseBtn');
const increaseBtn = document.getElementById('increaseBtn');
const counterValue = document.getElementById('counterValue');

let count = 0; // Start count at 0

// Decrease count and update display
decreaseBtn.addEventListener('click', () => {
  count--;
  counterValue.textContent = count;
});

// Increase count and update display
increaseBtn.addEventListener('click', () => {
  count++;
  counterValue.textContent = count;
});

// Part 3: Form validation

const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const formSuccess = document.getElementById('formSuccess');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Stop form from submitting normally

  // Clear previous errors and success message
  nameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';
  formSuccess.style.display = 'none';

  // Track if the form is valid
  let valid = true;

  // Validate name (not empty and at least 2 characters)
  if (nameInput.value.trim().length < 2) {
    nameError.textContent = 'Please enter a valid name (at least 2 characters).';
    valid = false;
  }

  // Validate email format with simple regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = 'Please enter a valid email address.';
    valid = false;
  }

  // Validate password (minimum 6 characters)
  if (passwordInput.value.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters long.';
    valid = false;
  }

  // If all checks pass, show success message
  if (valid) {
    formSuccess.style.display = 'block';
    form.reset(); // Clear form inputs
  }
});

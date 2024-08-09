const form = document.querySelector('form');
const fullNameInput = document.getElementById('fullName');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const genderRadios = document.querySelectorAll('input[name="gender"]');
const dobInput = document.getElementById('dob');
const phoneNumberInput = document.getElementById('phoneNumber');
const addressInput = document.getElementById('address');
const newsletterCheckbox = document.getElementById('newsletter');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!validateFullName(fullNameInput.value)) {
    alert("Please enter a valid full name.");
    return;
  }
  if (!validateEmail(emailInput.value)) {
    alert("Please enter a valid email address.");
    return;
  }
  if (!validatePassword(passwordInput.value)) {
    alert("Please enter a valid password.");
    return;
  }
  if (!validateGender(genderRadios)) {
    alert("Please select a gender.");
    return;
  }
  if (!validateDob(dobInput.value)) {
    alert("Please enter a valid date of birth.");
    return;
  }
  if (!validatePhoneNumber(phoneNumberInput.value)) {
    alert("Please enter a valid phone number.");
    return;
  }
  if (!validateAddress(addressInput.value)) {
    alert("Please enter a valid address.");
    return;
  }

  alert("Registration Successful! Thank you for signing up.");

  form.reset();
});


function validateFullName(fullName) {
  return fullName.trim() !== ''; 
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); 
}

function validatePassword(password) {
  return password.trim() !== '' && password.length >= 8; 
}

function validateGender(genderRadios) {
  return Array.from(genderRadios).some(radio => radio.checked); 
}

function validateDob(dob) {
  return dob.trim() !== ''; 
}

function validatePhoneNumber(phoneNumber) {
  return /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/.test(phoneNumber); 
}

function validateAddress(address) {
  return address.trim() !== ''; 
}
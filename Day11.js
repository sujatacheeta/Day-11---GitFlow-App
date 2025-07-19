const form = document.getElementById('loginForm');
const password = document.getElementById('password');
const errorMsg = document.getElementById('error');
const strength = document.getElementById('strength');

function checkPasswordStrength(pwd) {
  let strengthText = 'Weak';
  if (pwd.length > 7 && /[A-Z]/.test(pwd) && /\d/.test(pwd) && /\W/.test(pwd)) {
    strengthText = 'Strong';
  } else if (pwd.length > 5 && /[A-Z]/.test(pwd)) {
    strengthText = 'Medium';
  }
  return strengthText;
}

password.addEventListener('input', () => {
  const level = checkPasswordStrength(password.value);
  strength.textContent = `Strength: ${level}`;
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const pwd = password.value;
  const remember = document.getElementById('rememberMe').checked;

  if (!email.includes('@')) {
    errorMsg.textContent = 'Invalid email';
    return;
  }

  if (pwd.length < 6) {
    errorMsg.textContent = 'Password too short';
    return;
  }

  errorMsg.textContent = '';
  if (remember) {
    localStorage.setItem('userEmail', email);
  } else {
    localStorage.removeItem('userEmail');
  }

  alert('Login successful!');
});
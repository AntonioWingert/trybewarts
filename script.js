const buttonForm = document.getElementById('button-form-validate');

function validateEmailPassword() {
  const inputEmail = document.getElementById('input-email-loguin').value;
  const inputPassword = document.getElementById('input-password').value;
  if (inputEmail === 'tryber@teste.com' && inputPassword === '123456') {
    return window.alert('Olá, Tryber!');
  } return window.alert('Email ou senha inválidos.');
}

buttonForm.addEventListener('click', validateEmailPassword);

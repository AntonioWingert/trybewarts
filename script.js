const buttonForm = document.getElementById('button-form-validate');

function validateEmailPassword() {
  const inputEmail = document.getElementById('input-email').value;
  const inputPassword = document.getElementById('input-password').value;
  if (inputEmail === 'tryber@teste.com' && inputPassword === '123456') {
    return window.alert('Olá, Tryber!');
  } return window.alert('Email ou senha inválidos.');
}

buttonForm.addEventListener('click', validateEmailPassword);

function desableButton() {
  const inputCheckbox = document.getElementById('agreement');
  if (inputCheckbox.checked) {
    document.getElementById('submit-btn').disabled = false;
  } else document.getElementById('submit-btn').disabled = true;
}
document.getElementById('agreement').addEventListener('click', desableButton);

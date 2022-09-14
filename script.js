const buttonForm = document.getElementById('button-form-validate');

function validateEmailPassword() {
  const inputEmail = document.getElementById('input-email-loguin').value;
  const inputPassword = document.getElementById('input-password').value;
  if (inputEmail === 'tryber@teste.com' && inputPassword === '123456') {
    return window.alert('Olá, Tryber!');
  } return window.alert('Email ou senha inválidos.');
}

buttonForm.addEventListener('click', validateEmailPassword);

function desableButton() {
  const submitBtn = document.getElementById('submit-btn');
  const inputCheckbox = document.getElementById('agreement');
  if (inputCheckbox.checked) {
    submitBtn.disabled = false;
  } else submitBtn.disabled = true;
}

function insertValues() {
  document.querySelector('#form-data p:nth-of-type(1)').innerText = `Nome: 
  ${document.getElementById('input-name').value} 
  ${document.getElementById('input-lastname').value}`;
  document.querySelector('#form-data p:nth-of-type(2)').innerText = `Email: 
  ${document.getElementById('input-email').value}`;
  document.querySelector('#form-data p:nth-of-type(3)').innerText = `Casa: 
  ${document.getElementById('house').options[document.getElementById('house').selectedIndex].value}
  `;
  document.querySelector('#form-data p:nth-of-type(4)').innerText = `Família: 
  ${document.querySelector('input[name="family"]:checked').value}`;
}

function information(event) {
  event.preventDefault();
  document.getElementById('evaluation-form').style.display = 'none';
  document.getElementById('form-data').style.display = 'flex';
  insertValues();
  const checkedBox = document.querySelectorAll('.subject');
  const listaMaterias = [];
  for (let index = 0; index < checkedBox.length; index += 1) {
    if (checkedBox[index].checked) {
      listaMaterias.push(` ${checkedBox[index].value}`);
    }
  }
  document.querySelector('#form-data p:nth-of-type(5)').innerText = `Matérias: ${listaMaterias}`;
  document.querySelector('#form-data p:nth-of-type(6)').innerText = `Avaliação: 
  ${document.querySelector('input[name="rate"]:checked').value}`;
  document.querySelector('#form-data p:nth-of-type(7)').innerText = `Observações: 
  ${document.getElementById('textarea').value}`;
}

document.getElementById('submit-btn').addEventListener('click', information);
document.getElementById('agreement').addEventListener('click', desableButton);

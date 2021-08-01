function getAcess(event) {
  const catchEmail = document.getElementById('login');
  const catchPassword = document.getElementById('password');
  console.log(catchEmail, catchPassword);
  if (
    catchEmail.value === 'tryber@teste.com' && catchPassword.value === '123456'
  ) {
    alert('Olá, Tryber!');
  } else {
    event.preventDefault();
    alert('Login ou senha inválidos.');
  }
}

function enableSubmitBtn(event) {
  event.preventDefault();
  const checkedBox = event.currentTarget.checked;
  const submitBtn = document.querySelector('#submit-btn');
  if (checkedBox) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

function charsCounter(event) {
  // event.preventDefault();
  const maxLength = event.currentTarget.getAttribute('maxlength');
  const currentChars = event.currentTarget.value.length;
  const counter = document.querySelector('#counter');
  const remaingChars = maxLength - currentChars;
  counter.innerText = remaingChars;
}

function getNewText(event) {
  event.preventDefault();
  const catchForm = document.getElementById('evaluation-form');
  const newForm = new FormData(catchForm);
  const newPlace = document.createElement('p');
  newPlace.innerHTML = `Nome: ${newForm.get('nome')} ${newForm.get('sobrenome')}<br>`;
  newPlace.innerHTML += `Email: ${newForm.get('email')}<br>`;
  newPlace.innerHTML += `Casa: ${newForm.get('house')}<br>`;
  newPlace.innerHTML += `Família: ${newForm.get('family')}<br>`;
  newPlace.innerHTML += `Matérias: ${newForm.getAll('materia').join(', ')}<br>`;
  newPlace.innerHTML += `Avaliação: ${newForm.get('rate')}<br>`;
  newPlace.innerHTML += `Observações: ${newForm.get('review')}`;
  catchForm.innerHTML = '';
  catchForm.appendChild(newPlace);
}

function initiate() {
  const catchBtnLogin = document.getElementById('btn-login');
  const agreement = document.querySelector('#agreement');
  const comments = document.querySelector('#textarea');
  const newText = document.querySelector('#submit-btn');
  catchBtnLogin.addEventListener('click', getAcess);
  agreement.addEventListener('change', enableSubmitBtn, false);
  comments.addEventListener('input', charsCounter, false);
  newText.addEventListener('click', getNewText);
}

window.onload = initiate;

// ////////////////////////////////////////////////////
// BLOCO 06 - DIA 06 - TRYBEWARTS PROJECT
// 22/06/21 - PROJETO EM EQUIPE
// branch de origem: victor-veloso-trybewarts
// branch secundária: tiago-sathler-trybewarts-project
//  VICTOR VELOSO
//  TIAGO H. S. SATHLER
// ////////////////////////////////////////////////////

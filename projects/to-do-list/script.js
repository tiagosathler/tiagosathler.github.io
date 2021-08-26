// BLOCO 05 - DIA 6 - PROJETO - LISTA DE TAREFAS
// TO DO LIST PROJECT
// TIAGO H. S. SATHLER
// 09/06/21
// 18/07/21 - Contribuição por code review de 'pauloeduardods' - Paulo Sordi 14A
// //////////////////////////////////////////////
const listaTarefas = document.querySelector('#lista-tarefas');

function singleClickItem(element) {
  if (document.querySelector('.selected') !== null) {
    document.querySelector('.selected').style.backgroundColor = '';
    document.querySelector('.selected').classList.remove('selected');
  }
  element.target.classList.add('selected');
}

function doubleClickItem(element) {
  if (element.target.classList.contains('completed')) {
    element.target.classList.remove('completed');
  } else {
    element.target.classList.add('completed');
  }
}

function addTask() {
  const taskLiItem = document.createElement('li');
  const inputForm = document.querySelector('#texto-tarefa');
  if (inputForm.value !== '') {
    taskLiItem.innerText = inputForm.value;
    taskLiItem.classList.add('task');
    inputForm.value = '';
    taskLiItem.addEventListener('click', singleClickItem, false);
    taskLiItem.addEventListener('dblclick', doubleClickItem, false);
    listaTarefas.appendChild(taskLiItem);
  } else {
    window.alert('Digite uma tarefa!');
  }
}

function clearAllTasks() {
  listaTarefas.innerHTML = '';
}

function clearCompletedTasks() {
  document.querySelectorAll('.completed').forEach((element) => {
    element.remove();
  });
}

function saveTaskList() {
  localStorage.clear();
  localStorage.setItem('ol-content', listaTarefas.innerHTML);
}

function populateListFromStorage() {
  const listaContent = localStorage.getItem('ol-content');
  listaTarefas.innerHTML = listaContent;
  listaTarefas.childNodes.forEach((li) => {
    li.addEventListener('click', singleClickItem, false);
    li.addEventListener('dblclick', doubleClickItem, false);
  });
}

function moveItemUp() {
  const elementToUp = document.querySelector('.selected');
  if (elementToUp) {
    if (elementToUp.previousElementSibling) {
      const elementPreviousSibling = elementToUp.previousElementSibling;
      listaTarefas.insertBefore(elementToUp, elementPreviousSibling);
    }
  } else {
    window.alert('Selecione uma tarefa antes de mover');
  }
}

function moveItemDown() {
  const elementToDown = document.querySelector('.selected');
  if (elementToDown) {
    if (elementToDown.nextElementSibling) {
      const elementNextSibling = elementToDown.nextElementSibling;
      listaTarefas.insertBefore(elementToDown, elementNextSibling.nextElementSibling);
    }
  } else {
    window.alert('Selecione uma tarefa antes de mover');
  }
}

function removeTask() {
  const elementToRemove = document.querySelector('.selected');
  if (elementToRemove) {
    elementToRemove.remove();
  } else {
    window.alert('Selecione uma tarefa antes de remover');
  }
}

function initiate() {
  document.querySelector('#criar-tarefa')
    .addEventListener('click', addTask, false);
  document.querySelector('#apaga-tudo')
    .addEventListener('click', clearAllTasks, false);
  document.querySelector('#remover-finalizados')
    .addEventListener('click', clearCompletedTasks, false);
  document.querySelector('#salvar-tarefas')
    .addEventListener('click', saveTaskList, false);
  document.querySelector('#mover-cima').addEventListener('click', moveItemUp, false);
  document.querySelector('#mover-baixo').addEventListener('click', moveItemDown, false);
  document.querySelector('#remover-selecionado').addEventListener('click', removeTask, false);
  if (localStorage.length > 0) {
    populateListFromStorage();
  }
}

window.onload = initiate;

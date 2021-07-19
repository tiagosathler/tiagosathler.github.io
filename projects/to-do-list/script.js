// BLOCO 05 - DIA 6 - PROJETO - LISTA DE TAREFAS
// TO DO LIST PROJECT
// TIAGO H. S. SATHLER
// 09/06/21
// 18/07/21 - Contribuição por code review de 'pauloeduardods' - Paulo Sordi 14A
// //////////////////////////////////////////////

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

function addTask(listaTarefas) {
  const taskLiItem = document.createElement('li');
  const inputForm = document.querySelector('#texto-tarefa');
  if (inputForm.value !== '') {
    taskLiItem.innerText = inputForm.value;
    taskLiItem.classList.add('task');
    inputForm.value = '';
    listaTarefas.appendChild(taskLiItem);
  } else {
    window.alert('Digite uma tarefa!');
  }
}

function clearAllTasks(listaTarefas) {
  const element = listaTarefas;
  element.innerHTML = '';
}

function clearCompletedTasks() {
  document.querySelectorAll('.completed').forEach((element) => {
    element.remove();
  });
}

function saveTaskList(listaTarefas) {
  localStorage.clear();
  const listaContent = listaTarefas.innerHTML;
  localStorage.setItem('ol-content', listaContent);
}

function populateListFromStorage(listaTarefas) {
  const listaContent = localStorage.getItem('ol-content');
  const element = listaTarefas;
  element.innerHTML = listaContent;
}

function moveItemUp() {
  const elementToUp = document.querySelector('.selected');
  if (elementToUp) {
    if (elementToUp.previousElementSibling) {
      const elementPreviousSibling = elementToUp.previousElementSibling;
      const elementParent = elementToUp.parentElement;
      elementParent.insertBefore(elementToUp, elementPreviousSibling);
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
      const elementParent = elementToDown.parentElement;
      elementParent.insertBefore(elementToDown, elementNextSibling.nextElementSibling);
    }
  } else {
    window.alert('Selecione uma tarefa antes de mover');
  }
}

function removeTask() {
  const elementToRemove = document.querySelector('.selected');
  if (elementToRemove) {
    const elementParent = elementToRemove.parentElement;
    elementParent.removeChild(elementToRemove);
  } else {
    window.alert('Selecione uma tarefa antes de remover');
  }
}

function initiate() {
  const listaTarefas = document.querySelector('#lista-tarefas');
  document.querySelector('#criar-tarefa')
    .addEventListener('click', addTask.bind(null, listaTarefas), false);
  listaTarefas.addEventListener('click', singleClickItem, false);
  listaTarefas.addEventListener('dblclick', doubleClickItem, false);
  document.querySelector('#apaga-tudo')
    .addEventListener('click', clearAllTasks.bind(null, listaTarefas), false);
  document.querySelector('#remover-finalizados')
    .addEventListener('click', clearCompletedTasks, false);
  document.querySelector('#salvar-tarefas')
    .addEventListener('click', saveTaskList.bind(null, listaTarefas), false);
  document.querySelector('#mover-cima').addEventListener('click', moveItemUp, false);
  document.querySelector('#mover-baixo').addEventListener('click', moveItemDown, false);
  document.querySelector('#remover-selecionado').addEventListener('click', removeTask, false);
  if (localStorage.length > 0) {
    populateListFromStorage(listaTarefas);
  }
}

window.onload = initiate;

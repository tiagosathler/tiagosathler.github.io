// BLOCO 05 - DIA 6 - PROJETO - LISTA DE TAREFAS
// TO DO LIST PROJECT
// TIAGO H. S. SATHLER
// 09/06/21
// //////////////////////////////////////////////

function singleClickItem(element) {
  if (element.target.classList.contains('selected')) {
    // element.target.classList.remove('selected');
    // element.target.style.backgroundColor = "";
  } else {
    document.querySelectorAll('.task').forEach((eachElement) => {
      if (eachElement.classList.contains('selected')) {
        eachElement.classList.remove('selected');
        //        eachElement.style.backgroundColor = "";
      }
    });
    //    element.target.style.backgroundColor = "rgb(128,128,128)";
    element.target.classList.add('selected');
  }
}

function doubleClickItem(element) {
  if (element.target.classList.contains('completed')) {
    element.target.classList.remove('completed');
    //  element.target.style.textDecoration = '';
  } else {
    //  element.target.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
    element.target.classList.add('completed');
  }
}

function addTask() {
  const taskLiItem = document.createElement('li');
  const inputForm = document.querySelector('#texto-tarefa');
  const listaTarefas = document.querySelector('#lista-tarefas');
  if (inputForm.value !== '') {
    taskLiItem.innerText = inputForm.value;
    taskLiItem.classList.add('task');
    inputForm.value = '';
    listaTarefas.appendChild(taskLiItem);
    listaTarefas.lastChild.addEventListener('click', singleClickItem);
    listaTarefas.lastChild.addEventListener('dblclick', doubleClickItem);
  } else {
    window.alert('Digite uma tarefa!');
  }
}

function clearAllTasks() {
  document.querySelectorAll('.task').forEach((element) => {
    element.remove();
  });
}

function clearCompletedTasks() {
  document.querySelectorAll('.completed').forEach((element) => {
    element.remove();
  });
}

function saveTaskList() {
  localStorage.clear();
  document.querySelectorAll('.task').forEach((element, index) => {
    const taskItem = `task${index}`;
    const taskItemClass = `task${index}-class`;
    const taskItemContentValue = element.innerText;
    const taskItemListClassValue = element.classList.toString();
    localStorage.setItem(taskItem, taskItemContentValue);
    localStorage.setItem(taskItemClass, taskItemListClassValue);
  });
}

function addTaskFromStorage(task, classListArray) {
  const taskLiItem = document.createElement('li');
  const listaTarefas = document.querySelector('#lista-tarefas');
  taskLiItem.innerText = task;
  classListArray.forEach((className) => {
    taskLiItem.classList.add(className);
  });
  listaTarefas.appendChild(taskLiItem);
  listaTarefas.lastChild.addEventListener('click', singleClickItem);
  listaTarefas.lastChild.addEventListener('dblclick', doubleClickItem);
}

function populateListFromStorage() {
  for (let i = 0; i < localStorage.length / 2; i += 1) {
    const keyTaskItem = `task${i}`;
    const keyTaskItemClass = `task${i}-class`;
    const valueTaskItem = localStorage.getItem(keyTaskItem);
    let valueTaskItemClass = localStorage.getItem(keyTaskItemClass);
    valueTaskItemClass = valueTaskItemClass.split(' ');
    addTaskFromStorage(valueTaskItem, valueTaskItemClass);
  }
}

function moveItemUp() {
  if (document.querySelector('.selected')) {
    if (document.querySelector('.selected').previousElementSibling) {
      const elementToUp = document.querySelector('.selected');
      const elementPreviousSibling = elementToUp.previousElementSibling;
      const elementParent = elementToUp.parentElement;
      elementParent.insertBefore(elementToUp, elementPreviousSibling);
    }
  } else {
    window.alert('Selecione uma tarefa antes de mover');
  }
}

function moveItemDown() {
  if (document.querySelector('.selected')) {
    if (document.querySelector('.selected').nextElementSibling) {
      const elementToDown = document.querySelector('.selected');
      const elementNextSibling = elementToDown.nextElementSibling;
      const elementParent = elementToDown.parentElement;
      elementParent.insertBefore(elementToDown, elementNextSibling.nextElementSibling);
    }
  } else {
    window.alert('Selecione uma tarefa antes de mover');
  }
}

function removeTask() {
  if (document.querySelector('.selected')) {
    const elementToRemove = document.querySelector('.selected');
    const elementParent = elementToRemove.parentElement;
    elementParent.removeChild(elementToRemove);
  } else {
    window.alert('Selecione uma tarefa antes de remover');
  }
}

function initiate() {
  document.querySelector('#criar-tarefa').addEventListener('click', addTask);
  document.querySelector('#apaga-tudo').addEventListener('click', clearAllTasks);
  document.querySelector('#remover-finalizados').addEventListener('click', clearCompletedTasks);
  document.querySelector('#salvar-tarefas').addEventListener('click', saveTaskList);
  document.querySelector('#mover-cima').addEventListener('click', moveItemUp);
  document.querySelector('#mover-baixo').addEventListener('click', moveItemDown);
  document.querySelector('#remover-selecionado').addEventListener('click', removeTask);
  if (localStorage.length > 0) {
    populateListFromStorage();
  }
}

window.onload = initiate;

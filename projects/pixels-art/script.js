// BLOCO 05 - DIA 5 - PROJETO - ARTE COM PIXELS
// PROJECT PIXELS ART
// TIAGO SATHLER - TURMA 14 - B
// 08/07/21
// 18/07/21 - Contribuição por code review de 'pauloeduardods' (Paulo de Sordi - 14A)
// ////////////////////////////////////////////

function createPixel(element) {
  const pixelElement = document.createElement('div');
  pixelElement.className = 'pixel';
  element.appendChild(pixelElement);
}

function createBoard(n, board) {
  for (let row = 0; row < n; row += 1) {
    const rowElement = document.createElement('div');
    rowElement.className = 'tr';
    board.appendChild(rowElement);
    for (let column = 0; column < n; column += 1) {
      createPixel(rowElement);
    }
  }
}

function setColorItem(element, color) {
  const property = 'background-color';
  element.style.setProperty(property, color);
}

function selectItem(element) {
  document.querySelector('.selected').classList.remove('selected');
  element.target.classList.add('selected');
}

function paintingPixel(element) {
  const color = document.querySelector('.selected').style.backgroundColor;
  setColorItem(element.target, color);
}

function clearBoard() {
  document.querySelectorAll('.pixel').forEach((pixel) => {
    setColorItem(pixel, 'white');
  });
}

function testBoardNumber(number) {
  let value = false;
  if (Number.isNaN(parseInt(number, 10))) {
    window.alert('Board inválido!');
  } else if (number < 5) {
    value = 5;
  } else if (number > 50) {
    value = 50;
  } else {
    value = number;
  }
  return value;
}

function generateNewBoard() {
  const newBoard = document.querySelector('#pixel-board');
  let number = document.querySelector('#board-size').value;
  number = testBoardNumber(number);
  if (number) {
    newBoard.innerHTML = '';
    createBoard(number, newBoard);
    newBoard.addEventListener('click', paintingPixel);
  }
}

function generateRandomColor() {
  const newColor = [];
  newColor.push(Math.floor(Math.random() * 255));
  newColor.push(Math.floor(Math.random() * 255));
  newColor.push(Math.floor(Math.random() * 255));
  const colorRgb = `rgb(${newColor[0]}, ${newColor[1]}, ${newColor[2]})`;
  return colorRgb;
}

function generatePalette() {
  let color = 'black';
  setColorItem(document.querySelector('.color1'), color);
  color = generateRandomColor();
  setColorItem(document.querySelector('.color2'), color);
  color = generateRandomColor();
  setColorItem(document.querySelector('.color3'), color);
  color = generateRandomColor();
  setColorItem(document.querySelector('.color4'), color);
}

function initiate() {
  const n = 5;
  const board = document.querySelector('#pixel-board');
  createBoard(n, board);
  generatePalette();
  document.querySelector('.color1').classList.add('selected');
  document.querySelectorAll('.color').forEach((colorElement) => {
    colorElement.addEventListener('click', selectItem);
  });
  document.querySelectorAll('.pixel').forEach((pixelElement) => {
    pixelElement.addEventListener('click', paintingPixel);
  });
  document.querySelector('#clear-board').addEventListener('click', clearBoard);
  document
    .querySelector('#sort-palette')
    .addEventListener('click', generatePalette);
  document
    .querySelector('#generate-board')
    .addEventListener('click', generateNewBoard);
}

window.onload = initiate;

// /////////////////////////////////////////////////////
// BLOCO 05 - DIA 7 - (BÔNUS) PROJETO - MEME GENERATOR
// TIAGO H. S. SATHLER - TURMA 14 - TRIBO A
// 12/07/21
// /////////////////////////////////////////////////////

function addPicture(element) {
  const figureElement = document.querySelector('#meme-image');
  const file = URL.createObjectURL(element.target.files[0]);
  console.log(file);
  figureElement.src = file;
}

function addText(element) {
  const figureCaptionElement = document.querySelector('#meme-text');
  const text = element.target.value;
  console.log(text);
  if (text.length <= 60) {
    figureCaptionElement.innerText = text;
  } else {
    window.alert('Máximo de 60 caracteres');
  }
}

function changeBorder(element) {
  const idName = element.currentTarget.id;
  const container = document.querySelector('#meme-image-container');
  switch (idName) {
  case 'fire':
    container.style.border = '3px dashed red';
    break;
  case 'water':
    container.style.border = '5px double blue';
    break;
  case 'earth':
    container.style.border = '6px groove green';
    break;
  default:
    break;
  }
}

function selectMeme(element) {
  const figureElement = document.querySelector('#meme-image');
  const file = element.currentTarget.src;
  figureElement.src = file;
}

function initiate() {
  document.querySelector('#text-input').addEventListener('input', addText);
  document.querySelector('#meme-insert').addEventListener('change', addPicture);
  document.querySelectorAll('.buttons-style').forEach((element) => {
    element.addEventListener('click', changeBorder);
  });
  document.querySelectorAll('.memes-famosos').forEach((element) => {
    element.addEventListener('click', selectMeme);
  });
}

window.onload = initiate;

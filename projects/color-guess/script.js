const rbgColor = document.getElementById('rgb-color');
const answer = document.getElementById('answer');
const resetBtn = document.getElementById('reset-game');
const resetScore = document.getElementById('reset-score');
const score = document.getElementById('score');
const amount = document.getElementById('amount');

const genColor = () => {
  const color = [];
  for (let y = 0; y <= 2; y += 1) {
    color[y] = Math.ceil(Math.random() * 255);
  }
  return color;
};

const gensColors = (n) => {
  const colors = [];
  for (let x = 0; x < n; x += 1) {
    let color = [];
    do {
      color = genColor();
      colors[x] = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    }
    while (colors.slice(0, x).includes(colors[x]));
  }
  return colors;
};

const checkBall = (event) => {
  const currentColor = event.target.style.backgroundColor;
  const correctColor = rbgColor.innerText;
  if (!event.target.classList.contains('checked')) {
    if (currentColor === correctColor) {
      answer.innerText = 'Acertou!';
      const actualScore = Number(score.innerText);
      score.innerText = actualScore + 3;
      event.target.classList.add('checked');
    } else {
      answer.innerText = 'Errou! Tente novamente';
    }
  } else {
    answer.innerText = 'Sorteie novas cores!';
  }
};

const drawBalls = (n) => {
  const ballsSection = document.getElementById('balls');
  const colors = gensColors(n);
  ballsSection.innerHTML = '';
  for (let x = 1; x <= n; x += 1) {
    const ball = document.createElement('div');
    ball.classList.add('ball');
    ball.style.backgroundColor = colors[x - 1];
    ball.addEventListener('click', checkBall);
    ballsSection.appendChild(ball);
  }
  const index = Math.ceil(Math.random() * n);
  return colors[index - 1];
};

const starting = (n) => {
  const sorted = drawBalls(n);
  rbgColor.innerHTML = sorted;
  answer.innerText = 'Escolha uma cor';
};

const initiate = () => {
  const n = amount.value;
  starting(n);
  resetBtn.addEventListener('click', initiate);
  amount.addEventListener('change', initiate);
  resetScore.addEventListener('click', () => {
    score.innerText = 0;
    initiate();
  });
};

window.onload = initiate;

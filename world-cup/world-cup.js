(function createWorldCupEffect() {
  // กันซ้อน
  if (document.querySelector('.worldcup')) return;

  const BASE_URL = 'https://event-festival.github.io/burgundy/assets/festivals/world-cup/';

  const section = document.createElement('div');
  section.className = 'worldcup';
  section.setAttribute('data-festival-theme', 'world-cup');

  const ballContainer = document.createElement('div');
  ballContainer.className = 'worldcup_ball';

  const balls = [
    { cls: 'ball1', file: 'world-cup04.webp', alt: 'Curve1' },
    { cls: 'ball2', file: 'world-cup01.webp', alt: 'Curve2' },
    { cls: 'ball3', file: 'world-cup02.webp', alt: 'Curve3' },
    { cls: 'ball4', file: 'world-cup01.webp', alt: 'Curve4' },
    { cls: 'ball5', file: 'world-cup02.webp', alt: 'Curve5' },
    { cls: 'ball7', file: 'world-cup02.webp', alt: 'Curve7' }
  ];

  balls.forEach(ball => {
    const img = document.createElement('img');
    img.className = `ball ${ball.cls}`;
    img.src = BASE_URL + ball.file;
    img.alt = ball.alt;
    ballContainer.appendChild(img);
  });

  const bg = document.createElement('img');
  bg.className = 'worldcup_bg';
  bg.src = BASE_URL + 'world-cup05.jpg';
  bg.alt = 'worldcup_bg';

  const bottom = document.createElement('div');
  bottom.className = 'worldcup_bt';

  const curve = document.createElement('img');
  curve.className = 'curve';
  curve.src = BASE_URL + 'world-cup03.webp';
  curve.alt = 'Curve8';

  bottom.appendChild(curve);

  section.appendChild(ballContainer);
  section.appendChild(bg);
  section.appendChild(bottom);

  document.body.appendChild(section);
})();

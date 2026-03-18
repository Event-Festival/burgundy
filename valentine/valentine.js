(function createValentineEffect() {
  // กันซ้อน
  if (document.querySelector('.valentine')) return;

  const BASE_URL = 'https://event-festival.github.io/burgundy/assets/festivals/valentine/';

  const section = document.createElement('div');
  section.className = 'valentine';

  const heartContainer = document.createElement('div');
  heartContainer.className = 'valentine_heart';

  const hearts = [
    'valentine-03.webp',
    'valentine-04.webp',
    'valentine-05.webp',
    'valentine-03.webp',
    'valentine-05.webp',
    'valentine-04.webp'
  ];

  hearts.forEach((file, index) => {
    const img = document.createElement('img');
    img.className = `heart heart${index + 1}`;
    img.src = BASE_URL + file;
    img.alt = 'heart';
    heartContainer.appendChild(img);
  });

  const bg = document.createElement('img');
  bg.className = 'valentine_bg';
  bg.src = BASE_URL + 'valentine-06.webp';
  bg.alt = 'valentine_bg';

  const bottom = document.createElement('div');
  bottom.className = 'valentine_bt';

  const curve = document.createElement('img');
  curve.className = 'curve';
  curve.src = BASE_URL + 'valentine-02.webp';
  curve.alt = 'curve';

  bottom.appendChild(curve);

  section.appendChild(heartContainer);
  section.appendChild(bg);
  section.appendChild(bottom);

  document.body.appendChild(section);
})();
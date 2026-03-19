(function createHalloweenEffect() {
  // กันซ้อน
  if (document.querySelector('.halloween')) return;

  const BASE_URL = 'https://event-festival.github.io/burgundy/assets/festivals/halloween/';

  const container = document.createElement('div');
  container.className = 'halloween';
  container.setAttribute('data-festival-theme', 'halloween');

  const batContainer = document.createElement('div');
  batContainer.className = 'halloween_bat';

  const items = [
    { class: 'spider', file: 'Curve0.webp' },
    { class: 'bat bat1', file: 'Curve1.webp' },
    { class: 'bat bat2', file: 'Curve2.webp' },
    { class: 'bat bat3', file: 'Curve3.webp' },
    { class: 'bat bat4', file: 'Curve4.webp' },
    { class: 'bat bat5', file: 'Curve5.webp' },
    { class: 'bat bat7', file: 'Curve7.webp' }
  ];

  items.forEach((item) => {
    const img = document.createElement('img');
    img.className = item.class;
    img.src = BASE_URL + item.file;
    img.alt = item.class;

    batContainer.appendChild(img);
  });

  const bg = document.createElement('img');
  bg.className = 'halloween_bg';
  bg.src = BASE_URL + 'halloween_bg.svg';
  bg.alt = 'halloween_bg';

  const bottom = document.createElement('div');
  bottom.className = 'halloween_bt';

  const curve = document.createElement('img');
  curve.className = 'curve';
  curve.src = BASE_URL + 'Curve8.svg';
  curve.alt = 'curve';

  bottom.appendChild(curve);

  container.appendChild(batContainer);
  container.appendChild(bg);
  container.appendChild(bottom);

  document.body.appendChild(container);
})();
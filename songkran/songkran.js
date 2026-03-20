(function createSongkranEffect() {
  if (document.querySelector('[data-festival-theme="songkran"]')) return;

  const BASE_URL = 'https://event-festival.github.io/burgundy/assets/festivals/songkran/';

  const root = document.createElement('div');
  root.setAttribute('data-festival-theme', 'songkran');
  root.style.position = 'fixed';
  root.style.top = '0';
  root.style.left = '0';
  root.style.width = '100%';
  root.style.pointerEvents = 'none';
  root.style.zIndex = '9999';

  const container = document.createElement('div');
  container.className = 'songkran';

  const top = document.createElement('div');
  top.className = 'songkran-top';

  const createImg = (cls, file) => {
    const img = document.createElement('img');
    img.className = cls;
    img.src = BASE_URL + file;
    return img;
  };

  top.appendChild(createImg('person sm-hide', 'songkran12.webp'));
  top.appendChild(createImg('umbrella sm-hide', 'songkran16.webp'));

  const greeting = document.createElement('div');
  greeting.className = 'greeting-text sm-hide';

  const textEl = document.createElement('span');
  textEl.className = 'slide-text';

  greeting.appendChild(textEl);
  top.appendChild(greeting);

  top.appendChild(createImg('splash-item-1 sm-hide', 'songkran13.webp'));
  top.appendChild(createImg('splash-item-2 sm-hide', 'songkran10.webp'));
  top.appendChild(createImg('splash-item-3 sm-hide', 'songkran10.webp'));

  const bottom = document.createElement('div');
  bottom.className = 'scenery-bottom sm-hide';
  bottom.appendChild(createImg('', 'songkran01.webp'));

  const waterDrop1 = createImg('water-drop sm-hide', 'songkran15.webp');
  const waterDrop2 = createImg('water-drop-2 sm-hide', 'songkran15.webp');
  const sand = createImg('sand sm-hide', 'songkran09.webp');
  const gun = createImg('water-gun sm-hide', 'songkran08.webp');
  const coconut = createImg('coconut sm-hide', 'songkran17.webp');

  container.appendChild(top);
  container.appendChild(bottom);
  container.appendChild(waterDrop1);
  container.appendChild(waterDrop2);
  container.appendChild(sand);
  container.appendChild(gun);
  container.appendChild(coconut);

  root.appendChild(container);
  document.body.appendChild(root);

  const thisYearAD = new Date().getFullYear();
  const thisYearBE = thisYearAD + 543;

  const texts = [
    `HAPPY SONGKRAN DAY ${thisYearAD}!`,
    `สวัสดีปีใหม่ไทย ${thisYearBE}!`
  ];

  let textIndex = 0;

  function showText() {
    textEl.textContent = texts[textIndex];

    textEl.classList.remove('slide-in', 'slide-out');

    void textEl.offsetWidth;

    textEl.classList.add('slide-in');

    setTimeout(() => {
      textEl.classList.remove('slide-in');
      textEl.classList.add('slide-out');
    }, 10000);

    setTimeout(() => {
      textIndex = (textIndex + 1) % texts.length;
      showText();
    }, 10800);
  }

  showText();
})();
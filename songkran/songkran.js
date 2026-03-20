(function createSongkranEffect() {
  if (document.querySelector('.songkran')) return;

  const BASE_URL = 'https://event-festival.github.io/burgundy/assets/festivals/songkran/';

  const container = document.createElement('div');
  container.className = 'songkran';
  container.setAttribute('data-festival-theme', 'songkran');

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
  textEl.className = 'typewriter-text';

  const cursor = document.createElement('span');
  cursor.className = 'cursor-blink';

  greeting.appendChild(textEl);
  greeting.appendChild(cursor);
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

  document.body.appendChild(container);

  // ================= TYPEWRITER =================

  const thisYearAD = new Date().getFullYear();
  const thisYearBE = thisYearAD + 543;

  const texts = [
    {
      text: `HAPPY SONGKRAN DAY ${thisYearAD}!`,
      colors: ['#378ADD','#1D9E75','#D85A30','#D4537E','#7F77DD','#BA7517','#639922']
    },
    {
      text: `สวัสดีปีใหม่ไทย ${thisYearBE}!`,
      colors: ['#D85A30','#D4537E','#BA7517','#639922','#378ADD','#7F77DD','#1D9E75']
    }
  ];

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const TYPE_SPEED = 90;
  const DELETE_SPEED = 50;
  const PAUSE_AFTER_TYPE = 1600;
  const PAUSE_AFTER_DELETE = 600;

  function renderText(text, colors, length) {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < length; i++) {
      const span = document.createElement('span');
      span.textContent = text[i];

      if (text[i] !== ' ') {
        span.style.color = colors[i % colors.length];
        span.style.animationDelay = `${i * 0.02}s`;
      }

      fragment.appendChild(span);
    }

    textEl.innerHTML = '';
    textEl.appendChild(fragment);
  }

  function tick() {
    const current = texts[textIndex];

    if (!isDeleting) {
      charIndex++;
      renderText(current.text, current.colors, charIndex);

      if (charIndex === current.text.length) {
        cursor.classList.add('pause');

        return setTimeout(() => {
          cursor.classList.remove('pause');
          isDeleting = true;
          tick();
        }, PAUSE_AFTER_TYPE);
      }
    } else {
      charIndex--;
      renderText(current.text, current.colors, charIndex);

      if (charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;

        cursor.classList.add('pause');

        return setTimeout(() => {
          cursor.classList.remove('pause');
          tick();
        }, PAUSE_AFTER_DELETE);
      }
    }

    setTimeout(tick, isDeleting ? DELETE_SPEED : TYPE_SPEED);
  }

  tick();
})();
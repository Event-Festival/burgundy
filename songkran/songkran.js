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

  document.body.appendChild(container);

  // ================= SLIDE TEXT =================
  
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

  function renderText(item) {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < item.text.length; i++) {
      const span = document.createElement('span');
      span.textContent = item.text[i];
      if (item.text[i] !== ' ') {
        span.style.color = item.colors[i % item.colors.length];
      }
      fragment.appendChild(span);
    }
    textEl.innerHTML = '';
    textEl.appendChild(fragment);
  }

  const DISPLAY_DURATION = 10000;
  const SLIDE_OUT_DURATION = 600;
  const BETWEEN_DELAY = 400;     

  let currentIndex = 0;

  function showNext() {
    renderText(texts[currentIndex]);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        textEl.classList.remove('slide-out');
        textEl.classList.add('slide-in');
      });
    });

    setTimeout(() => {
      textEl.classList.remove('slide-in');
      textEl.classList.add('slide-out');

      setTimeout(() => {
        currentIndex = (currentIndex + 1) % texts.length;
        textEl.classList.remove('slide-out');

        setTimeout(showNext, BETWEEN_DELAY);
      }, SLIDE_OUT_DURATION);

    }, DISPLAY_DURATION);
  }

  showNext();
})();
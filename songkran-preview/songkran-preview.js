(function createSongkranPreview() {
  const BASE_URL = 'https://event-festival.github.io/burgundy/assets/festivals/songkran/';
  const STORAGE_KEY = `viewed_songkran`;

  if (localStorage.getItem(STORAGE_KEY)) return;
  if (document.querySelector('.songkran-preview')) return;


  const thisYearAD = new Date().getFullYear();
  const thisYearBE = thisYearAD + 543;

  const phrases = [
    `Happy Songkran Day ${thisYearAD}`,
    `สวัสดีปีใหม่ไทย ${thisYearBE}`,
  ];

  let loadedCount   = 0;
  const totalImages = 7;
  let isReady       = false;
  let rafId         = null;
  let startTime     = null;
  let hasSwitchedText = false;
  let hasZoomed       = false;

  const wrap = document.createElement('div');
  wrap.className = 'songkran-preview';
  wrap.setAttribute('data-festival-theme', 'songkran-preview');

  const zoomContent = document.createElement('div');
  zoomContent.className = 'sp-zoom-content';

  const mkImg = (cls, file) => {
    const img = document.createElement('img');
    img.className = cls;
    img.src = BASE_URL + file;
    img.addEventListener('load',  onImageLoad);
    img.addEventListener('error', onImageLoad);
    return img;
  };

  ['sp-water-show1','sp-water-show2','sp-water-show3',
   'sp-water-show4','sp-water-show5','sp-water-show6'].forEach(cls => {
    zoomContent.appendChild(mkImg(cls, 'songkran-preview01.webp'));
  });

  const central = document.createElement('div');
  central.className = 'sp-central-greeting';

  const bgImg = mkImg('sp-water-show7', 'songkran-preview02.webp');
  central.appendChild(bgImg);

  const titleEl = document.createElement('div');
  titleEl.className = 'sp-title';
  central.appendChild(titleEl);

  zoomContent.appendChild(central);
  wrap.appendChild(zoomContent);
  document.body.appendChild(wrap);


  function renderLetters(text, baseDelay) {
    titleEl.innerHTML = '';
    text.split('').forEach((char, i) => {
      const span = document.createElement('span');
      if (char === ' ') {
        span.className = 'sp-letter sp-space';
        span.innerHTML = '&nbsp;';
      } else {
        span.className = 'sp-letter';
        span.textContent = char;
      }
      span.style.animationDelay = `${(i * 0.08) + baseDelay}s`;
      titleEl.appendChild(span);
    });
  }

  function destroy() {
    if (rafId) cancelAnimationFrame(rafId);
    wrap.remove();
  }

  function onImageLoad() {
    loadedCount++;
    if (loadedCount === totalImages && !isReady) {
      isReady = true;
      setTimeout(() => {
        renderLetters(phrases[0], 1.8);
        zoomContent.classList.add('ready');
        startAnimationSequence();
      }, 700);
    }
  }

  function startAnimationSequence() {
    rafId = requestAnimationFrame(step);
  }

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;

    if (elapsed >= 5000 && !hasSwitchedText) {
      hasSwitchedText = true;
      renderLetters(phrases[1], 0);
    }

    if (elapsed >= 8500 && !hasZoomed) {
      hasZoomed = true;
      wrap.classList.add('zoom-active');
    }

    if (elapsed >= 10000) {
      localStorage.setItem(STORAGE_KEY, 'true');
      destroy();
      return;
    }

    rafId = requestAnimationFrame(step);
  }

})();
(function createChineseNewYearEffect() {
  // กันซ้อน
  if (document.querySelector('[data-festival-theme="ch_newyear"]')) return;

  const BASE_URL = 'https://event-festival.github.io/burgundy/assets/festivals/chinese-newyear/';

  const root = document.createElement('div');
  root.setAttribute('data-festival-theme', 'ch_newyear');
  root.style.position = 'fixed';
  root.style.top = '0';
  root.style.left = '0';
  root.style.width = '100%';
  root.style.pointerEvents = 'none';
  root.style.zIndex = '9999';

  const bgWrapper = document.createElement('div');
  bgWrapper.style.overflow = 'hidden';
  bgWrapper.style.width = '100vw';

  const bg = document.createElement('img');
  bg.className = 'ch_newyear_bg';
  bg.src = BASE_URL + 'CH-NewYear01.webp';

  bgWrapper.appendChild(bg);

  const chromContainer = document.createElement('div');
  chromContainer.className = 'ch_newyear';

  const chromList = [
    'CH-NewYear04.webp',
    'CH-NewYear02.webp',
    'CH-NewYear04.webp',
    'CH-NewYear03.webp',
    'CH-NewYear02.webp',
    'CH-NewYear03.webp',
    'CH-NewYear04.webp'
  ];

  chromList.forEach((file, index) => {
    const img = document.createElement('img');
    img.className = `chrom chrom${index + 1}`;
    img.src = BASE_URL + file;
    chromContainer.appendChild(img);
  });

  const river = document.createElement('div');
  river.className = 'river sm-hide';

  const wrapper = document.createElement('div');
  wrapper.className = 'w-100';
  wrapper.style.position = 'relative';
  wrapper.style.height = '60px';
  wrapper.style.overflow = 'hidden';

  const fruit = document.createElement('img');
  fruit.className = 'fruit fruit1';
  fruit.src = BASE_URL + 'CH-NewYear08.webp';

  wrapper.appendChild(fruit);
  river.appendChild(wrapper);

  root.appendChild(bgWrapper);
  root.appendChild(chromContainer);
  root.appendChild(river);

  document.body.appendChild(root);
})();
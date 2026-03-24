(function createChineseNewYearEffect() {
  if (document.querySelector('[data-festival-theme="chinese-new-year"]')) return;

  const BASE_URL = 'https://event-festival.github.io/burgundy/assets/festivals/chinese-newyear/';

  const root = document.createElement('div');
  root.setAttribute('data-festival-theme', 'chinese-new-year');
  root.style.display = 'none';

  const bgWrapper = document.createElement('div');
  bgWrapper.style.overflow = 'hidden';
  bgWrapper.style.width = '100vw';

  const bg = document.createElement('img');
  bg.className = 'ch_newyear_bg';
  bg.src = BASE_URL + 'CH-NewYear01.webp';
  bg.alt = 'ch_newyear_bg';

  bgWrapper.appendChild(bg);

  const chromContainer = document.createElement('div');
  chromContainer.className = 'ch_newyear';

  const chromList = [
    { cls: 'chrom1', file: 'CH-NewYear04.webp' },
    { cls: 'chrom3', file: 'CH-NewYear02.webp' },
    { cls: 'chrom4', file: 'CH-NewYear04.webp' },
    { cls: 'chrom5', file: 'CH-NewYear03.webp' },
    { cls: 'chrom6', file: 'CH-NewYear02.webp' },
    { cls: 'chrom7', file: 'CH-NewYear03.webp' },
    { cls: 'chrom8', file: 'CH-NewYear04.webp' },
  ];

  chromList.forEach(({ cls, file }) => {
    const img = document.createElement('img');
    img.className = `chrom ${cls}`;
    img.src = BASE_URL + file;
    img.alt = cls;
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
  fruit.alt = 'fruit';

  wrapper.appendChild(fruit);
  river.appendChild(wrapper);

  document.body.appendChild(root);
  document.body.appendChild(bgWrapper);
  document.body.appendChild(chromContainer);
  document.body.appendChild(river);

})();
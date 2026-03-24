(function createLoyKrathongEffect() {
  if (document.querySelector('[data-festival-theme="loy-krathong"]')) return;

  const BASE_URL = 'https://event-festival.github.io/burgundy/assets/festivals/loy-krathong/';

  const root = document.createElement('div');
  root.setAttribute('data-festival-theme', 'loy-krathong');
  root.style.display = 'none';

  const bgWrapper = document.createElement('div');
  bgWrapper.style.overflow = 'hidden';
  bgWrapper.style.width = '100vw';

  const bg = document.createElement('img');
  bg.className = 'loykrathong_bg';
  bg.src = BASE_URL + 'loykrathong_bg.webp';
  bg.alt = 'loykrathong_bg';

  bgWrapper.appendChild(bg);

  const chromContainer = document.createElement('div');
  chromContainer.className = 'loy-krathong';

  const chromList = [
    'krathong2_0.webp',
    'krathong3_0.webp',
    'krathong2_0.webp',
    'krathong3_1.webp',
    'krathong2_0.webp',
    'krathong3_0.webp',
    'krathong2_1.webp',
    'krathong3_0.webp',
  ];

  chromList.forEach((file, index) => {
    const img = document.createElement('img');
    img.className = `chrom chrom${index + 1}`;
    img.src = BASE_URL + file;
    img.alt = `chrom${index + 1}`;
    chromContainer.appendChild(img);
  });

  const river = document.createElement('div');
  river.className = 'river sm-hide';

  const water = document.createElement('div');
  water.className = 'water';

  const krathongWrapper = document.createElement('div');
  krathongWrapper.className = 'w-100';
  krathongWrapper.style.position = 'relative';
  krathongWrapper.style.height = '40px';
  krathongWrapper.style.overflow = 'hidden';

  [1, 2, 3].forEach((num) => {
    const img = document.createElement('img');
    img.className = `krathong krathong${num}`;
    img.src = BASE_URL + 'krathong_0.webp';
    img.alt = `krathong${num}`;
    krathongWrapper.appendChild(img);
  });

  river.appendChild(water);
  river.appendChild(krathongWrapper);

  document.body.appendChild(root);
  document.body.appendChild(bgWrapper);
  document.body.appendChild(chromContainer);
  document.body.appendChild(river);

})();
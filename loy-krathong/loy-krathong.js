(function createLoyKrathongEffect() {
  // กันซ้อน (เช็คที่ root)
  if (document.querySelector('[data-festival-theme="loy-krathong"]')) return;

  const BASE_URL = 'https://event-festival.github.io/burgundy/assets/festivals/loy-krathong/';

  const root = document.createElement('div');
  root.setAttribute('data-festival-theme', 'loy-krathong');

  root.style.position = 'fixed';
  root.style.top = '0';
  root.style.left = '0';
  root.style.width = '100%';
  root.style.pointerEvents = 'none';
  root.style.zIndex = '9999';
  root.style.height = '100%';

  const bgWrapper = document.createElement('div');
  bgWrapper.style.overflow = 'hidden';
  bgWrapper.style.width = '100vw';

  const bg = document.createElement('img');
  bg.className = 'loykrathong_bg';
  bg.src = BASE_URL + 'loykrathong_bg.webp';

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
    'krathong3_0.webp'
  ];

  chromList.forEach((file, index) => {
    const img = document.createElement('img');
    img.className = `chrom chrom${index + 1}`;
    img.src = BASE_URL + file;
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

  const krathongList = [1, 2, 3];

  krathongList.forEach((num) => {
    const img = document.createElement('img');
    img.className = `krathong krathong${num}`;
    img.src = BASE_URL + 'krathong_0.webp';
    krathongWrapper.appendChild(img);
  });

  river.appendChild(water);
  river.appendChild(krathongWrapper);

  root.appendChild(bgWrapper);
  root.appendChild(chromContainer);
  root.appendChild(river);

  document.body.appendChild(root);
})();
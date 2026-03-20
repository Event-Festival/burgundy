(function createChristmasEffect() {
  // กันซ้อน
  if (document.querySelector('.christmas')) return;

  const BASE_URL = 'https://event-festival.github.io/burgundy/assets/festivals/christmas/';

  const section = document.createElement('div');
  section.className = 'christmas';
  section.setAttribute('data-festival-theme', 'christmas');

  const top = document.createElement('div');
  top.className = 'christmas_top';

  const createImg = (className, file) => {
    const img = document.createElement('img');
    img.className = className;
    img.src = BASE_URL + file;
    img.alt = className;
    return img;
  };

  top.appendChild(createImg('santa sm-hide', 'santa.webp'));
  top.appendChild(createImg('santa2 sm-hide', 'santa2.webp'));
  top.appendChild(createImg('merry-christmas sm-hide', 'merry-christmas.png'));

  top.appendChild(createImg('gift gift1 sm-hide', 'gift1.webp'));
  top.appendChild(createImg('gift gift2 sm-hide', 'gift2.webp'));
  top.appendChild(createImg('gift gift3', 'gift3.webp'));
  top.appendChild(createImg('gift gift4', 'gift4.webp'));
  top.appendChild(createImg('gift gift5', 'gift5.webp'));

  top.appendChild(createImg('gift item1', 'item1.webp'));

  const itemBox = document.createElement('div');
  itemBox.className = 'item-box sm-hide';
  itemBox.appendChild(createImg('gift item2', 'item2.webp'));

  top.appendChild(itemBox);

  const snowBox = document.createElement('div');
  snowBox.className = 'snowman-box sm-hide';
  snowBox.appendChild(createImg('snowman', 'snowman.webp'));

  const bottom = document.createElement('div');
  bottom.className = 'christmas_bt sm-hide';

  const bg = document.createElement('img');
  bg.src = BASE_URL + 'christmas_bg.svg';
  bg.alt = 'christmas_bg';

  bottom.appendChild(bg);

  section.appendChild(top);
  section.appendChild(snowBox);
  section.appendChild(bottom);

  document.body.appendChild(section);

  const merryChristmas = section.querySelector('.merry-christmas');
  const santa = section.querySelector('.santa2');

  if (!merryChristmas || !santa) return;

  const triggerSanta = () => {
    santa.style.animationPlayState = 'running';
    merryChristmas.style.animationPlayState = 'running';
  };

  santa.addEventListener('animationiteration', () => {
    santa.style.animationPlayState = 'paused';
    merryChristmas.style.animationPlayState = 'paused';

    const wait = Math.floor(Math.random() * 35000) + 10000;
    setTimeout(triggerSanta, wait);
  });

  const firstWait = Math.floor(Math.random() * 15000) + 5000;
  setTimeout(triggerSanta, firstWait);

})();
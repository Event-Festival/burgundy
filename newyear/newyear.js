(function createNewYearEffect() {
  if (document.querySelector('.canvas-new-year')) return;

  const show = localStorage.getItem('newYearShow') ?? 'true';
  if (show === 'false') return;

  const canvas = document.createElement('canvas');
  canvas.className = 'canvas-new-year';
  canvas.setAttribute('data-festival-theme', 'canvas-new-year');
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');

  let w, h, particles, chars = [], current;
  let animationId;

  const duration = 5000;
  const str = ['Happy', 'New', 'Year', new Date().getFullYear().toString()];
  const totalCycleTime = str.length * duration;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    particles = w < 400 ? 55 : 99;
  }

  function makeChar(c) {
    const tmp = document.createElement('canvas');
    const size = tmp.width = tmp.height = w < 400 ? 200 : 300;
    const tmpCtx = tmp.getContext('2d');

    tmpCtx.font = 'bold ' + size + 'px Arial';
    tmpCtx.fillStyle = 'white';
    tmpCtx.textAlign = 'center';
    tmpCtx.textBaseline = 'middle';
    tmpCtx.fillText(c, size / 2, size / 2);

    const data = tmpCtx.getImageData(0, 0, size, size);
    const pts = [];

    while (pts.length < particles) {
      const x = Math.random() * size;
      const y = Math.random() * size;
      const offset = (parseInt(y) * size + parseInt(x)) * 4;

      if (data.data[offset]) {
        pts.push([x - size / 2, y - size / 2]);
      }
    }

    return pts;
  }

  function makeChars(t) {
    const actual = parseInt(t / duration) % str.length;
    if (current === actual) return;

    current = actual;
    chars = [...str[actual]].map(c => makeChar(c));
  }

  function circle(x, y, r) {
    ctx.beginPath();
    ctx.ellipse(x, y, r, r, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  function rocket(x, y, id, t) {
    ctx.fillStyle = 'white';
    const r = 2 - 2 * t + Math.pow(t, 15 * t) * 16;
    y = h - y * t;
    circle(x, y, r);
  }

  function explosion(pts, x, y, id, t) {
    const dy = (t * t * t) * 20;
    let r = Math.sin(id) * 1 + 3;
    r = t < 0.5 ? (t + 0.5) * t * r : r - t * r;

    ctx.fillStyle = `hsl(${id * 55}, 55%, 55%)`;

    pts.forEach((xy, i) => {
      if (i % 20 === 0) {
        ctx.fillStyle = `hsl(${id * 55}, 55%, ${55 + t * Math.sin(t * 55 + i) * 45}%)`;
      }
      circle(t * xy[0] + x, h - y + t * xy[1] + dy, r);
    });
  }

  function firework(t, i, pts) {
    t -= i * 200;

    let id = i + chars.length * parseInt(t - (t % duration));
    t = (t % duration) / duration;

    let dx = (i + 1) * w / (1 + chars.length);
    dx += Math.min(0.33, t) * 100 * Math.sin(id);

    let dy = h * 0.5;
    dy += Math.sin(id * 4547.411) * h * 0.1;

    if (t < 0.33) {
      rocket(dx, dy, id, t * 3);
    } else {
      explosion(pts, dx, dy, id, Math.min(1, Math.max(0, t - 0.33) * 2));
    }
  }

  function render(t) {
    makeChars(t);

    ctx.fillStyle = '#00000010';
    ctx.fillRect(0, 0, w, h);

    chars.forEach((pts, i) => firework(t, i, pts));

    animationId = requestAnimationFrame(render);
  }

  function stop() {
    cancelAnimationFrame(animationId);
    canvas.style.display = 'none';
  }

  resize();
  window.addEventListener('resize', resize);

  animationId = requestAnimationFrame(render);

  // auto hide
  setTimeout(() => {
    localStorage.setItem('newYearShow', 'false');
    stop();
  }, totalCycleTime);

})();
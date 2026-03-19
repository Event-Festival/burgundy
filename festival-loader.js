(function () {
  const isDev = location.hostname === 'localhost';

  const CONFIG_URL =
    isDev && window.FESTIVAL_CONFIG_URL
      ? window.FESTIVAL_CONFIG_URL
      : 'https://event-festival.github.io/burgundy/theme-config.json';

  function loadCSS(href) {
    if (document.querySelector(`link[href="${href}"]`)) return;

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
  }

  function loadJS(src) {
    if (document.querySelector(`script[src="${src}"]`)) return;

    const script = document.createElement('script');
    script.src = src;
    script.defer = true;
    document.body.appendChild(script);
  }

  function isInRange(start, end) {
    const today = new Date();
    const s = new Date(start);
    const e = new Date(end);

    return today >= s && today <= e;
  }

  function initFestival(config) {
    const currentYear = new Date().getFullYear().toString();

    const event = config.events.find(e => e.year === currentYear);
    if (!event) return;

    const themes = event.themes;

    Object.keys(themes).forEach(key => {
      const theme = themes[key];

      if (!theme.active) return;

      if (isInRange(theme.start, theme.end)) {
        console.log('🎉 Load Theme:', key);

        loadCSS(theme.css);
        loadJS(theme.js);
      }
    });
  }

  function init() {
    fetch(CONFIG_URL)
      .then(res => res.json())
      .then(data => initFestival(data))
      .catch(err => console.error('Festival load error:', err));
  }

  init();
})();
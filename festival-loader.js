(function () {
  const isDev = location.hostname === 'localhost';

  const CONFIG_URL =
    isDev && window.FESTIVAL_CONFIG_URL
      ? window.FESTIVAL_CONFIG_URL
      : 'https://event-festival.github.io/burgundy/theme-config.json';

  let loadedThemes = new Set();

  const THEME_STORAGE_KEYS = {
    'newyear': ['newYearShow'],
    'songkran-preview': ['viewed_songkran'],
  };

  // LocalStorage Control

  function isFestivalEnabled() {
    try {
      const value = localStorage.getItem('Festival');
      if (value === null) return true;
      return value === 'true';
    } catch {
      return true;
    }
  }

  function isCollapsed() {
    try {
      const value = localStorage.getItem('BGD_Collapsed');
      if (value === null) return true;
      return value === 'true';
    } catch {
      return true;
    }
  }

  // CSS Variable Controller

  function applyCollapsedState() {
    const root = document.documentElement;

    if (isCollapsed()) {
      root.classList.add('collapsed');
      root.classList.remove('expanded');
    } else {
      root.classList.add('expanded');
      root.classList.remove('collapsed');
    }
  }

  // Load Resource

  function loadCSS(href) {
    if (document.querySelector(`link[href="${href}"]`)) return;

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.setAttribute('data-festival', 'true');
    document.head.appendChild(link);
  }

  function loadJS(src, key) {
    if (document.querySelector(`script[src="${src}"]`)) return;

    const script = document.createElement('script');
    script.src = src;
    script.defer = true;
    script.setAttribute('data-theme', key);
    script.setAttribute('data-festival', 'true');
    document.body.appendChild(script);
  }

  function removeThemes() {
    // remove css + js
    document.querySelectorAll('[data-festival="true"]').forEach(el => el.remove());

    // remove DOM ของ theme
    document.querySelectorAll('[data-festival-theme]').forEach(el => el.remove());

    loadedThemes.clear();
  }

  // Date Check

  function isInRange(start, end) {
    const today = new Date();
    const s = new Date(start);
    const e = new Date(end);
    return today >= s && today < e;
  }

  // Core Logic

  function initFestival(config) {
    applyCollapsedState();

    if (!isFestivalEnabled()) {
      removeThemes();
      return;
    }

    const currentYear = new Date().getFullYear().toString();
    const event = config.events.find(e => e.year === currentYear);
    if (!event) return;

    const themes = event.themes;

    Object.keys(themes).forEach(key => {
      const theme = themes[key];

      if (!theme.active) return;

      if (isInRange(theme.start, theme.end)) {
        if (loadedThemes.has(key)) return;

        loadCSS(theme.css);
        loadJS(theme.js, key);

        loadedThemes.add(key);
      } else {
        const storageKeys = THEME_STORAGE_KEYS[key];
        if (storageKeys) {
          storageKeys.forEach(k => localStorage.removeItem(k));
        }
      }
    });
  }

  // Public API

  window.Festival = {
    enable() {
      localStorage.setItem('Festival', 'true');
      init();
    },
    disable() {
      localStorage.setItem('Festival', 'false');
      removeThemes();
    },
    collapse() {
      localStorage.setItem('BGD_Collapsed', 'true');
      applyCollapsedState();
    },
    expand() {
      localStorage.setItem('BGD_Collapsed', 'false');
      applyCollapsedState();
    },
    toggle() {
      const current = isFestivalEnabled();
      localStorage.setItem('Festival', (!current).toString());
      init();
    },
    toggleCollapse() {
      const current = isCollapsed();
      localStorage.setItem('BGD_Collapsed', (!current).toString());
      applyCollapsedState();
    }
  };

  // Init + Watcher

  let cachedConfig = null;

  function init() {
    if (cachedConfig) {
      initFestival(cachedConfig);
      return;
    }

    fetch(CONFIG_URL)
      .then(res => res.json())
      .then(data => {
        cachedConfig = data;
        initFestival(data);
      })
      .catch(err => console.error('Festival load error:', err));
  }

  window.addEventListener('storage', () => {
    init();
    applyCollapsedState();
  });

  init();

})();
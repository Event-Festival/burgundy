(function () {
  const coreScriptUrl = 'https://event-festival.github.io/burgundy/festival-core.js';
  
  if (document.querySelector(`script[src^="${coreScriptUrl}"]`)) return;

  const script = document.createElement('script');
  const timestamp = new Date().getTime();
  script.src = `${coreScriptUrl}?t=${timestamp}`;
  script.defer = true;
  
  document.head.appendChild(script);
})();
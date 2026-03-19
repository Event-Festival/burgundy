(function createSnowEffect() {
  // กันโหลดซ้ำ
  if (document.querySelector('.snow')) return;

  const section = document.createElement('section');
  section.className = 'snow';
  section.setAttribute('data-festival-theme', 'snow');

  const flakes = [
    'far', 'far', 'far', 'far', 'far',
    'far', 'far', 'far', 'far', 'far',
    'fas', 'fas', 'far', 'far', 'far'
  ];

  flakes.forEach((iconType, index) => {
    const div = document.createElement('div');
    div.className = index === 0 ? 'snowflake' : `snowflake${index}`;

    const icon = document.createElement('i');
    icon.className = `${iconType} fa-snowflake`;

    div.appendChild(icon);
    section.appendChild(div);
  });

  document.body.appendChild(section);
})();

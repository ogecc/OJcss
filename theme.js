(function () {
  var root = document.documentElement;
  var btn  = document.getElementById('theme-toggle');

  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('ojcss-theme', theme);
    if (btn) btn.textContent = theme === 'dark' ? '[ LIGHT ]' : '[ DARK ]';
  }

  var saved = localStorage.getItem('ojcss-theme');
  applyTheme(saved || getSystemTheme());

  if (btn) {
    btn.addEventListener('click', function () {
      applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
  }
})();

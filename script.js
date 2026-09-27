// Breakthrough Author Live — small interactions

document.addEventListener('DOMContentLoaded', function () {
  // Light / dark theme toggle (theme itself is applied early via inline
  // script in <head> to avoid a flash of the wrong theme on load)
  var themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    themeToggle.setAttribute('aria-pressed', String(isDark));

    themeToggle.addEventListener('click', function () {
      var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      themeToggle.setAttribute('aria-pressed', String(next === 'dark'));
      try { localStorage.setItem('bal-theme', next); } catch (e) {}
    });
  }

  // Mobile nav toggle
  var menuToggle = document.getElementById('menuToggle');
  var navLinks = document.getElementById('navLinks');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
      });
    });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var question = item.querySelector('.faq-question');
    question.addEventListener('click', function () {
      var wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function (openItem) {
        openItem.classList.remove('open');
      });
      if (!wasOpen) item.classList.add('open');
    });
  });

  // Video placeholder click (no real video attached — just a friendly note)
  var videoFrame = document.querySelector('.video-frame');
  if (videoFrame) {
    videoFrame.addEventListener('click', function () {
      var caption = videoFrame.querySelector('.video-caption');
      if (caption) caption.textContent = 'Video coming soon';
    });
  }
});

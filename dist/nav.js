/* Shared navigation: the mobile burger.

   Every rule that actually does something lives in site-nav.css and is gated
   behind a .js class on <html>. Without this file that class is never added,
   the button never appears, and the links stay visible and stacked. So a
   failed or blocked script costs the reader a taller menu, never a dead one. */

(function () {
  var nav = document.querySelector('.site-nav');
  if (!nav) return;

  var toggle = nav.querySelector('.nav-toggle');
  var links = nav.querySelector('.site-links');
  if (!toggle || !links) return;

  function isOpen() {
    return toggle.getAttribute('aria-expanded') === 'true';
  }

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  toggle.addEventListener('click', function () {
    setOpen(!isOpen());
  });

  // A chosen destination means the menu has done its job.
  links.addEventListener('click', function (event) {
    if (event.target.closest('a')) setOpen(false);
  });

  // Escape closes it and hands focus back to the button that opened it.
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && isOpen()) {
      setOpen(false);
      toggle.focus();
    }
  });

  // A click outside the bar dismisses it, the way a menu is expected to.
  document.addEventListener('click', function (event) {
    if (isOpen() && !nav.contains(event.target)) setOpen(false);
  });
})();
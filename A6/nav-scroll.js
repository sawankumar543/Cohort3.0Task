(function () {
  var siteHeader = document.getElementById("site-header");
  if (!siteHeader) return;

  function updateStickyState() {
    siteHeader.classList.toggle("is-sticky", window.scrollY >= 120);
  }

  requestAnimationFrame(function () {
    siteHeader.classList.add("loaded");
  });

  updateStickyState();
  window.addEventListener("scroll", updateStickyState, { passive: true });
})();

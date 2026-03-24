(function () {
  "use strict";

  function smoothScrollTo(hash) {
    var target = document.querySelector(hash);
    if (!target) return;
    var top = target.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: top, behavior: "smooth" });
  }

  function closeMobileNav() {
    var menu = document.getElementById("navbarNav");
    var toggle = document.getElementById("navToggle");
    if (!menu || !window.matchMedia("(max-width: 767px)").matches) return;
    menu.classList.add("hidden");
    menu.classList.remove("flex");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    var href = link.getAttribute("href");
    if (!href || href === "#") return;
    link.addEventListener("click", function (e) {
      e.preventDefault();
      smoothScrollTo(href);
      closeMobileNav();
    });
  });

  var navToggle = document.getElementById("navToggle");
  var navbarNav = document.getElementById("navbarNav");
  if (navToggle && navbarNav) {
    navToggle.addEventListener("click", function () {
      var open = navbarNav.classList.toggle("flex");
      navbarNav.classList.toggle("hidden", !open);
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
})();

function cambiarIdioma() {
  var idioma = document.getElementById("idioma").value;
  console.log(idioma);
  if (idioma == "en") {
    window.location.href = "index.html";
  } else if (idioma == "es") {
    window.location.href = "index-es.html";
  }
}

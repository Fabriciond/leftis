import AOS from "aos";

function smoothScrollTo(hash: string): void {
  const target = document.querySelector(hash);
  if (!target) return;
  const top = target.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top, behavior: "smooth" });
}

function closeMobileNav(): void {
  const menu = document.getElementById("navbarNav");
  const toggle = document.getElementById("navToggle");
  if (!menu || !window.matchMedia("(max-width: 767px)").matches) return;
  menu.classList.add("hidden");
  menu.classList.remove("flex");
  if (toggle) toggle.setAttribute("aria-expanded", "false");
}

export function initApp(): void {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href === "#") return;
    link.addEventListener("click", (e) => {
      e.preventDefault();
      smoothScrollTo(href);
      closeMobileNav();
    });
  });

  const navToggle = document.getElementById("navToggle");
  const navbarNav = document.getElementById("navbarNav");
  if (navToggle && navbarNav) {
    navToggle.addEventListener("click", () => {
      const open = navbarNav.classList.toggle("flex");
      navbarNav.classList.toggle("hidden", !open);
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReduced) {
    document.querySelectorAll("[data-aos]").forEach((el) => {
      el.removeAttribute("data-aos");
      el.removeAttribute("data-aos-delay");
    });
  } else {
    AOS.init({
      duration: 650,
      once: true,
      offset: 64,
      easing: "ease-out-cubic",
    });
  }
}

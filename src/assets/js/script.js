/**
 * Portfolio Website JavaScript (React Safe)
 * Handles theme switching, smooth scrolling, observers, form validation
 */

(function () {
  let initialized = false;

  function whenReady(cb) {
    const interval = setInterval(() => {
      const header = document.querySelector(".header");
      if (header) {
        clearInterval(interval);
        cb();
      }
    }, 100);
  }

  class PortfolioApp {
    constructor() {
      if (initialized) return;
      initialized = true;
      this.initializeApp();
    }

    initializeApp() {
      this.setupThemeToggle();
      this.setupSmoothScrolling();
      this.setupIntersectionObserver();
      this.setupNavigationHighlight();
      this.setupContactForm();
      this.setupMobileNavigation();
      this.setupHeaderScroll();
      this.setupProjectsCarousel();
      this.setupTypingAnimation();
      this.markAsLoaded();
    }

    setupThemeToggle() {
      const themeToggle = document.getElementById("themeToggle");
      if (!themeToggle) return;

      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
      this.setTheme(prefersDark.matches ? "dark" : "light");

      themeToggle.addEventListener("click", () => {
        const currentTheme =
          document.documentElement.getAttribute("data-theme") || "light";
        this.setTheme(currentTheme === "light" ? "dark" : "light");
      });

      prefersDark.addEventListener("change", (e) => {
        this.setTheme(e.matches ? "dark" : "light");
      });
    }

    setTheme(theme) {
      document.documentElement.setAttribute("data-theme", theme);
    }

    setupSmoothScrolling() {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.onclick = (e) => {
          const target = document.querySelector(anchor.getAttribute("href"));
          if (!target) return;
          e.preventDefault();

          const header = document.querySelector(".header");
          const offset = header ? header.offsetHeight : 0;

          window.scrollTo({
            top: target.offsetTop - offset - 20,
            behavior: "smooth",
          });
        };
      });
    }

    setupIntersectionObserver() {
      const sections = document.querySelectorAll(".section:not(.hero)");
      if (!sections.length) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("section--visible");
        });
      });

      sections.forEach((s) => observer.observe(s));
    }

    setupNavigationHighlight() {
      const navLinks = document.querySelectorAll(".nav__link");
      const sections = document.querySelectorAll(".section");

      if (!navLinks.length || !sections.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            navLinks.forEach((l) =>
              l.classList.remove("nav__link--active")
            );
            const active = document.querySelector(
              `.nav__link[href="#${entry.target.id}"]`
            );
            active?.classList.add("nav__link--active");
          });
        },
        { threshold: 0.6 }
      );

      sections.forEach((s) => observer.observe(s));
    }

    setupContactForm() {
      const form = document.querySelector(".contact-form");
      if (!form) return;

      form.onsubmit = (e) => {
        e.preventDefault();
        alert("Form working (replace API call)");
        form.reset();
      };
    }

    setupMobileNavigation() {
      const toggle = document.getElementById("mobileNavToggle");
      const nav = document.getElementById("mobileNav");

      if (!toggle || !nav) return;

      toggle.onclick = (e) => {
        e.stopPropagation();
        const expanded = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", !expanded);
        toggle.classList.toggle("mobile-nav-toggle--active");
        nav.classList.toggle("mobile-nav--open");
      };

      nav.onclick = (e) => {
        if (e.target.classList.contains("mobile-nav__link")) {
          toggle.setAttribute("aria-expanded", "false");
          toggle.classList.remove("mobile-nav-toggle--active");
          nav.classList.remove("mobile-nav--open");
        }
      };

      document.addEventListener("click", (e) => {
        if (!toggle.contains(e.target) && !nav.contains(e.target)) {
          toggle.setAttribute("aria-expanded", "false");
          toggle.classList.remove("mobile-nav-toggle--active");
          nav.classList.remove("mobile-nav--open");
        }
      });
    }

    setupHeaderScroll() {
      const header = document.querySelector(".header");
      if (!header) return;

      window.addEventListener("scroll", () => {
        header.classList.toggle("header--scrolled", window.scrollY > 50);
      });
    }

    setupProjectsCarousel() {}
    setupTypingAnimation() {}

    markAsLoaded() {
      const portfolio = document.getElementById("portfolio");
      portfolio?.classList.add("loaded");
    }
  }

  whenReady(() => new PortfolioApp());
})();
/**
 * Sync heights of elements row-by-row inside a container
 * @param {string} containerSelector - parent container selector
 * @param {string[]} selectors - child selectors to equalize
 */
window.syncRowHeights = function (containerSelector, selectors = []) {
  const container = document.querySelector(containerSelector);
  if (!container || !selectors.length) return;

  const cards = Array.from(container.children);
  if (!cards.length) return;

  // Reset heights first
  selectors.forEach((selector) => {
    cards.forEach((card) => {
      const el = card.querySelector(selector);
      if (el) el.style.height = "auto";
    });
  });
  
  if (window.innerWidth <= 767) return;
  const rows = {};
  cards.forEach((card) => {
    const top = card.getBoundingClientRect().top;
    rows[top] = rows[top] || [];
    rows[top].push(card);
  });

  Object.values(rows).forEach((rowCards) => {
    selectors.forEach((selector) => {
      let maxHeight = 0;

      rowCards.forEach((card) => {
        const el = card.querySelector(selector);
        if (el) maxHeight = Math.max(maxHeight, el.offsetHeight);
      });

      rowCards.forEach((card) => {
        const el = card.querySelector(selector);
        if (el) el.style.height = `${maxHeight}px`;
      });
    });
  });
};

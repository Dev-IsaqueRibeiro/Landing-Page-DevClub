// =============================
// NAVBAR SCROLL (OTIMIZADO)
// =============================
const navbar = document.getElementById("navbar");

let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  if (!navbar) return;

  if (currentScroll > 80) {
    navbar.classList.add("scrolled");
    navbar.classList.remove("transparent");
  } else {
    navbar.classList.remove("scrolled");
    navbar.classList.add("transparent");
  }

  lastScroll = currentScroll;
});

// =============================
// SMOOTH SCROLL COM OFFSET
// =============================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    // evita erro com "#"
    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);

    if (target) {
      e.preventDefault();

      const offset = 70; // altura da navbar
      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// =============================
// NAV LINK ACTIVE ON SCROLL
// =============================
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const activateMenu = () => {
  let scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach((link) => link.classList.remove("active"));
      const activeLink = document.querySelector(
        `.nav-link[href*="${sectionId}"]`,
      );
      if (activeLink) activeLink.classList.add("active");
    }
  });
};

window.addEventListener("scroll", activateMenu);

// =============================
// FAQ ACCORDION (ROBUSTO)
// =============================
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const button = item.querySelector(".faq-question");

  if (!button) return;

  button.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    faqItems.forEach((i) => i.classList.remove("active"));

    if (!isActive) {
      item.classList.add("active");
    }
  });
});

// =============================
// COUNTER ANIMATION
// =============================
const counters = document.querySelectorAll(".counter");

const animateCounter = (el) => {
  const parent = el.closest(".stat-card");
  if (!parent) return;

  const target = +parent.dataset.value || 0;
  const prefix = parent.dataset.prefix || "";
  const suffix = parent.dataset.suffix || "";

  let startTime = null;
  const duration = 2000;

  const step = (timestamp) => {
    if (!startTime) startTime = timestamp;

    const progress = Math.min((timestamp - startTime) / duration, 1);
    const value = Math.floor(progress * target);

    el.textContent = prefix + value.toLocaleString("pt-BR") + suffix;

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      el.textContent = prefix + target.toLocaleString("pt-BR") + suffix;
    }
  };

  requestAnimationFrame(step);
};

// OBSERVER COUNTER
const counterObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 },
);

counters.forEach((counter) => {
  counterObserver.observe(counter);
});

// =============================
// ANIMAÇÃO ON SCROLL
// =============================
const elementsToAnimate = document.querySelectorAll(
  ".why-card, .testimonial-card, .stat-card",
);

const animationObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 },
);

elementsToAnimate.forEach((el) => {
  animationObserver.observe(el);
});

// =============================
// ANO AUTOMÁTICO
// =============================
const yearEl = document.getElementById("year");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const elements = document.querySelectorAll(`
.hero .left,
.hero .salary-card,
.hero .image-card,
.why-card,
.stat-card,
.testimonial-card,
.cta-content,
.faq-item
`);

const directions = [
  "animate-left",
  "animate-right",
  "animate-bottom",
  "animate-top",
];

elements.forEach((el, index) => {
  el.classList.add("animate");

  // direção aleatória
  const randomDirection =
    directions[Math.floor(Math.random() * directions.length)];

  el.classList.add(randomDirection);

  // delay aleatório
  el.style.transitionDelay = `${Math.random() * 0.6}s`;
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

document.querySelectorAll(".animate").forEach((el) => {
  observer.observe(el);
});

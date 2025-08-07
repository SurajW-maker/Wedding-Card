// --- Navigation ---
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

// Toggle mobile menu
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Close menu on link click (for mobile)
document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      navMenu.classList.remove("show");
    }
  });
});

// --- Countdown ---
document.addEventListener("DOMContentLoaded", function () {
  const countdown = () => {
    const targetDate = new Date("2025-05-18T00:00:00").getTime();
    const now = new Date().getTime();
    const gap = targetDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);

    document.getElementById("cd-days").textContent = d.toString().padStart(2, "0");
    document.getElementById("cd-hours").textContent = h.toString().padStart(2, "0");
    document.getElementById("cd-minutes").textContent = m.toString().padStart(2, "0");
    document.getElementById("cd-seconds").textContent = s.toString().padStart(2, "0");
  };

  countdown(); // Initial run
  setInterval(countdown, 1000); // Update every second
});

// --- Swiper ---
document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".gallerySwiper", {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 1500,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

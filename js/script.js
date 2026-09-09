
// Small interactions for the static Curemos site.
// Keep this file dependency-free so the site can be uploaded directly to GoDaddy.
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", event => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
/* =========================
   SCROLL ANIMATIONS
========================= */

document.addEventListener("DOMContentLoaded", () => {

    /* Headings */

  /* =========================================
   SECTION HEADING REVEAL
========================================= */

const sectionHeadings = document.querySelectorAll(
    ".section-heading"
);

const headingObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("is-visible");

                headingObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.25
    }
);


sectionHeadings.forEach((section) => {
    headingObserver.observe(section);
});


    /* Other content */

    const revealElements = document.querySelectorAll(
        ".feature-card, .doctor-card, .download-grid,"
    );

    revealElements.forEach((element) => {
        element.classList.add("scroll-reveal");
    });


    /* Intersection Observer */

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );


    /* Observe headings */

    headings.forEach((heading) => {
        observer.observe(heading);
    });


    /* Observe content */

    revealElements.forEach((element) => {
        observer.observe(element);
    });

});
/* =========================================
   CARE / CURE SMOOTH CURSOR EFFECT
========================================= */

document.querySelectorAll(".step-card").forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const percentX = x / rect.width;
        const percentY = y / rect.height;

        const rotateY = (percentX - 0.5) * 4;
        const rotateX = (0.5 - percentY) * 4;

        const moveX = (percentX - 0.5) * 4;
        const moveY = (percentY - 0.5) * 4;

        card.style.setProperty("--rx", `${rotateX}deg`);
        card.style.setProperty("--ry", `${rotateY}deg`);

        card.style.setProperty("--tx", `${moveX}px`);
        card.style.setProperty("--ty", `${moveY}px`);

        card.style.setProperty(
            "--mx",
            `${percentX * 100}%`
        );

        card.style.setProperty(
            "--my",
            `${percentY * 100}%`
        );
    });


    card.addEventListener("mouseleave", () => {

        card.style.setProperty("--rx", "0deg");
        card.style.setProperty("--ry", "0deg");

        card.style.setProperty("--tx", "0px");
        card.style.setProperty("--ty", "0px");

        card.style.setProperty("--mx", "50%");
        card.style.setProperty("--my", "50%");
    });

});
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".site-header");

    if (header && header.dataset.shared !== "true") {
        fetch("components/header.html")
            .then(response => response.text())
            .then(data => {
                header.outerHTML = data;
            });
    }
});

/* ==========================
   VORTEX MAIN SCRIPT
========================== */

// Typing Animation
const typingElement = document.querySelector(".typing");

const typingTexts = {
    fa: [
        "طراح وب",
        "توسعه‌دهنده فرانت‌اند",
        "علاقه‌مند به هوش مصنوعی"
    ],
    en: [
        "Web Designer",
        "Frontend Developer",
        "AI Enthusiast"
    ]
};

let typingIndex = 0;
let charIndex = 0;
let deleting = false;
let typingTimer;

function startTyping() {
    if (!typingElement) return;

    clearTimeout(typingTimer);

    const lang = document.documentElement.lang === "en" ? "en" : "fa";
    const texts = typingTexts[lang];

    const currentText = texts[typingIndex];

    typingElement.textContent = currentText.substring(0, charIndex);

    let delay = deleting ? 45 : 100;

    if (!deleting && charIndex < currentText.length) {
        charIndex++;
    } else if (!deleting && charIndex === currentText.length) {
        deleting = true;
        delay = 1400;
    } else if (deleting && charIndex > 0) {
        charIndex--;
    } else {
        deleting = false;
        typingIndex = (typingIndex + 1) % texts.length;
        delay = 350;
    }

    typingTimer = setTimeout(startTyping, delay);
}

function restartTyping() {
    clearTimeout(typingTimer);
    typingIndex = 0;
    charIndex = 0;
    deleting = false;
    startTyping();
}

startTyping();

document.addEventListener("languageChanged", restartTyping);


// Page Loader
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    if (loader) {
        setTimeout(() => {
            loader.classList.add("hide");
        }, 500);
    }
});


// Statistics Counter
const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const original = counter.textContent.trim();
        const target = parseInt(original.replace(/[^0-9]/g, ""), 10);

        if (isNaN(target)) return;

        const prefix = original.startsWith("+") ? "+" : "";
        const duration = 1500;
        const startTime = performance.now();

        function updateCounter(now) {
            const progress = Math.min((now - startTime) / duration, 1);
            const value = Math.floor(progress * target);

            counter.textContent = prefix + value.toLocaleString(
                document.documentElement.lang === "fa" ? "fa-IR" : "en-US"
            );

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = original;
            }
        }

        requestAnimationFrame(updateCounter);
        observer.unobserve(counter);
    });
}, {
    threshold: 0.5
});

counters.forEach(counter => counterObserver.observe(counter));


// Back To Top
const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {
        topBtn.classList.toggle("show", window.scrollY > 300);
    });

    topBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

}


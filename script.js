
/* =================================
   VORTEX - LANGUAGE SYSTEM
================================= */

const languageButton = document.getElementById("language");

const translations = {
    fa: {
        greeting: "درود 👋",
        heroTitle: 'من <span>علی اکبر</span> هستم',
        heroDescription: "طراح سایت و علاقه‌مند به تکنولوژی، طراحی مدرن و هوش مصنوعی. هدف من ساخت وب‌سایت‌هایی سریع، زیبا و حرفه‌ای است.",
        resume: "دانلود رزومه",
        projects: "دیدن نمونه‌کار",

        aboutTitle: "درباره من",
        aboutText: 'درود، من علی اکبر با برند شخصی <strong>VORTEX</strong> هستم. در زمینه طراحی وب فعالیت می‌کنم و به خلق رابط‌های کاربری مدرن، سریع و مینیمال علاقه دارم. در کنار برنامه‌نویسی، به هوش مصنوعی و دنیای خودرو، مخصوصاً BMW، علاقه زیادی دارم.',

        skillsTitle: "مهارت‌ها",

        stats: [
            "پروژه انجام شده",
            "خط کد نوشته شده",
            "مهارت تخصصی",
            "ساعت یادگیری"
        ],

        servicesTitle: "خدمات من",

        services: [
            ["طراحی سایت", "طراحی وب‌سایت‌های مدرن، سریع و ریسپانسیو با HTML و CSS"],
            ["طراحی رابط کاربری", "ساخت رابط‌های کاربری زیبا و حرفه‌ای با تمرکز روی تجربه کاربر"],
            ["هوش مصنوعی", "استفاده از ابزارهای هوش مصنوعی برای افزایش سرعت و کیفیت کار"],
            ["طراحی ریسپانسیو", "نمایش صحیح سایت روی موبایل، تبلت و کامپیوتر"]
        ],

        contactTitle: "تماس با من",
        contactText: "برای همکاری، طراحی سایت یا مشاوره با من در ارتباط باشید.",

        footer: ["خانه", "پروژه‌ها", "تماس"]
    },

    en: {
        greeting: "Hello 👋",
        heroTitle: 'I am <span>Ali Akbar</span>',
        heroDescription: "A web designer passionate about technology, modern design, and artificial intelligence. My goal is to create fast, beautiful, and professional websites.",
        resume: "Download Resume",
        projects: "View My Projects",

        aboutTitle: "About Me",
        aboutText: 'Hello, I am Ali Akbar, known by my personal brand <strong>VORTEX</strong>. I work in web design and enjoy creating modern, fast, and minimal user interfaces. Besides programming, I am passionate about artificial intelligence and the automotive world, especially BMW.',

        skillsTitle: "My Skills",

        stats: [
            "Projects Completed",
            "Lines of Code Written",
            "Professional Skills",
            "Hours of Learning"
        ],

        servicesTitle: "My Services",

        services: [
            ["Web Design", "Modern, fast, and responsive websites built with HTML and CSS."],
            ["UI Design", "Creating beautiful and professional user interfaces focused on user experience."],
            ["Artificial Intelligence", "Using AI tools to improve workflow speed and quality."],
            ["Responsive Design", "Websites that work perfectly on mobile, tablet, and desktop."]
        ],

        contactTitle: "Contact Me",
        contactText: "Feel free to contact me for collaboration, web design, or consultation.",

        footer: ["Home", "Projects", "Contact"]
    }
};


/* =================================
   APPLY LANGUAGE
================================= */

function setLanguage(lang) {

    const t = translations[lang];

    if (!t) return;

    const english = lang === "en";

    document.documentElement.lang = lang;
    document.documentElement.dir = english ? "ltr" : "rtl";

    if (languageButton) {
        languageButton.textContent = english ? "FA" : "EN";
    }

    // Hero
    const hero = document.querySelector(".hero-text");

    if (hero) {
        hero.querySelector("h3").textContent = t.greeting;
        hero.querySelector("h1").innerHTML = t.heroTitle;
        hero.querySelector("p").textContent = t.heroDescription;
    }

    // Buttons
    const resume = document.querySelector(".buttons .btn");
    const projects = document.querySelector(".projects-btn span");

    if (resume) resume.textContent = t.resume;
    if (projects) projects.textContent = t.projects;

    // About
    const about = document.querySelector(".about");

    if (about) {
        about.querySelector("h2").textContent = t.aboutTitle;
        about.querySelector("p").innerHTML = t.aboutText;
    }

    // Skills
    const skills = document.querySelector(".skills");

    if (skills) {
        skills.querySelector("h2").textContent = t.skillsTitle;
    }

    // Statistics
    document.querySelectorAll(".stats .stat-box p").forEach((item, i) => {
        if (t.stats[i]) item.textContent = t.stats[i];
    });

    // Services
    const services = document.querySelector(".services");

    if (services) {
        services.querySelector("h2").textContent = t.servicesTitle;

        services.querySelectorAll(".service-card").forEach((card, i) => {
            if (!t.services[i]) return;

            card.querySelector("h3").textContent = t.services[i][0];
            card.querySelector("p").textContent = t.services[i][1];
        });
    }

    // Contact
    const contact = document.querySelector(".contact");

    if (contact) {
        const title = contact.querySelector(":scope > h2");
        const paragraph = contact.querySelector(":scope > p");

        if (title) title.textContent = t.contactTitle;
        if (paragraph) paragraph.textContent = t.contactText;
    }

    // Footer
    document.querySelectorAll(".footer-links a").forEach((link, i) => {
        if (t.footer[i]) link.textContent = t.footer[i];
    });

    // Meta description
    const meta = document.querySelector('meta[name="description"]');

    if (meta) {
        meta.content = english
            ? "Ali Akbar VORTEX | Web Developer - Modern Web Design, HTML, CSS and AI."
            : "Ali Akbar VORTEX | Web Developer - طراحی سایت مدرن، HTML، CSS و هوش مصنوعی";
    }

    localStorage.setItem("vortex-language", lang);

    document.dispatchEvent(new Event("languageChanged"));
}


/* =================================
   LANGUAGE BUTTON
================================= */

if (languageButton) {
    languageButton.addEventListener("click", () => {
        const current = document.documentElement.lang;
        setLanguage(current === "fa" ? "en" : "fa");
    });
}


/* =================================
   LOAD SAVED LANGUAGE
================================= */

const savedLanguage = localStorage.getItem("vortex-language") || "fa";

setLanguage(savedLanguage);

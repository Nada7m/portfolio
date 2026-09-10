/* ==========================================================================
   TRANSLATIONS
   Every visible string lives here, keyed by the data-i18n id used in the
   markup. Add a language by adding a new top-level key.
   ========================================================================== */
const translations = {
  ar: {
    page_title: "ملف أعمالي",
    nav_mark: "حالم متوهج",
    nav_about: "عني",
    nav_interests: "اهتماماتي",
    nav_experience: "الخبرة",
    nav_skills: "المهارات",
    nav_highlights: "مختارات",
    nav_work: "الأعمال",
    nav_contact: "التواصل",

    hero_eyebrow: "نــدى محــــمد",
    hero_title: "ملــــــف أعمـــــــــــالـــي",

    about_title_1: "نبذة",
    about_title_2: "عني",
    about_lead: "أدرس النظم من الداخل: كيف تتحرّك المعلومة، وأين تتعثّر، وكيف تصبح تجربة واضحة لشخص يستخدمها فعلاً.",
    about_p1: "خريجة نظم معلومات إدارية من جامعة طيبة. أعمل في المساحة التي يلتقي فيها التحليل بالتصميم — حيث تتحوّل العمليات المعقّدة إلى واجهات وقرارات واضحة.",
    about_p2: "أفكّر بشكل تحليلي، وأصمّم بشكل إنساني، وأنظر للمشكلة كنظام كامل قبل أن أنظر إليها كشاشة.",
    about_edu_heading: "التعليم",
    about_edu_major: "نظم المعلومات الإدارية",
    about_edu_gpa: "المعدل 4.92 / 5",
    about_edu_year: "سنة التخرج 2026",

    interests_tag: "03 — اهتماماتي",
    interests_title: "أين أعمل تحديداً",
    card_ux_title: "تجربة المستخدم",
    card_ux_body: "فهم المستخدم قبل الحل — بحث، تدفقات، وواجهات تُبنى على سبب.",
    card_ba_title: "تحليل الأعمال",
    card_ba_body: "قراءة العمليات، تحديد الفجوات، وتحويل الغموض إلى متطلبات واضحة.",
    card_dx_title: "التحول الرقمي",
    card_dx_body: "ربط الأنظمة والأشخاص والعمليات ضمن تجربة رقمية واحدة متماسكة.",
    card_cdm_title: "تصميم حر و تسويق رقمي",
    card_cdm_body: "تصميم بصري حر وصناعة محتوى وتسويق رقمي يجمع بين الفكرة والهوية والتواصل.",

    exp_tag: "04 — خبراتي",
    placeholder_date: "[ التاريخ ]",
    exp_vol_title: "خبرة تطوعية",
    exp_vol_body: "[ نص قابل للتعديل ]",
    exp_train_title: "خبرة تدريبية",
    exp_train_body: "[ نص قابل للتعديل ]",
    exp_job_title: "خبرة وظيفية",
    exp_job_body: "[ ستُضاف عند توفرها ]",
    exp_job_status: "قريبًا",

    skills_tag: "05 — المهارات والأدوات",
    skills_ba: "تحليل الأعمال",
    skills_ux: "تجربة المستخدم",
    skills_data: "البيانات والأنظمة",
    skills_tech: "تقني",
    skills_design: "تصميم",

    highlights_tag: "06 — مختارات",
    highlights_note: "لحظات وفعاليات وأنشطة شاركت فيها — ستُضاف تباعاً.",
    highlight_placeholder_title: "[ اسم الفعالية ]",
    highlight_placeholder_date: "[ التاريخ ]",
    highlight_placeholder_location: "[ الموقع ]",
    highlight_placeholder_note: "[ ملاحظة قصيرة ]",

    work_tag: "07 — الأعمال المختارة",
    rafd_cat: "تحليل الأعمال × تجربة المستخدم",
    rafd_desc: "إعادة تصميم مسار البرامج والمشاريع في نظام ERP لمنظمة غير ربحية — من تشخيص المشكلة إلى واجهة أوضح.",
    view_case_study: "عرض دراسة الحالة",
    placeholder_image: "[ صورة المشروع ]",
    placeholder_cat: "قيد الإضافة",
    placeholder_title: "مشروع قادم",

    edu_uni: "جامعة طيبة",

    contact_title: "لنتواصل.",
    contact_email: "[ البريد الإلكتروني ]",
    contact_linkedin: "[ LinkedIn ]",
    contact_cv: "[ السيرة الذاتية ]",
    back_link: "→ العودة",
    field_placeholder: "سيتم إضافة أبرز المشاريع في هذا المجال هنا.",
    footer_mark: "حالم متوهج"
  },

  en: {
    page_title: "My Portfolio",
    nav_mark: "Glowing Dreamer",
    nav_about: "About",
    nav_interests: "Interests",
    nav_experience: "Experience",
    nav_skills: "Skills",
    nav_highlights: "Highlights",
    nav_work: "Work",
    nav_contact: "Contact",

    hero_eyebrow: "Nada Mohammed Hassan Al-Faifi",
    hero_title: "MY PORTFOLIO",

    about_title_1: "About",
    about_title_2: "Me",
    about_lead: "I study systems from the inside: how information moves, where it stalls, and how it becomes an experience someone can actually use.",
    about_p1: "A Management Information Systems graduate from Taibah University. I work where analysis meets design — turning complex processes into clear interfaces and clear decisions.",
    about_p2: "I think analytically, design with people in mind, and look at a problem as a whole system before I look at it as a screen.",
    about_edu_heading: "Education",
    about_edu_major: "Management Information Systems",
    about_edu_gpa: "GPA 4.92 / 5",
    about_edu_year: "Graduation Year 2026",

    interests_tag: "03 — My Interests",
    interests_title: "Where exactly I work",
    card_ux_title: "User Experience",
    card_ux_body: "Understanding the user before the solution — research, flows, and interfaces built on a reason.",
    card_ba_title: "Business Analysis",
    card_ba_body: "Reading processes, spotting gaps, and turning ambiguity into clear requirements.",
    card_dx_title: "Digital Transformation",
    card_dx_body: "Connecting systems, people and processes into one coherent digital experience.",
    card_cdm_title: "Creative Design & Digital Marketing",
    card_cdm_body: "Creative visual design, content creation, and digital marketing that connect ideas, identity, and communication.",

    exp_tag: "04 — Experience",
    placeholder_date: "[ date ]",
    exp_vol_title: "Volunteer Experience",
    exp_vol_body: "[ editable text ]",
    exp_train_title: "Training Experience",
    exp_train_body: "[ editable text ]",
    exp_job_title: "Job Experience",
    exp_job_body: "[ to be added once available ]",
    exp_job_status: "Coming soon",

    skills_tag: "05 — Skills & Tools",
    skills_ba: "Business Analysis",
    skills_ux: "UX",
    skills_data: "Data & Systems",
    skills_tech: "Technical",
    skills_design: "Design",

    highlights_tag: "06 — Highlights",
    highlights_note: "Moments, events and activities I've taken part in — more to be added over time.",
    highlight_placeholder_title: "[ event name ]",
    highlight_placeholder_date: "[ date ]",
    highlight_placeholder_location: "[ location ]",
    highlight_placeholder_note: "[ short note ]",

    work_tag: "07 — Selected Work",
    rafd_cat: "Business Analysis × UX Case Study",
    rafd_desc: "Redesigning the Programs & Projects flow of an ERP system for a nonprofit — from diagnosing the problem to a clearer interface.",
    view_case_study: "View case study",
    placeholder_image: "[ project image ]",
    placeholder_cat: "Coming soon",
    placeholder_title: "Upcoming project",

    edu_uni: "Taibah University",

    contact_title: "LET'S CONNECT.",
    contact_email: "[ email ]",
    contact_linkedin: "[ LinkedIn ]",
    contact_cv: "[ CV ]",
    back_link: "← Back",
    field_placeholder: "Selected projects in this field will be added here.",
    footer_mark: "حالم متوهج"
  }
};

/* ==========================================================================
   LANGUAGE SWITCHING
   ========================================================================== */
function applyLanguage(lang) {
  const dict = translations[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  const switchBtn = document.getElementById('langSwitch');
  switchBtn.querySelector('.lang-ar').toggleAttribute('data-active', lang === 'ar');
  switchBtn.querySelector('.lang-en').toggleAttribute('data-active', lang === 'en');

  localStorage.setItem('portfolio-lang', lang);
}

document.getElementById('langSwitch').addEventListener('click', () => {
  const next = document.documentElement.lang === 'ar' ? 'en' : 'ar';
  applyLanguage(next);
});

// Restore a previously chosen language, default to Arabic.
applyLanguage(localStorage.getItem('portfolio-lang') || 'ar');

/* ==========================================================================
   MOBILE NAV
   ========================================================================== */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  })
);

/* ==========================================================================
   SCROLL REVEAL
   ========================================================================== */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.chapter:not(.hero)').forEach(section => revealObserver.observe(section));

/* ==========================================================================
   PAGE TRANSITIONS
   A quick, restrained fade between the homepage and each interest's
   dedicated page — no loading animation, just a soft cross-fade.
   ========================================================================== */
document.body.classList.add('page-fade');

window.addEventListener('DOMContentLoaded', () => {
  requestAnimationFrame(() => document.body.classList.add('page-ready'));
});

document.querySelectorAll('.interest-card[href]').forEach(link => {
  link.addEventListener('click', (event) => {
    const href = link.getAttribute('href');
    if (!href || event.metaKey || event.ctrlKey) return;
    event.preventDefault();
    document.body.classList.remove('page-ready');
    document.body.classList.add('page-leaving');
    setTimeout(() => { window.location.href = href; }, 180);
  });
});

document.querySelectorAll('.back-link[href]').forEach(link => {
  link.addEventListener('click', (event) => {
    const href = link.getAttribute('href');
    if (!href || event.metaKey || event.ctrlKey) return;
    event.preventDefault();
    document.body.classList.remove('page-ready');
    document.body.classList.add('page-leaving');
    setTimeout(() => { window.location.href = href; }, 180);
  });
});

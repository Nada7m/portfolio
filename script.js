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

    ba_eyebrow: "مجال العمل",
    ba_intro: "أفهم ما يحدث وأحلّل ما يمكن تحسينه، أستمع لمتطلبات العميل وأحوّل احتياجاته إلى متطلبات واضحة وحلول أكثر ملاءمة.",
    ba_tools_tag: "الأدوات",
    ba_tools_title: "الأدوات",
    ba_tools_note: "الأدوات والبرامج التي أستخدمها فعليًا.",
    ba_skills_tag: "المهارات",
    ba_skills_title: "المهارات",
    ba_skills_note: "القدرات التحليلية التي أعمل بها.",
    ba_skill_1: "تحليل عمليات الأعمال",
    ba_skill_2: "جمع وتحليل المتطلبات",
    ba_skill_3: "تحليل وتوثيق سير العمل",
    ba_skill_4: "تحليل الفجوات",
    ba_skill_5: "تخطيط تدفق العمليات",
    ba_skill_6: "تحليل الوضع الحالي والمستهدف",
    ba_skill_7: "تحديد المشكلات",
    ba_skill_8: "اقتراح الحلول والتحسينات",
    ba_projects_tag: "المشاريع",
    ba_projects_title: "المشاريع",
    ba_projects_note: "دراسات حالة كاملة — ستُضاف هنا عند توفرها.",
    ba_project1_title: "تحسين تجربة نظام رافد ERP",
    ba_project1_desc: "تحليل تجربة نظام رافد وتحديد التحديات والفجوات في سير العمل، ثم تطوير مقترحات ونماذج لتحسين وضوح الإجراءات وتجربة الاستخدام.",
    ba_project2_title: "نظام دعم قرار لتأخر الشحنات — دراسة حالة أرامكس",
    ba_project2_desc: "مشروع تحليلي أكاديمي لدراسة تأخر الشحنات باستخدام عدة أساليب تحليلية وتحويل النتائج إلى دعم لاتخاذ القرار.",
    ba_view_project: "عرض المشروع",
    ba_mini_tag: "أعمال مصغرة",
    ba_mini_title: "أعمال مصغرة",
    ba_mini_note: "مخططات وتحليلات ووثائق صغيرة لا تحتاج دراسة حالة كاملة.",
    ba_mini1_title: "تحليل العمليات وسير العمل — نظام رافد",
    ba_view_details: "عرض التفاصيل",
    ba_mini1_overview: "[ نبذة قابلة للتعديل تشرح ما تم تحليله ]",
    ba_mini1_objective: "[ الهدف من التحليل — قابل للتعديل ]",
    ba_modal_overview_label: "نبذة",
    ba_modal_objective_label: "الهدف",
    ba_modal_areas_label: "محاور التحليل",
    ba_modal_area_placeholder: "[ محور تحليل قابل للإضافة ]",
    ba_modal_findings_label: "أبرز الملاحظات",
    ba_modal_findings_placeholder: "[ ستُضاف أبرز الملاحظات هنا عند توفرها ]",
    ba_modal_deliverables_label: "المخرجات",
    ba_modal_deliverable_placeholder: "[ مخرج ]",
    ba_modal_gallery_label: "معرض الصور",
    ba_certs_tag: "الشهادات",
    ba_certs_title: "الشهادات",
    ba_certs_note: "شهادات ودورات متعلقة بتحليل الأعمال — ستُضاف عند توفرها.",
    ba_cert_name_placeholder: "[ اسم الشهادة ]",
    ba_cert_issuer_placeholder: "[ الجهة المانحة ]",
    ba_cert_date_placeholder: "[ السنة ]",

    ux_eyebrow: "مجال العمل",
    ux_intro: "أبدأ بالمستخدم، أفهم احتياجه، وأحوّل الملاحظات والمشكلات إلى تجارب أبسط وأكثر وضوحًا.",
    ux_tools_tag: "الأدوات",
    ux_tools_title: "الأدوات",
    ux_tools_note: "أدوات التصميم والبحث التي أستخدمها فعليًا.",
    ux_skills_tag: "المهارات",
    ux_skills_title: "المهارات",
    ux_skills_note: "قدرات البحث والتصميم التي أعمل بها.",
    ux_skill_1: "تدفق المستخدم",
    ux_skill_2: "هيكلة المعلومات",
    ux_skill_3: "تصميم الإطارات الأولية",
    ux_skill_4: "النماذج التفاعلية",
    ux_skill_5: "تحليل قابلية الاستخدام",
    ux_skill_6: "تحديد مشكلات تجربة المستخدم",
    ux_skill_7: "تصميم واجهات المستخدم",
    ux_skill_8: "توثيق تجربة المستخدم",
    ux_projects_tag: "المشاريع",
    ux_projects_title: "المشاريع",
    ux_projects_note: "دراسات حالة كاملة في تجربة المستخدم — ستُضاف هنا عند توفرها.",
    ux_project_tag_placeholder: "[ وسم ]",
    ux_project_title_placeholder: "[ عنوان المشروع ]",
    ux_project_desc_placeholder: "[ وصف قصير للمشروع ]",
    ux_project_year_placeholder: "[ السنة ]",
    ux_project_link_pending: "قريبًا — لا يوجد رابط بعد",
    ux_mini_tag: "أعمال مصغرة",
    ux_mini_title: "أعمال مصغرة",
    ux_mini_note: "نماذج أولية، تدفقات مستخدم، ومخرجات بحث لا تحتاج دراسة حالة كاملة.",
    ux_mini_title_placeholder: "[ عنوان العمل ]",
    ux_mini_note_placeholder: "[ ملاحظة قصيرة ]",
    ux_certs_tag: "الشهادات",
    ux_certs_title: "الشهادات",
    ux_certs_note: "شهادات ودورات متعلقة بتجربة المستخدم — ستُضاف عند توفرها.",
    ux_cert_name_placeholder: "[ اسم الشهادة ]",
    ux_cert_issuer_placeholder: "[ الجهة المانحة ]",
    ux_cert_date_placeholder: "[ السنة ]",

    cdm_eyebrow: "مجال العمل",
    cdm_intro: "أحوّل الأفكار إلى محتوى بصري له هوية؛ يجذب الانتباه، يوصل الرسالة، ويترك أثرًا.",
    cdm_tools_tag: "الأدوات",
    cdm_tools_title: "الأدوات",
    cdm_tools_note: "أدوات التصميم والتسويق التي أستخدمها فعليًا.",
    cdm_skills_tag: "المهارات",
    cdm_skills_title: "المهارات",
    cdm_skills_note: "قدرات التصميم والتسويق التي أعمل بها.",
    cdm_skill_1: "التصميم البصري",
    cdm_skill_2: "صناعة المحتوى",
    cdm_skill_3: "تصميم محتوى منصات التواصل",
    cdm_skill_4: "تصميم البوسترات",
    cdm_skill_5: "المحتوى التسويقي",
    cdm_skill_6: "تطوير الأفكار الإبداعية",
    cdm_projects_tag: "المشاريع",
    cdm_projects_title: "المشاريع",
    cdm_projects_note: "حملات ومشاريع تصميم كاملة — ستُضاف هنا عند توفرها.",
    cdm_project_tag_placeholder: "[ وسم ]",
    cdm_project_title_placeholder: "[ عنوان المشروع ]",
    cdm_project_desc_placeholder: "[ وصف قصير للمشروع ]",
    cdm_project_year_placeholder: "[ السنة ]",
    cdm_project_link_pending: "قريبًا — لا يوجد رابط بعد",
    cdm_mini_tag: "أعمال مصغرة",
    cdm_mini_title: "أعمال مصغرة",
    cdm_mini_note: "تصاميم بصرية، محتوى تواصل، وملصقات لا تحتاج دراسة حالة كاملة.",
    cdm_mini_title_placeholder: "[ عنوان العمل ]",
    cdm_mini_note_placeholder: "[ ملاحظة قصيرة ]",
    cdm_certs_tag: "الشهادات",
    cdm_certs_title: "الشهادات",
    cdm_certs_note: "شهادات ودورات متعلقة بالتصميم والتسويق الرقمي — ستُضاف عند توفرها.",
    cdm_cert_name_placeholder: "[ اسم الشهادة ]",
    cdm_cert_issuer_placeholder: "[ الجهة المانحة ]",
    cdm_cert_date_placeholder: "[ السنة ]",

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

    ba_eyebrow: "Field of Work",
    ba_intro: "I understand what's happening and identify what can be improved, listen to the client's needs, and translate them into clear requirements and more suitable solutions.",
    ba_tools_tag: "Tools",
    ba_tools_title: "Tools",
    ba_tools_note: "The tools and software I actually use.",
    ba_skills_tag: "Skills",
    ba_skills_title: "Skills",
    ba_skills_note: "The analytical capabilities I bring.",
    ba_skill_1: "Business Process Analysis",
    ba_skill_2: "Requirements Gathering & Analysis",
    ba_skill_3: "Workflow Analysis & Documentation",
    ba_skill_4: "Gap Analysis",
    ba_skill_5: "Process Flow Mapping",
    ba_skill_6: "As-Is / To-Be Analysis",
    ba_skill_7: "Problem Identification",
    ba_skill_8: "Solution Recommendations",
    ba_projects_tag: "Projects",
    ba_projects_title: "Projects",
    ba_projects_note: "Full case studies — will be added here once ready.",
    ba_project1_title: "Rafd ERP UX Improvement",
    ba_project1_desc: "Analysis of the Rafd ERP experience and its workflow challenges, followed by improvement proposals and interface concepts to create clearer and more usable processes.",
    ba_project2_title: "Shipment Delay Decision Support System — Aramex Case Study",
    ba_project2_desc: "An academic analytics project examining shipment delays through multiple analytical approaches and translating the findings into decision support.",
    ba_view_project: "View Project",
    ba_mini_tag: "Mini Work",
    ba_mini_title: "Mini Work",
    ba_mini_note: "Small diagrams, analyses, and documents that don't need a full case study.",
    ba_mini1_title: "Process & Workflow Analysis — Rafd ERP",
    ba_view_details: "View Details",
    ba_mini1_overview: "[ Editable overview explaining what was analyzed ]",
    ba_mini1_objective: "[ The objective of the analysis — editable ]",
    ba_modal_overview_label: "Overview",
    ba_modal_objective_label: "Objective",
    ba_modal_areas_label: "Analysis Areas",
    ba_modal_area_placeholder: "[ Analysis area to be added ]",
    ba_modal_findings_label: "Key Findings",
    ba_modal_findings_placeholder: "[ Key findings will be added here once available ]",
    ba_modal_deliverables_label: "Deliverables",
    ba_modal_deliverable_placeholder: "[ Deliverable ]",
    ba_modal_gallery_label: "Image Gallery",
    ba_certs_tag: "Certifications",
    ba_certs_title: "Certifications",
    ba_certs_note: "Certifications and courses related to Business Analysis — added once available.",
    ba_cert_name_placeholder: "[ Certificate name ]",
    ba_cert_issuer_placeholder: "[ Issuer ]",
    ba_cert_date_placeholder: "[ Year ]",

    ux_eyebrow: "Field of Work",
    ux_intro: "I start with the user, understand their needs, and turn insights and problems into simpler, clearer experiences.",
    ux_tools_tag: "Tools",
    ux_tools_title: "Tools",
    ux_tools_note: "The design and research tools I actually use.",
    ux_skills_tag: "Skills",
    ux_skills_title: "Skills",
    ux_skills_note: "The research and design capabilities I bring.",
    ux_skill_1: "User Flow",
    ux_skill_2: "Information Architecture",
    ux_skill_3: "Wireframing",
    ux_skill_4: "Prototyping",
    ux_skill_5: "Usability Analysis",
    ux_skill_6: "UX Problem Identification",
    ux_skill_7: "UI Design",
    ux_skill_8: "UX Documentation",
    ux_projects_tag: "Projects",
    ux_projects_title: "Projects",
    ux_projects_note: "Full UX case studies — will be added here once ready.",
    ux_project_tag_placeholder: "[ tag ]",
    ux_project_title_placeholder: "[ Project title ]",
    ux_project_desc_placeholder: "[ Short project description ]",
    ux_project_year_placeholder: "[ Year ]",
    ux_project_link_pending: "Coming soon — no link yet",
    ux_mini_tag: "Mini Work",
    ux_mini_title: "Mini Work",
    ux_mini_note: "Wireframes, user flows, and research outputs that don't need a full case study.",
    ux_mini_title_placeholder: "[ Item title ]",
    ux_mini_note_placeholder: "[ Short note ]",
    ux_certs_tag: "Certifications",
    ux_certs_title: "Certifications",
    ux_certs_note: "Certifications and courses related to User Experience — added once available.",
    ux_cert_name_placeholder: "[ Certificate name ]",
    ux_cert_issuer_placeholder: "[ Issuer ]",
    ux_cert_date_placeholder: "[ Year ]",

    cdm_eyebrow: "Field of Work",
    cdm_intro: "I turn ideas into visual content with identity—designed to capture attention, communicate clearly, and leave an impression.",
    cdm_tools_tag: "Tools",
    cdm_tools_title: "Tools",
    cdm_tools_note: "The design and marketing tools I actually use.",
    cdm_skills_tag: "Skills",
    cdm_skills_title: "Skills",
    cdm_skills_note: "The design and marketing capabilities I bring.",
    cdm_skill_1: "Visual Design",
    cdm_skill_2: "Content Creation",
    cdm_skill_3: "Social Media Content Design",
    cdm_skill_4: "Poster Design",
    cdm_skill_5: "Marketing Content",
    cdm_skill_6: "Creative Concept Development",
    cdm_projects_tag: "Projects",
    cdm_projects_title: "Projects",
    cdm_projects_note: "Full design/marketing campaigns — will be added here once ready.",
    cdm_project_tag_placeholder: "[ tag ]",
    cdm_project_title_placeholder: "[ Project title ]",
    cdm_project_desc_placeholder: "[ Short project description ]",
    cdm_project_year_placeholder: "[ Year ]",
    cdm_project_link_pending: "Coming soon — no link yet",
    cdm_mini_tag: "Mini Work",
    cdm_mini_title: "Mini Work",
    cdm_mini_note: "Visual designs, social content, and posters that don't need a full case study.",
    cdm_mini_title_placeholder: "[ Item title ]",
    cdm_mini_note_placeholder: "[ Short note ]",
    cdm_certs_tag: "Certifications",
    cdm_certs_title: "Certifications",
    cdm_certs_note: "Certifications and courses related to design and digital marketing — added once available.",
    cdm_cert_name_placeholder: "[ Certificate name ]",
    cdm_cert_issuer_placeholder: "[ Issuer ]",
    cdm_cert_date_placeholder: "[ Year ]",

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

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
    nav_highlights: "مختارات",
    nav_work: "الأعمال",
    nav_contact: "التواصل",

    hero_eyebrow: "نــدى محــــمد",
    hero_title: "ملــــــف أعمـــــــــــالـــي",

    about_title_1: "نبذة",
    about_title_2: "عني",
    about_lead: "أدرس النظم من الداخل: كيف تظهر المعلومة بأفضل صورة، وأين تكمن الصعوبات، وكيف تصبح التجربة واضحة لشخص يستخدمها.",
    about_p1: "متخصصة في نظم المعلومات أركز على تحليل الأعمال والنظم وتجربة المستخدم UX، بخلفية تجمع بين الجوانب التقنية والإدارية، تنوعت مشاريعي بين تحليل وتصميم الأنظمة، وتحسين تجربة المستخدم، وتحليل البيانات ودعم القرار، مع خبرة في قيادة فرق المشاريع والعمل عبر مراحل تطوير الأنظمة، ومهارات في التواصل والتنسيق والتكيف السريع مع الأدوات والتحديات الجديدة.",
    about_p2: "أحب الأفكار التي تبدأ بفضول، تكبر بسؤال، وتنتهي بحل يصنع فرقًا.",
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
    exp_vol_date: "أغسطس 2025 — سبتمبر 2026",
    exp_vol_body: "مصممة وكاتبة محتوى في عدة أندية سابقة، أبرزها",
    exp_vol_clubs: "(نادي رواد الصناعة، نادي الابتكار والريادة، نادي رؤية، نادي كلية إدارة الأعمال)",
    exp_train_title: "خبرة تدريبية",
    exp_train_date: "يونيو 2026 — أغسطس 2026",
    exp_train_body: "جمعية إنماء الأسرية — تدريب تعاوني كمحللة نظم",
    exp_job_title: "خبرة وظيفية",
    exp_job_body: "[ ستُضاف عند توفرها ]",
    exp_job_status: "قريبًا",

    highlights_tag: "05 — مختارات",
    highlights_note: "لحظات وفعاليات وأنشطة شاركت فيها.",
    highlight_1_date: "أغسطس 2026",
    highlight_1_note: "المشاركة في برمجان المدينة المنورة ضمن مسار إثراء تجربة الزائر، والترشح للمراحل النهائية.",
    highlight_2_date: "مايو 2026",
    highlight_2_note: "المركز الثالث لمشاريع التخرج في تخصص نظم المعلومات الإدارية بجامعة طيبة، عن مشروع \"نورين\".",
    highlight_3_date: "أبريل 2026",
    highlight_3_note: "الاحتفال ضمن الخريجات المتميزات الحاصلات على مرتبة الشرف الأولى في تخصص نظم المعلومات الإدارية بجامعة طيبة.",

    work_tag: "06 — مشاريع مختارة",
    madar_title: "مدار",
    madar_desc: "منصة ذكية تربط الزائر بالمدينة المنورة وتحوّل اكتشاف أماكنها وتجاربها إلى رحلة سهلة وتفاعلية عن طريق خارطة تفاعلية، قصص المكان، مسارات مقترحة ومتناسبة للزائر، ومرشد محلي يجعل الرحلة الاستكشافية أكثر إمتاعًا.",
    noreen_title: "نورين",
    noreen_desc: "نورين منصة تعليمية استثمارية ذكية تربط المستفيدين بالفرصة المناسبة عبر تكامل الجهات الاستثمارية والمكاتب الاستشارية، لتبسيط رحلة القبول والدراسة من البداية حتى تحقيق المسار الأكاديمي والمهني المرغوب.",
    rafd_title: "رافد",
    rafd_desc: "حالة دراسية تهدف إلى إعادة تصميم تجربة المستخدم لنظام رافد من خلال تحليل سير العمل الحالي، وتحديد المشكلات التشغيلية، ثم تحويل نتائج التحليل إلى حلول تصميمية تعتمد على مبادئ UX لتحسين وضوح العمليات وسهولة استخدامها.",
    explore_project: "استكشف المشروع ↗",
    view_case_study: "عرض دراسة الحالة",
    placeholder_image: "[ صورة المشروع ]",
    placeholder_cat: "قيد الإضافة",
    placeholder_title: "مشروع قادم",

    edu_uni: "جامعة طيبة",

    contact_title: "لنتواصل.",
    contact_email: "البريد الإلكتروني",
    contact_linkedin: "LinkedIn",
    contact_cv: "السيرة الذاتية",
    cv_modal_title: "اختر نسخة السيرة الذاتية",
    wip_line_1: "الملف قيد التطوير...",
    wip_line_2: "من فضلك تحلّى بالصبر! 🙂",
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
    ba_projects_tag: "المشاريع والأعمال",
    ba_projects_title: "المشاريع والأعمال",
    ba_projects_note: "دراسات حالة كاملة في تحليل الأعمال وتجربة المستخدم.",
    ba_view_details: "عرض التفاصيل",
    ba_open_project: "فتح المشروع ↗",
    ba_modal_overview_label: "نبذة",
    ba_modal_axes_label: "محاور العمل",
    ba_modal_analysis_axes_label: "محاور التحليل",
    ba_modal_method_label: "المنهجية والأدوات",
    ba_modal_methods_label: "المنهجيات والأدوات",
    ba_modal_results_label: "النتائج",
    ba_modal_gallery_label: "معرض الصور",

    /* --- Project 1: Rafed ERP UX redesign --- */
    ba_project1_title: "إعادة تصميم تجربة المستخدم لنظام رافد",
    ba_project1_desc: "دراسة حالة لإعادة تصميم تجربة المستخدم في إدارتي البرامج والمشاريع بنظام رافد، بدأت بتحليل النظام وسير العمل الحالي وتحديد تحديات الاستخدام، ثم تحويل النتائج إلى حلول تصميمية تهدف إلى توضيح دورة العمل، تقليل التعقيد، وتسهيل الوصول إلى الإجراءات والمعلومات.",
    ba_p1_axis_1: "مراجعة النظام الحالي وتحليل تجربة الاستخدام وسير العمليات.",
    ba_p1_axis_2: "تحديد مشكلات وضوح التسلسل، دورة العمل، الإرشاد وسهولة الاستخدام.",
    ba_p1_axis_3: "فهم احتياجات المستخدم من خلال Persona وUser Journey وتجميع المشكلات باستخدام Affinity Mapping.",
    ba_p1_axis_4: "تحويل المشكلات إلى فرص تصميمية وإعادة تصميم الواجهات وتدفقات الاستخدام.",
    ba_p1_result_1: "تصميم مسارات أكثر وضوحًا لدورة حياة البرامج والمشاريع والخطوات التالية.",
    ba_p1_result_2: "إضافة مؤشرات للحالة والتقدم والمراحل والمتطلبات الإلزامية.",
    ba_p1_result_3: "تنظيم العمليات المرتبطة بكل مرحلة وتقليل تشتتها داخل النظام.",
    ba_p1_result_4: "تقسيم العمليات والنماذج الطويلة إلى خطوات متتابعة لتقليل العبء المعرفي.",
    ba_p1_result_5: "تحسين الإرشاد أثناء الاستخدام والاتساق وسهولة الوصول إلى الوظائف.",
    ba_p1_img_1: "فهم المشكلة",
    ba_p1_img_2: "فهم المستخدم",
    ba_p1_img_3: "تطوير الحلول",
    ba_p1_img_4: "الواجهات النهائية",
    ba_p1_img_5: "قبل وبعد إعادة التصميم",

    ba_mini_tag: "أعمال مصغرة",
    ba_mini_title: "أعمال مصغرة",
    ba_mini_note: "مخرجات تحليلية توثّق أساليب العمل والأدوات المستخدمة في تحليل العمليات والمتطلبات.",

    /* --- Mini work 1: Rafed process & workflow analysis --- */
    ba_mini1_title: "تحليل العمليات وسير العمل — نظام رافد",
    ba_mini1_desc: "دراسة تحليلية لعمليات إدارتي البرامج والمشاريع في نظام رافد، هدفت إلى فهم آلية تنفيذ الإجراءات وتسلسلها داخل النظام، ومقارنة دورة العمل بين الإدارتين؛ للكشف عن الفجوات وفرص التحسين وتحويل العمليات الحالية إلى تدفقات عمل أكثر وضوحًا وقابلية للتتبع.",
    ba_m1_axis_1: "تتبع العمليات والإجراءات الفعلية داخل إدارتي البرامج والمشاريع.",
    ba_m1_axis_2: "مقارنة بنية وتسلسل سير العمل بين دورة حياة البرنامج والمشروع.",
    ba_m1_axis_3: "تحليل نقاط الانتقال والاعتماد بين المراحل والإجراءات المرتبطة بها.",
    ba_m1_axis_4: "رصد الفجوات المتعلقة بترابط الإجراءات ووضوح حالة التقدم والخطوات التالية للمستخدم.",
    ba_m1_result_1: "توثيق دورة حياة البرامج والمشاريع من خلال مخططات سير عمل متكاملة توضح المراحل ونقاط القرار والانتقال.",
    ba_m1_result_2: "تحديد اختلاف واضح في بنية سير العمل؛ إذ تتبع المشاريع مراحل أكثر تسلسلًا وتنظيمًا مقارنة بالبرامج.",
    ba_m1_result_3: "رصد ضعف ترابط بعض إجراءات البرامج، خصوصًا إجراءات ما بعد النشر، بالمراحل والإجراءات السابقة.",
    ba_m1_result_4: "تحديد الحاجة إلى مؤشرات أوضح لحالة التقدم والجاهزية والخطوة التالية المطلوبة من المستخدم.",
    ba_m1_result_5: "صياغة توصيات لتحسين تسلسل سير العمل، وربط الإجراءات التابعة بمراحلها السابقة، وتعزيز وضوح العمليات داخل النظام.",
    ba_m1_img_1: "مخطط سير عمل البرنامج",
    ba_m1_img_2: "مخطط سير عمل المشروع",
    ba_m1_img_3: "تحليل عملية البرنامج",
    ba_m1_img_4: "تحليل عملية المشروع",
    ba_m1_img_5: "النتائج والتوصيات",

    /* --- Mini work 2: Aramex shipment delay DSS --- */
    ba_mini2_title: "نظام دعم قرار للتنبؤ بتأخر الشحنات — دراسة حالة أرامكس",
    ba_mini2_desc: "مشروع أكاديمي لنظام دعم قرار يهدف إلى تحليل مشكلة تأخر الشحنات والتنبؤ بالحالات الأكثر عرضة للتأخير قبل وقوعها، بالاعتماد على عوامل تشغيلية مثل الموسم، حجم الشحنات والمسافة، ثم تحويل نتائج التحليل إلى مؤشرات وتوصيات تساعد في اتخاذ قرارات استباقية وتقليل أثر التأخير.",
    ba_m2_notice: "مشروع أكاديمي ودراسة حالة تعتمد على بيانات مولّدة بالمحاكاة — النظام غير مطبّق فعليًا لدى شركة أرامكس.",
    ba_m2_axis_1: "محاكاة بيانات الشحنات وبناء سيناريوهات تشغيلية مختلفة.",
    ba_m2_axis_2: "تحليل العوامل المرتبطة بالتأخير مثل الموسم والحجم والمسافة.",
    ba_m2_axis_3: "تطبيق التحليلات الوصفية والتنبؤية والتوجيهية لدعم القرار.",
    ba_m2_axis_4: "بناء لوحة معلومات تفاعلية لعرض المؤشرات واختبار سيناريوهات \"ماذا لو\".",
    ba_m2_result_1: "تقدير احتمالية تأخر الشحنات وتصنيف الحالات وفق مستوى الخطورة.",
    ba_m2_result_2: "اكتشاف أنماط وعلاقات بين الظروف التشغيلية وحالات التأخير.",
    ba_m2_result_3: "تحويل نتائج التحليل إلى قرارات مقترحة مثل زيادة الموارد أو متابعة الشحنة.",
    ba_m2_result_4: "إنشاء مؤشرات لمقارنة معدل التأخير بالمستهدف ودعم تقييم الأداء.",
    ba_m2_result_5: "إتاحة اختبار سيناريوهات تشغيلية مختلفة قبل اتخاذ القرار.",
    ba_m2_img_1: "لوحة دعم القرار",
    ba_m2_img_2: "التحليلات الوصفية",
    ba_m2_img_3: "التحليلات التنبؤية",
    ba_m2_img_4: "التحليلات التوجيهية ودعم القرار",
    ba_m2_img_5: "محاكاة البيانات",

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
    nav_highlights: "Highlights",
    nav_work: "Work",
    nav_contact: "Contact",

    hero_eyebrow: "Nada Mohammed Hassan Al-Faifi",
    hero_title: "MY PORTFOLIO",

    about_title_1: "About",
    about_title_2: "Me",
    about_lead: "I study systems from the inside: how information shows up at its clearest, where the difficulties lie, and how it becomes an experience someone can actually use.",
    about_p1: "An Information Systems specialist focused on business and systems analysis and user experience (UX), with a background that brings together the technical and the managerial. My projects have ranged across systems analysis and design, user experience improvement, and data analysis and decision support — alongside experience leading project teams and working across the stages of the systems development lifecycle, and skills in communication, coordination, and adapting quickly to new tools and challenges.",
    about_p2: "I love ideas that begin with curiosity, grow through a question, and end in a solution that makes a difference.",
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
    exp_vol_date: "August 2025 — September 2026",
    exp_vol_body: "Designer & Content Creator across several student clubs, including",
    exp_vol_clubs: "(Industry Pioneers Club, Innovation & Entrepreneurship Club, Vision Club, College of Business Administration Club)",
    exp_train_title: "Training Experience",
    exp_train_date: "June 2026 — August 2026",
    exp_train_body: "Enmaa Family Association — Cooperative Training as a Systems Analyst",
    exp_job_title: "Job Experience",
    exp_job_body: "[ to be added once available ]",
    exp_job_status: "Coming soon",

    highlights_tag: "05 — Highlights",
    highlights_note: "Moments, events and activities I've taken part in.",
    highlight_1_date: "August 2026",
    highlight_1_note: "Participated in Barmajan Al-Madinah within the Visitor Experience Enrichment track and advanced to the final stages.",
    highlight_2_date: "May 2026",
    highlight_2_note: "Third place among Management Information Systems graduation projects at Taibah University for \"Noreen\".",
    highlight_3_date: "April 2026",
    highlight_3_note: "Recognized among distinguished graduates who earned First-Class Honors in Management Information Systems at Taibah University.",

    work_tag: "06 — Selected Projects",
    madar_title: "MADAR",
    madar_desc: "MADAR is a smart platform that connects visitors with Al-Madinah and transforms discovering its places and experiences into an easy, interactive journey through an interactive map, place stories, personalized routes, and a local guide that makes exploration more engaging.",
    noreen_title: "NOREEN",
    noreen_desc: "Noreen is a smart educational and investment platform that connects beneficiaries with suitable opportunities through the integration of investment entities and consulting offices, simplifying the admission and study journey from the beginning until reaching the desired academic and professional path.",
    rafd_title: "RAFD",
    rafd_desc: "A case study focused on redesigning the user experience of the Rafd system by analyzing current workflows, identifying operational issues, and translating the findings into UX-based design solutions that improve process clarity and usability.",
    explore_project: "Explore Project ↗",
    view_case_study: "View case study",
    placeholder_image: "[ project image ]",
    placeholder_cat: "Coming soon",
    placeholder_title: "Upcoming project",

    edu_uni: "Taibah University",

    contact_title: "LET'S CONNECT.",
    contact_email: "Email",
    contact_linkedin: "LinkedIn",
    contact_cv: "CV",
    cv_modal_title: "Choose CV Language",
    wip_line_1: "Portfolio under construction...",
    wip_line_2: "Please bear with me! 🙂",
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
    ba_projects_tag: "Projects & Works",
    ba_projects_title: "Projects & Works",
    ba_projects_note: "Full case studies across business analysis and user experience.",
    ba_view_details: "View Details",
    ba_open_project: "Open Project ↗",
    ba_modal_overview_label: "Overview",
    ba_modal_axes_label: "Focus Areas",
    ba_modal_analysis_axes_label: "Analysis Areas",
    ba_modal_method_label: "Methodology & Tools",
    ba_modal_methods_label: "Methodologies & Tools",
    ba_modal_results_label: "Outcomes",
    ba_modal_gallery_label: "Image Gallery",

    /* --- Project 1: Rafed ERP UX redesign --- */
    ba_project1_title: "Rafed ERP UX Redesign Case Study",
    ba_project1_desc: "A case study redesigning the user experience of the Programs and Projects modules in the Rafed ERP system. It began with a review of the system and its existing workflows to surface usability challenges, then translated those findings into design solutions that clarify the process cycle, reduce complexity, and make actions and information easier to reach.",
    ba_p1_axis_1: "Reviewing the current system and analysing its usability and process flows.",
    ba_p1_axis_2: "Identifying issues in sequence clarity, the process cycle, in-system guidance and ease of use.",
    ba_p1_axis_3: "Understanding user needs through a Persona and User Journey, and grouping the issues with Affinity Mapping.",
    ba_p1_axis_4: "Turning the issues into design opportunities and redesigning the interfaces and user flows.",
    ba_p1_result_1: "Clearer paths through the program and project lifecycle, and through the next steps at each point.",
    ba_p1_result_2: "Indicators added for status, progress, stages and mandatory requirements.",
    ba_p1_result_3: "Actions tied to each stage organised together instead of scattered across the system.",
    ba_p1_result_4: "Long processes and forms broken into sequential steps to reduce cognitive load.",
    ba_p1_result_5: "Better in-context guidance, more consistency, and easier access to functions.",
    ba_p1_img_1: "Understanding the problem",
    ba_p1_img_2: "Understanding the user",
    ba_p1_img_3: "Developing the solutions",
    ba_p1_img_4: "Final interfaces",
    ba_p1_img_5: "Before & after the redesign",

    ba_mini_tag: "Mini Work",
    ba_mini_title: "Mini Work",
    ba_mini_note: "Analytical outputs documenting the working methods and tools used in process and requirements analysis.",

    /* --- Mini work 1: Rafed process & workflow analysis --- */
    ba_mini1_title: "Process & Workflow Analysis — Rafed ERP",
    ba_mini1_desc: "An analytical study of the Programs and Projects processes in the Rafed ERP system, aimed at understanding how procedures are carried out and sequenced within the system and comparing the workflow of the two modules — surfacing gaps and improvement opportunities, and turning the current processes into clearer, more traceable workflows.",
    ba_m1_axis_1: "Tracing the actual processes and procedures inside the Programs and Projects modules.",
    ba_m1_axis_2: "Comparing the structure and sequence of the program lifecycle against the project lifecycle.",
    ba_m1_axis_3: "Analysing the transition and dependency points between stages and their related procedures.",
    ba_m1_axis_4: "Spotting gaps in how procedures connect, and in how clearly progress and next steps are shown to the user.",
    ba_m1_result_1: "The program and project lifecycles documented through complete workflow diagrams showing stages, decision points and transitions.",
    ba_m1_result_2: "A clear structural difference identified: projects follow a more sequential, organised set of stages than programs do.",
    ba_m1_result_3: "Weak linkage found between some program procedures — particularly post-publication ones — and the stages preceding them.",
    ba_m1_result_4: "A need identified for clearer indicators of progress, readiness, and the next step required from the user.",
    ba_m1_result_5: "Recommendations formulated to improve workflow sequencing, connect dependent procedures to their earlier stages, and make processes clearer within the system.",
    ba_m1_img_1: "Program workflow diagram",
    ba_m1_img_2: "Project workflow diagram",
    ba_m1_img_3: "Program process analysis",
    ba_m1_img_4: "Project process analysis",
    ba_m1_img_5: "Findings & recommendations",

    /* --- Mini work 2: Aramex shipment delay DSS --- */
    ba_mini2_title: "Shipment Delay Prediction Decision Support System — Aramex Case Study",
    ba_mini2_desc: "An academic decision support system project analysing shipment delays and predicting which cases are most at risk before a delay occurs, based on operational factors such as season, shipment volume and distance — then turning the analysis into indicators and recommendations that support proactive decisions and reduce the impact of delays.",
    ba_m2_notice: "An academic project and case study built on simulated data — the system is not deployed at Aramex.",
    ba_m2_axis_1: "Simulating shipment data and building different operational scenarios.",
    ba_m2_axis_2: "Analysing the factors linked to delays, such as season, volume and distance.",
    ba_m2_axis_3: "Applying descriptive, predictive and prescriptive analytics to support decisions.",
    ba_m2_axis_4: "Building an interactive dashboard to present the indicators and test what-if scenarios.",
    ba_m2_result_1: "Estimated likelihood of shipment delay, with cases classified by risk level.",
    ba_m2_result_2: "Patterns and relationships uncovered between operational conditions and delay cases.",
    ba_m2_result_3: "Analysis results translated into suggested decisions, such as adding resources or tracking a shipment.",
    ba_m2_result_4: "Indicators created to compare the delay rate against target and support performance evaluation.",
    ba_m2_result_5: "The ability to test different operational scenarios before making a decision.",
    ba_m2_img_1: "Decision support dashboard",
    ba_m2_img_2: "Descriptive analytics",
    ba_m2_img_3: "Predictive analytics",
    ba_m2_img_4: "Prescriptive analytics & decision support",
    ba_m2_img_5: "Data simulation",

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
   PROJECT IMAGE SLIDER (homepage — Selected Projects)
   Hover drives the slide in CSS. This adds the touch path only: dots and a
   horizontal swipe, for devices where hover doesn't exist.
   ========================================================================== */
document.querySelectorAll('[data-slider]').forEach(slider => {
  const dots = [...slider.querySelectorAll('.project-dot')];

  function show(index) {
    slider.classList.toggle('show-second', index === 1);
    dots.forEach((d, i) => d.classList.toggle('is-active', i === index));
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', (e) => { e.preventDefault(); show(i); });
  });

  // Swipe: direction is read in document order, so it works in RTL and LTR.
  let startX = null;
  slider.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
  slider.addEventListener('touchend', (e) => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    startX = null;
    if (Math.abs(dx) < 40) return;
    const rtl = document.documentElement.dir === 'rtl';
    const forward = rtl ? dx > 0 : dx < 0;
    show(forward ? 1 : 0);
  }, { passive: true });
});

/* ==========================================================================
   PHOTO LIGHTBOX (homepage highlights)
   Delegated from [data-photo], so any highlight that gains photos later
   works without touching this code.
   ========================================================================== */
(function () {
  const box = document.getElementById('photoLightbox');
  if (!box) return;

  const img = document.getElementById('photoLightboxImg');
  const closeBtn = document.getElementById('photoLightboxClose');
  let lastTrigger = null;

  function openPhoto(src, trigger) {
    img.src = src;
    box.hidden = false;
    document.body.classList.add('photo-lightbox-open');
    lastTrigger = trigger || null;
    if (closeBtn) closeBtn.focus();
  }
  function closePhoto() {
    if (box.hidden) return;
    box.hidden = true;
    img.src = '';
    document.body.classList.remove('photo-lightbox-open');
    if (lastTrigger) { lastTrigger.focus(); lastTrigger = null; }
  }

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-photo]');
    if (!trigger) return;
    e.preventDefault();
    openPhoto(trigger.getAttribute('data-photo'), trigger);
  });

  if (closeBtn) closeBtn.addEventListener('click', closePhoto);
  // Clicking the backdrop — or the photo itself — closes it.
  box.addEventListener('click', (e) => { if (e.target !== closeBtn) closePhoto(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closePhoto(); });
})();

/* ==========================================================================
   WORK-IN-PROGRESS INTRO NOTE
   Temporary: appears on every fresh homepage load, deliberately NOT
   remembered between visits (no localStorage/sessionStorage).
   ========================================================================== */
(function () {
  const modal = document.getElementById('wipModal');
  if (!modal) return;

  const closeBtn = document.getElementById('wipClose');

  function closeWip() {
    if (modal.hidden) return;
    modal.hidden = true;
    document.body.classList.remove('wip-open');
  }
  function openWip() {
    modal.hidden = false;
    document.body.classList.add('wip-open');
    if (closeBtn) closeBtn.focus();
  }

  window.addEventListener('load', openWip);

  if (closeBtn) closeBtn.addEventListener('click', closeWip);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeWip(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeWip(); });
})();

/* ==========================================================================
   CV LANGUAGE MODAL (homepage only — guarded so other pages ignore it)
   Clicking CV opens a small chooser instead of downloading straight away.
   ========================================================================== */
(function () {
  const trigger = document.getElementById('cvTrigger');
  const modal = document.getElementById('cvModal');
  if (!trigger || !modal) return;

  const closeBtn = document.getElementById('cvModalClose');

  function openCv() {
    modal.hidden = false;
    document.body.classList.add('cv-modal-open');
    if (closeBtn) closeBtn.focus();
  }
  function closeCv() {
    if (modal.hidden) return;
    modal.hidden = true;
    document.body.classList.remove('cv-modal-open');
    trigger.focus();
  }

  trigger.addEventListener('click', openCv);
  if (closeBtn) closeBtn.addEventListener('click', closeCv);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeCv(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeCv(); });
  modal.querySelectorAll('.cv-choice').forEach(a => a.addEventListener('click', closeCv));
})();

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


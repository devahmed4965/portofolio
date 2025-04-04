// script.js

document.addEventListener('DOMContentLoaded', () => {
    // ==================== Initialize AOS ====================
    AOS.init({
      duration: 800,
      once: true,
    });
  
    // ==================== Theme Toggle (Light/Dark) ====================
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeToggle?.querySelector('i');
  
    const applyTheme = (theme) => {
      if (theme === 'dark') {
        body.classList.replace('light-theme', 'dark-theme');
        if (themeIcon) themeIcon.classList.replace('fa-moon', 'fa-sun');
        themeToggle?.setAttribute('aria-label', 'Switch to light mode');
      } else {
        body.classList.replace('dark-theme', 'light-theme');
        if (themeIcon) themeIcon.classList.replace('fa-sun', 'fa-moon');
        themeToggle?.setAttribute('aria-label', 'Switch to dark mode');
      }
    };
  
    let currentTheme = localStorage.getItem('theme');
    if (!currentTheme) {
      currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    applyTheme(currentTheme);
  
    themeToggle?.addEventListener('click', () => {
      const newTheme = body.classList.contains('light-theme') ? 'dark' : 'light';
      applyTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    });
  
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      if (!localStorage.getItem('theme')) {
        const newColorScheme = event.matches ? 'dark' : 'light';
        applyTheme(newColorScheme);
      }
    });
  
    // ==================== Language Toggle (Arabic/English) ====================
    const langToggle = document.getElementById('lang-toggle');
    const htmlTag = document.documentElement;
    const bootstrapCssLink = document.getElementById('bootstrap-css');
  
    const translations = {
      en: {
        navHome: 'Home', navAbout: 'About', navSkills: 'Skills', navProjects: 'Projects', navExperience: 'Experience', navContact: 'Contact',
        heroTitle: 'Ahmed Makram El-Saeedy',
        heroSubtitle: 'Science Student | Web Developer | Voiceover Artist',
        heroBtnProjects: 'View Projects', heroBtnContact: 'Contact Me',
        aboutTitle: 'About Me', aboutSubtitleAr: '', aboutSubtitleEn: 'A Blend of Science and Technology', aboutDescAr: '', aboutDescEn: '                I am Ahmed Makram El-Saeedy, a third-year science student passionate about web development, integrating cutting-edge technology to make a tangible impact.', aboutWorkAr: '', aboutWorkEn: '                I work at "Aliens Express" and also pursue voiceover work, giving me diverse and holistic experience.',
        skillsTitle: 'My Skills', skillsProgTitle: 'Programming & Development', skillsSciTitle: 'Science', skillsSciMicro: 'Microbiology', skillsSciChem: 'Chemistry', skillsOtherTitle: 'Other Skills', skillsOtherVO: 'Voiceover', skillsOtherCom: 'Communication & Problem Solving',
        projectsTitle: 'My Projects', project1Title: 'Shipments Checker', project1Desc: 'يقدم نظام فحص المرتجعات Shipments Checker تجربة فريدة لشركات الشحن والتوصيل حيث يمكن من خلاله تسجيل جميع الشحنات على قاعدة البيانات باستخدام الاسكانر ومراجعه تفاصيل كل شحنه وتاريخ فحصها ومن قام بفحصها من خلال لوحه المدير', projectTechUsed: 'Tech:', projectBtnLive: 'Live Demo', projectBtnCode: 'Code', project2Title: 'Aliens Express Website', project2Desc: 'موقع ويب احترافي يقدم العديد من المميزات لشركات الشحن منها نظام تتبع للشحنات و نظام حجز البيك اب و التواصل مع خدمة العملاء', project3Title: 'Barbershop System', project3Desc: 'نظام ادارة محلات الحلاقة يقدم تجربة استثنائيه للسماح لاصحاب المشاريع من متابعه العملاء والموظفين وتسجيل الفواتير وعرض تقارير شامله للمصروفات والارباح خلال فترات معينه',
        experienceTitle: 'Experience & Accreditations', experienceWorkTitle: 'Work Experience', experienceAlienExp: 'Aliens Express Company', experienceAlienDesc: 'Operation', experienceVOTitle: 'Voiceover', experienceVODesc: 'بودكاست اسرار الكون والايمان', experienceTrustTitle: 'Trust & Accreditations', experienceTrustDesc: 'Showcase logos of companies or certificates obtained.',
        contactTitle: 'Contact Me', contactName: 'Name', contactEmail: 'Email', contactSubject: 'Subject', contactMessage: 'Message / Feedback', contactRating: 'Rate the Site (Optional):', contactBtnSend: 'Send Message', contactOr: 'Or contact directly via:',
        footerText: `© ${new Date().getFullYear()} Ahmed Makram El-Saeedy. All rights reserved.`,
      },
      ar: {
        navHome: 'الرئيسية', navAbout: 'عني', navSkills: 'مهاراتي', navProjects: 'مشاريعي', navExperience: 'الخبرات', navContact: 'تواصل معي',
        heroTitle: 'أحمد مكرم الصعيدي',
        heroSubtitle: 'طالب علوم | مطور ويب | فويس أوفر',
        heroBtnProjects: 'شاهد مشاريعي', heroBtnContact: 'تواصل معي',
        aboutTitle: 'عني', aboutSubtitleAr: 'مزيج من العلم والتكنولوجيا', aboutSubtitleEn: '', aboutDescAr: '                أنا أحمد مكرم الصعيدي، طالب في الفرقة الثالثة بكلية العلوم بجامعة دمنهور، شغوف بتطوير الويب وتطبيق أحدث التقنيات لإحداث تغيير ملموس.', aboutDescEn: '', aboutWorkAr: '                أعمل في شركة "Aliens Express" وأمارس عمل الفويس أوفر، مما يمنحني خبرة متنوعة ومتكاملة.', aboutWorkEn: '',
        skillsTitle: 'مهاراتي', skillsProgTitle: 'البرمجة والتطوير', skillsSciTitle: 'العلوم', skillsSciMicro: 'الميكروبيولوجي', skillsSciChem: 'الكيمياء', skillsOtherTitle: 'مهارات أخرى', skillsOtherVO: 'التعليق الصوتي', skillsOtherCom: 'التواصل وحل المشكلات',
        projectsTitle: 'مشاريعي', project1Title: 'Shipments Checker', project1Desc: 'يقدم نظام فحص المرتجعات Shipments Checker تجربة فريدة لشركات الشحن والتوصيل حيث يمكن من خلاله تسجيل جميع الشحنات على قاعدة البيانات باستخدام الاسكانر ومراجعه تفاصيل كل شحنه وتاريخ فحصها ومن قام بفحصها من خلال لوحه المدير      ', projectTechUsed: 'التقنيات:', projectBtnLive: 'عرض مباشر', projectBtnCode: 'الكود', project2Title: 'Aliens Express Website', project2Desc: 'موقع ويب احترافي يقدم العديد من المميزات لشركات الشحن منها نظام تتبع للشحنات و نظام حجز البيك اب و التواصل مع خدمة العملاء', project3Title: 'نظام ادارة محلات الحلاقة', project3Desc: 'نظام ادارة محلات الحلاقة يقدم تجربة استثنائيه للسماح لاصحاب المشاريع من متابعه العملاء والموظفين وتسجيل الفواتير وعرض تقارير شامله للمصروفات والارباح خلال فترات معينه',
        experienceTitle: 'الخبرات والاعتمادات', experienceWorkTitle: 'الخبرة العملية', experienceAlienExp: 'شركة Aliens Express', experienceAlienDesc: 'Operation', experienceVOTitle: 'التعليق الصوتي (Voiceover)', experienceVODesc: 'بودكاست اسرار الكون والايمان', experienceTrustTitle: 'الثقة والاعتمادات', experienceTrustDesc: 'أعرض هنا شهاداتك أو شعارات الجهات التي تثق بك.',
        contactTitle: 'تواصل معي', contactName: 'الاسم', contactEmail: 'البريد الإلكتروني', contactSubject: 'الموضوع', contactMessage: 'الرسالة / الرأي', contactRating: 'تقييمك للموقع (اختياري):', contactBtnSend: 'إرسال الرسالة', contactOr: 'أو تواصل مباشرة عبر:',
        footerText: `© ${new Date().getFullYear()} أحمد مكرم الصعيدي. جميع الحقوق محفوظة.`,
      }
    };
  
    function setLanguage(lang) {
      if (!translations[lang]) {
        console.error(`Language ${lang} not found.`);
        return;
      }
      htmlTag.lang = lang;
      htmlTag.dir = lang === 'ar' ? 'rtl' : 'ltr';
  
      if (bootstrapCssLink) {
        const rtlLink = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.rtl.min.css";
        const ltrLink = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css";
        bootstrapCssLink.href = lang === 'ar' ? rtlLink : ltrLink;
      }
  
      document.querySelectorAll('[data-lang-section]').forEach(el => el.classList.add('d-none'));
      document.querySelectorAll(`[data-lang-section="${lang}"]`).forEach(el => el.classList.remove('d-none'));
  
      document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang][key] !== undefined) {
          const translation = translations[lang][key];
          if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            if (translation) element.placeholder = translation;
          } else {
            if (translation) element.textContent = translation;
          }
        } else {
          element.textContent = '';
        }
      });
  
      if (langToggle) {
        langToggle.textContent = lang === 'ar' ? 'English' : 'العربية';
        langToggle.setAttribute('data-lang-target', lang === 'ar' ? 'en' : 'ar');
      }
      localStorage.setItem('language', lang);
    }
  
    const savedLang = localStorage.getItem('language') || 'ar';
    setLanguage(savedLang);
  
    langToggle?.addEventListener('click', () => {
      const targetLang = langToggle.getAttribute('data-lang-target');
      setLanguage(targetLang);
    });
  
    // ==================== Star Rating System ====================
    const starRatingContainer = document.querySelector('.star-rating');
    const stars = starRatingContainer?.querySelectorAll('i');
    const ratingInput = document.getElementById('rating-value');
    let currentRating = 0;
  
    if (starRatingContainer && stars && ratingInput) {
      const highlightStars = (value) => {
        stars.forEach((star, index) => {
          if (index < value) {
            star.classList.remove('far');
            star.classList.add('fas');
          } else {
            star.classList.remove('fas');
            star.classList.add('far');
          }
        });
      };
  
      const resetStarsToCurrentRating = () => highlightStars(currentRating);
  
      stars.forEach(star => {
        star.addEventListener('mouseover', function() {
          const hoverValue = parseInt(this.getAttribute('data-value'));
          highlightStars(hoverValue);
        });
  
        star.addEventListener('mouseout', resetStarsToCurrentRating);
  
        star.addEventListener('click', function() {
          currentRating = parseInt(this.getAttribute('data-value'));
          ratingInput.value = currentRating;
          highlightStars(currentRating);
          gsap.fromTo(this, { scale: 1 }, { scale: 1.3, duration: 0.15, yoyo: true, repeat: 1 });
        });
      });
    }
  
    // ==================== Contact Form Handling ====================
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
  
    contactForm?.addEventListener('submit', async function(event) {
      event.preventDefault();
      const formData = new FormData(contactForm);
      if (ratingInput && ratingInput.value) {
        formData.append('rating', ratingInput.value);
      }
      try {
        formStatus.textContent = 'Sending...';
        formStatus.style.color = 'orange';
        const response = await fetch(contactForm.action, {
          method: contactForm.method,
          body: formData,
          headers: { 'Accept': 'application/json' }
        });
        if (response.ok) {
          formStatus.textContent = 'شكراً لك! تم إرسال رسالتك بنجاح.';
          formStatus.style.color = 'green';
          contactForm.reset();
          currentRating = 0;
          if (stars) highlightStars(0);
          if (ratingInput) ratingInput.value = '';
        } else {
          const data = await response.json();
          formStatus.textContent = `حدث خطأ: ${data.error || 'لا يمكن إرسال النموذج حالياً.'}`;
          formStatus.style.color = 'red';
        }
      } catch (error) {
        formStatus.textContent = 'حدث خطأ في الشبكة. يرجى المحاولة مرة أخرى.';
        formStatus.style.color = 'red';
      }
    });
  
    // ==================== Typewriter Effect ====================
    const typewriterElement = document.getElementById('typewriter');
    const typewriterText = "طالب علوم | مطور ويب | فويس أوفر"; // النص الذي سيظهر بتأثير الكتابة
    let charIndex = 0;
  
    function typeWriter() {
      if (charIndex < typewriterText.length) {
        typewriterElement.innerHTML += typewriterText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100);
      }
    }
    // بدء تأثير الكتابة بعد تحميل الصفحة
    typeWriter();
  
    // ==================== GSAP Entrance Animations ====================
    gsap.from(".hero-section h1", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });
    gsap.from(".hero-section p", { duration: 1, y: 50, opacity: 0, delay: 0.5, ease: "power2.out" });
  });
  
// Translation Data
const translations = {
    'en': {
        'nav-about': 'About',
        'nav-education': 'Experience',
        'nav-tech-projects': 'Projects',
        'nav-leadership': 'Leadership',
        'nav-skills': 'Skills',
        'nav-references': 'References',
        'nav-contact': 'Contact',
        'hero-greeting': "Hi, I'm Hamit.",
        'hero-title': 'Software Engineer',
        'hero-subtitle': 'Senior Software Engineering Student (4th Year)',
        'hero-description': 'Passionate about building innovative software solutions, from enterprise CRM architectures and web applications to deep learning and robust mobile development.',
        'btn-contact': 'Contact Me',
        'btn-cv': 'Download CV',
        'sec-about': 'Biography',
        'about-p1': 'I am a Senior Software Engineering student at Ankara Science University (4th year). I have a strong foundation across a diverse range of programming languages, artificial intelligence, machine learning, and modern software architectures. My professional journey is driven by a passion for solving complex, real-world problems and engineering scalable, high-performance applications.',
        'about-p2': 'From delivering an automated, full-stack CRM system for Prof. Dr. Esin Yalçınkaya to completing an engineering internship at MG Engineering, I have honed practical expertise across complete software lifecycles, technical documentation, and design processes. I thrive in multidisciplinary environments and continuously adapt to cutting-edge technologies to architect optimal solutions.',
        'stat-1-num': '10+',
        'stat-1': 'Technical Projects',
        'stat-2-num': '4th Year',
        'stat-2': 'Senior Student (ASU)',
        'sec-education': 'Education',
        'edu-degree': 'B.S. in Software Engineering (Senior / 4th Year)',
        'edu-uni': 'Ankara Science University',
        'edu-desc': 'Focusing on advanced algorithms, machine learning, computer vision, distributed systems, and software architecture.',
        'edu-roles-title': 'Activities and Roles:',
        'edu-role-1': 'President, Development Student Club',
        'edu-role-2': 'Former Social Media Head, Google Developer Student Club',
        'edu-role-3': 'Theatre & Music Club Member',
        'sec-experience': 'Work Experience',
        'exp-1-role': 'CRM System Development',
        'exp-1-company': 'Prof. Dr. Esin Yalçınkaya | 2026',
        'exp-1-desc': 'Designed and developed a custom CRM system consolidating incoming Instagram and WhatsApp messages into a centralized contact database, automating appointment scheduling to replace manual Excel tracking, and integrating ad performance analytics.',
        'exp-2-role': 'Engineering Internship',
        'exp-2-company': 'MG Engineering | 2024',
        'exp-2-desc': 'Gained hands-on experience in engineering design processes, improving AutoCAD skills, contributing to mechanical design projects, and preparing comprehensive technical documentation.',
        'sec-tech-projects': 'Technical Projects',
        'tp-0-title': 'Clinic CRM Platform',
        'tp-0-desc': 'Built a CRM platform that consolidates incoming Instagram and WhatsApp messages into a unified contact system, automatically converting client inquiries into scheduled appointments and tracking ad performance.',
        'tp-1-title': 'Real-Time Deepfake Face & Voice Transformation',
        'tp-1-desc': 'Developed a real-time deepfake application performing live face swapping and voice conversion on video streams.',
        'tp-2-title': 'AI-Powered Personalized News Application',
        'tp-2-desc': 'Developed an intelligent news aggregation platform using ML algorithms to personalize content delivery based on reading habits.',
        'tp-3-title': 'Obesity Risk Prediction using Machine Learning',
        'tp-3-desc': 'Conducted data mining analysis applying preprocessing, feature engineering, and multiple classification models with hyperparameter tuning.',
        'tp-4-title': 'AI-Powered Language Learning Platform',
        'tp-4-desc': 'Built adaptive ML system personalizing curriculum based on user performance, achieving 35% pronunciation accuracy improvement.',
        'tp-5-title': 'Global Recipe Sharing Network',
        'tp-5-desc': 'Architected scalable platform supporting 1000+ concurrent users with advanced search, recipe sharing, and multi-language support.',
        'tp-6-title': 'Smart Home Automation System',
        'tp-6-desc': 'Developed IoT control interface with voice/gesture recognition, reducing energy consumption by 28%.',
        'tp-7-title': 'Business Process Automation Framework',
        'tp-7-desc': 'Created workflow optimization framework improving process efficiency by 40% through intelligent automation.',
        'tp-8-title': 'University Course Directory Mobile Application',
        'tp-8-desc': 'Developed native Android application with dynamic filtering, live search, sorting capabilities, and complex custom adapters.',
        'tp-9-title': 'Conference Registration & Verification System',
        'tp-9-desc': 'Built Android application with MVVM architecture, Room Database, and camera integration for participant verification.',
        'sec-leadership-comps': 'Competitions & Leadership',
        'ldr-club1-title': 'Development Student Club',
        'ldr-club1-role': 'President | 2025 - Present',
        'ldr-club1-l1': 'Lead organization of software and technology-related projects.',
        'ldr-club1-l2': 'Established and captain project team for Teknofest 2026.',
        'ldr-club1-l3': 'Manage promotional activities to grow community visibility.',
        'prj-1-title': 'Teknofest 2026',
        'prj-1-tag': 'Project Team Captain',
        'prj-1-desc': 'Leading the Development Student Club project team preparing for Teknofest, focused on building innovative engineering and software solutions through interdisciplinary collaboration.',
        'ldr-club2-title': 'Google Developer Student Club (GDSC)',
        'ldr-club2-role': 'Social Media Head | 2024',
        'ldr-club2-desc': 'Managed digital promotion strategies and social media activities, increasing event reach and strengthening club visibility.',
        'prj-2-title': 'TÜBİTAK Project',
        'prj-2-tag': 'Project Captain | 2019',
        'prj-2-desc': 'Participated in national competition demonstrating creativity, technical competence, and problem-solving ability, receiving jury appreciation.',
        'ldr-club3-title': 'Tuğra Rocket Team',
        'ldr-club3-role': 'Vice President | 2024',
        'ldr-club3-desc': 'Served as Vice President preparing for the Teknofest Rocket Competition, coordinating sub-teams and contributing to rocket design and launch planning.',
        'ldr-club4-title': 'Theatre & Music Club',
        'ldr-club4-role': 'Active Member',
        'ldr-club4-desc': 'Active participant in theatre productions and musical performances within the university community.',
        'sec-skills': 'Technical & Professional Skills',
        'skill-cat-prog': 'Programming Languages',
        'skill-cat-ai': 'AI & Data Science',
        'skill-cat-mobweb': 'Mobile & Web Development',
        'skill-cat-db': 'Database & Core Algorithms',
        'skill-cat-tools': 'Developer Tools & Platforms',
        'skill-cat-prof': 'Professional Skills & Languages',
        'sec-references': 'Academic & Professional References',
        'ref-1-title': 'Head of Computer Engineering (English) Dept.',
        'ref-1-inst': 'Ankara Science University',
        'ref-2-title': 'Professor of Medicine & ENT Specialist',
        'ref-2-inst': 'Clinic Director & CRM Client',
        'sec-contact': 'Get In Touch',
        'contact-desc': "I'm always open to discussing new projects, creative engineering ideas, or career opportunities.",
        'contact-loc': 'Ankara / Çankaya',
        'form-name': 'Your Name',
        'form-email': 'Your Email',
        'form-msg': 'Your Message',
        'form-submit': 'Send Message',
        'footer-text': '&copy; 2026 Hamit Güneş. Architected with passion.'
    },
    'tr': {
        'nav-about': 'Hakkımda',
        'nav-education': 'Deneyim',
        'nav-tech-projects': 'Projeler',
        'nav-leadership': 'Liderlik',
        'nav-skills': 'Yetenekler',
        'nav-references': 'Referanslar',
        'nav-contact': 'İletişim',
        'hero-greeting': 'Merhaba, Ben Hamit.',
        'hero-title': 'Yazılım Mühendisi',
        'hero-subtitle': 'Ankara Bilim Üniversitesi 4. Sınıf (Son Sınıf) Öğrencisi',
        'hero-description': 'Kurumsal CRM mimarileri ve web uygulamalarından derin öğrenme ve güçlü mobil geliştirmeye kadar yenilikçi yazılım çözümleri üretme konusunda tutkuluyum.',
        'btn-contact': 'Bana Ulaşın',
        'btn-cv': 'CV İndir',
        'sec-about': 'Biyografi',
        'about-p1': 'Ankara Bilim Üniversitesi Yazılım Mühendisliği 4. sınıf (son sınıf) öğrencisiyim. Çeşitli programlama dillerinde, yapay zeka, makine öğrenimi ve modern yazılım mimarilerinde güçlü bir temele sahibim. Profesyonel yolculuğum, karmaşık ve gerçek dünyadaki sorunları çözme, ölçeklenebilir ve yüksek performanslı uygulamalar geliştirme tutkumla şekilleniyor.',
        'about-p2': 'Prof. Dr. Esin Yalçınkaya için geliştirdiğim uçtan uca otomatik mesajlaşma ve reklam analitiği destekli özel CRM sisteminden MG Mühendislik\'teki stajıma kadar, tam yazılım yaşam döngüleri, teknik dokümantasyon ve tasarım süreçlerinde pratik deneyim kazandım. Çok disiplinli ortamlarda başarılı oluyor ve en uygun çözümleri mimari seviyede tasarlamak için sürekli olarak son teknolojilere adapte oluyorum.',
        'stat-1-num': '10+',
        'stat-1': 'Teknik Proje',
        'stat-2-num': '4. Sınıf',
        'stat-2': 'Son Sınıf (Ankara Bilim Üni.)',
        'sec-education': 'Eğitim',
        'edu-degree': 'Yazılım Mühendisliği (4. Sınıf / Son Sınıf)',
        'edu-uni': 'Ankara Bilim Üniversitesi',
        'edu-desc': 'Gelişmiş algoritmalar, makine öğrenimi, bilgisayarla görme, dağıtık sistemler ve yazılım mimarisi üzerine odaklanıyorum.',
        'edu-roles-title': 'Kulüpler ve Roller:',
        'edu-role-1': 'Development Student Club Başkanı',
        'edu-role-2': 'Eski GDSC Sosyal Medya Sorumlusu',
        'edu-role-3': 'Tiyatro ve Müzik Kulübü Üyesi',
        'sec-experience': 'İş Deneyimi',
        'exp-1-role': 'Özel CRM Sistem Geliştirme',
        'exp-1-company': 'Prof. Dr. Esin Yalçınkaya | 2026',
        'exp-1-desc': 'Instagram ve WhatsApp mesajlarını tek bir merkezi veri tabanında toplayan, müşteri taleplerini otomatik randevuya dönüştürerek Excel takibini ortadan kaldıran ve reklam performans analitiği entegre edilen uçtan uca özel CRM sistemi tasarlayıp geliştirdim.',
        'exp-2-role': 'Mühendislik Stajı',
        'exp-2-company': 'MG Mühendislik | 2024',
        'exp-2-desc': 'Mühendislik tasarım süreçlerinde uygulamalı deneyim kazandım, AutoCAD becerilerimi geliştirdim, mekanik tasarım projelerine katıldım ve kapsamlı teknik dokümantasyon hazırladım.',
        'sec-tech-projects': 'Teknik Projeler',
        'tp-0-title': 'Klinik CRM Platformu',
        'tp-0-desc': 'Instagram ve WhatsApp iletişimlerini merkezi bir sistemde toplayan, müşteri taleplerini otomatik randevuya dönüştüren ve reklam performansını takip eden kurumsal CRM platformu.',
        'tp-1-title': 'Gerçek Zamanlı Deepfake Yüz & Ses Dönüştürme',
        'tp-1-desc': 'Video akışları üzerinde canlı yüz değiştirme ve ses dönüştürme işlemi yapan gerçek zamanlı bir deepfake uygulaması geliştirdim.',
        'tp-2-title': 'Yapay Zeka Destekli Kişiselleştirilmiş Haber',
        'tp-2-desc': 'Okuma alışkanlıklarına göre içerik sunumunu kişiselleştirmek için makine öğrenimi algoritmalarını kullanan akıllı bir haber platformu geliştirdim.',
        'tp-3-title': 'Makine Öğrenimi İle Obezite Riski Tahmini',
        'tp-3-desc': 'Veri ön işleme, özellik mühendisliği ve hiperparametre optimizasyonu ile çoklu sınıflandırma modelleri uygulayarak veri madenciliği analizi gerçekleştirdim.',
        'tp-4-title': 'Yapay Zeka Dil Öğrenim Platformu',
        'tp-4-desc': 'Kullanıcı performansına göre müfredatı kişiselleştiren ve telaffuz doğruluğunda %35 iyileşme sağlayan adaptif bir makine öğrenimi sistemi kurdum.',
        'tp-5-title': 'Global Tarif Paylaşım Ağı',
        'tp-5-desc': 'Gelişmiş arama ve çoklu dil desteğiyle 1000\'den fazla eşzamanlı kullanıcıyı destekleyen ölçeklenebilir bir platform mimarisi tasarladım.',
        'tp-6-title': 'Akıllı Ev Otomasyon Sistemi',
        'tp-6-desc': 'Ses ve jest tanıma özelliğine sahip, enerji tüketimini %28 oranında azaltan bir IoT kontrol arayüzü geliştirdim.',
        'tp-7-title': 'İş Süreçleri Otomasyon Çerçevesi',
        'tp-7-desc': 'Akıllı otomasyon ve süreç madenciliği ile süreç verimliliğini %40 oranında artıran bir iş akışı optimizasyon çatısı oluşturdum.',
        'tp-8-title': 'Üniversite Ders Rehberi Mobil Uygulaması',
        'tp-8-desc': 'Dinamik filtreleme, canlı arama, sıralama yetenekleri ve karmaşık özel adaptörlere sahip bir native Android uygulaması geliştirdim.',
        'tp-9-title': 'Konferans Kayıt ve Doğrulama Sistemi',
        'tp-9-desc': 'Katılımcı yönetimi ve doğrulaması için MVVM mimarisi, Room veritabanı ve kamera entegrasyonu barındıran bir Android uygulaması oluşturdum.',
        'sec-leadership-comps': 'Yarışmalar & Liderlik',
        'ldr-club1-title': 'Development Student Club',
        'ldr-club1-role': 'Başkan | 2025 - Günümüz',
        'ldr-club1-l1': 'Yazılım ve teknoloji projelerinin organizasyonunu ve ekiplerini yönetiyorum.',
        'ldr-club1-l2': 'Teknofest 2026 inovasyon proje ekibini kurdum ve kaptanlığını üstleniyorum.',
        'ldr-club1-l3': 'Topluluk görünürlüğünü ve katılımı artırmak için tanıtım ve sosyal medya faaliyetlerini koordine ediyorum.',
        'prj-1-title': 'Teknofest 2026',
        'prj-1-tag': 'Proje Takım Kaptanı',
        'prj-1-desc': 'Disiplinlerarası işbirliği yoluyla yenilikçi teknoloji ve mühendislik çözümleri üretmeye odaklanan Teknofest proje ekibine liderlik ediyorum.',
        'ldr-club2-title': 'Google Developer Student Club (GDSC)',
        'ldr-club2-role': 'Sosyal Medya Sorumlusu | 2024',
        'ldr-club2-desc': 'Dijital stratejileri ve sosyal medya faaliyetlerini başarıyla yöneterek etkinlik erişimini artırdım ve kulüp görünürlüğünü güçlendirdim.',
        'prj-2-title': 'TÜBİTAK Projesi',
        'prj-2-tag': 'Proje Kaptanı | 2019',
        'prj-2-desc': 'Yaratıcılık, teknik yetkinlik ve problem çözme yeteneği sergileyen yenilikçi bir katılımla ulusal proje yarışmasında yer aldım ve jüri takdiri kazandım.',
        'ldr-club3-title': 'Tuğra Roket Takımı',
        'ldr-club3-role': 'Başkan Yardımcısı | 2024',
        'ldr-club3-desc': 'Teknofest Roket Yarışması\'na hazırlanan Tuğra Roket Takımı\'nda başkan yardımcısı olarak görev aldım, alt ekipleri koordine ettim ve roket tasarımına katkıda bulundum.',
        'ldr-club4-title': 'Tiyatro ve Müzik Kulübü',
        'ldr-club4-role': 'Aktif Üye',
        'ldr-club4-desc': 'Üniversite topluluğu bünyesinde tiyatro oyunlarında ve müzikal performanslarda aktif olarak yer alıyorum.',
        'sec-skills': 'Teknik & Profesyonel Yetenekler',
        'skill-cat-prog': 'Programlama Dilleri',
        'skill-cat-ai': 'Yapay Zeka & Veri Bilimi',
        'skill-cat-mobweb': 'Mobil & Web Geliştirme',
        'skill-cat-db': 'Veritabanı & Algoritmalar',
        'skill-cat-tools': 'Geliştirme Araçları',
        'skill-cat-prof': 'Yetkinlikler & Diller',
        'sec-references': 'Akademik & Profesyonel Referanslar',
        'ref-1-title': 'Bilgisayar Mühendisliği (İngilizce) Bölüm Başkanı',
        'ref-1-inst': 'Ankara Bilim Üniversitesi',
        'ref-2-title': 'Tıp Profesörü & KBB Uzmanı',
        'ref-2-inst': 'Klinik Yöneticisi & CRM Danışmanı',
        'sec-contact': 'İletişime Geçin',
        'contact-desc': 'Yeni projeleri, yaratıcı mühendislik fikirlerini veya kariyer fırsatlarını görüşmeye her zaman açığım.',
        'contact-loc': 'Ankara / Çankaya',
        'form-name': 'Adınız',
        'form-email': 'E-postanız',
        'form-msg': 'Mesajınız',
        'form-submit': 'Mesaj Gönder',
        'footer-text': '&copy; 2026 Hamit Güneş. Tutkuyla inşa edildi.'
    }
};

let currentLang = localStorage.getItem('lang') || 'en';

// Language Toggle Logic
const langBtn = document.getElementById('lang-toggle');
const updateTranslations = () => {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        // Handle cases where the element has an icon child
        if (translations[currentLang][key]) {
            const icon = el.querySelector('i');
            if (icon) {
                 el.innerHTML = '';
                 el.appendChild(icon);
                 el.appendChild(document.createTextNode(' ' + translations[currentLang][key]));
            } else {
                 el.innerHTML = translations[currentLang][key];
            }
        }
    });

    document.querySelectorAll('[data-i18n-hold]').forEach(el => {
        const key = el.getAttribute('data-i18n-hold');
        if (translations[currentLang][key]) {
            el.placeholder = translations[currentLang][key];
        }
    });

    langBtn.textContent = currentLang === 'en' ? 'TR' : 'EN';
};

if (langBtn) {
    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'tr' : 'en';
        localStorage.setItem('lang', currentLang);
        updateTranslations();
    });
}

// Mobile Menu Toggle
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.card, .timeline-item, .project-card, .skill-category, .stat-item, .reference-card');

const revealOnScroll = () => {
    for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = revealElements[i].getBoundingClientRect().top;
        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
            revealElements[i].style.opacity = "1";
            revealElements[i].style.transform = "translateY(0)";
        }
    }
};

revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "0.6s ease-out";
});

window.addEventListener('scroll', revealOnScroll);

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '10px 0';
        header.style.background = 'rgba(13, 15, 20, 0.95)';
    } else {
        header.style.padding = '0';
        header.style.background = 'rgba(13, 15, 20, 0.8)';
    }
});

// Run setup on load
window.addEventListener('load', () => {
    updateTranslations();
    const hash = window.location.hash;
    if (hash) {
        setTimeout(() => {
            const el = document.querySelector(hash);
            if (el) el.scrollIntoView();
        }, 100);
    }
    revealOnScroll();
});

// Form Submission handling (Modified for Formspree)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const btn = contactForm.querySelector('button');
        const originalText = btn.innerHTML;
        
        btn.innerHTML = currentLang === 'en' ? 'Sending...' : 'Gönderiliyor...';
        btn.disabled = true;

        fetch(event.target.action, {
            method: contactForm.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                btn.innerHTML = currentLang === 'en' ? 'Message Sent!' : 'Mesaj Gönderildi!';
                btn.style.background = '#10b981';
                contactForm.reset();
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.style.background = '';
                    btn.disabled = false;
                }, 3000);
            } else {
                // If API returns error, fallback to standard submission
                contactForm.submit();
            }
        }).catch(error => {
            // If AJAX fails (e.g. file:// protocol block), fallback to standard submission
            contactForm.submit();
        });
    });
}

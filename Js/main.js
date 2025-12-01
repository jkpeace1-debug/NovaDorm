// 햄버거 메뉴 토글
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// 네비게이션 링크 클릭 시 메뉴 닫기
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// 스크롤 시 네비게이션 배경 변경
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.backgroundColor = 'var(--bg-white)';
        navbar.style.backdropFilter = 'none';
    }
});

// 부드러운 스크롤
function scrollToTarget(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// 네비게이션 링크에 스크롤 이벤트 추가
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToTarget(targetId);
    });
});

// FAQ 토글 기능
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    question.addEventListener('click', () => {
        item.classList.toggle('active');
        
        if (item.classList.contains('active')) {
            answer.style.display = 'block';
        } else {
            answer.style.display = 'none';
        }
    });
});

// 폼 제출 처리 (연락처)
const simpleContactForm = document.getElementById('simpleContactForm');
if (simpleContactForm) {
    simpleContactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // 여기서 실제 폼 제출 로직 구현 (API 호출 등)
        console.log('문의 데이터:', data);
        
        // 성공 메시지 표시
        alert('문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
        this.reset();
    });
}

// IR 폼 제출 처리
const irForm = document.getElementById('irForm');
if (irForm) {
    irForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // 여기서 실제 폼 제출 로직 구현 (API 호출 등)
        console.log('IR 문의 데이터:', data);
        
        // 성공 메시지 표시
        alert('IR 문의가 접수되었습니다. 검토 후 연락드리겠습니다.');
        this.reset();
    });
}

// Coming Soon 애니메이션
const comingItems = document.querySelectorAll('.coming-item');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

comingItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(50px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
});

// 페이지 로드 시 애니메이션
window.addEventListener('load', () => {
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(50px)';
        heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
    
    if (heroImage) {
        heroImage.style.opacity = '0';
        heroImage.style.transform = 'translateY(50px)';
        heroImage.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            heroImage.style.opacity = '1';
            heroImage.style.transform = 'translateY(0)';
        }, 600);
    }
});

// 스크롤 애니메이션
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature-card, .facility-card, .program-card, .ir-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// 초기 상태 설정
const initializeAnimations = () => {
    const elements = document.querySelectorAll('.feature-card, .facility-card, .program-card, .ir-card');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
};

// 초기화 및 이벤트 리스너
initializeAnimations();
window.addEventListener('scroll', animateOnScroll);

// 폼 유효성 검사
const validateForm = (form) => {
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = 'var(--error-color)';
            isValid = false;
        } else {
            input.style.borderColor = 'var(--border-color)';
        }
    });
    
    return isValid;
};

// 입력 필드 포커스 시 스타일 제거
document.addEventListener('focus', (e) => {
    if (e.target.matches('input, select, textarea')) {
        e.target.style.borderColor = 'var(--border-color)';
    }
}, true);

// 모바일 메뉴 외부 클릭 시 닫기
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// 페이지 로드 시 초기 스크롤 애니메이션 실행
window.addEventListener('load', () => {
    setTimeout(animateOnScroll, 1000);
});
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(n) {
    if (slides.length === 0) return;
    
    if (n >= slides.length) {
        currentSlide = 0;
    }
    if (n < 0) {
        currentSlide = slides.length - 1;
    }
    
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    slides[currentSlide].classList.add('active');
    if (dots[currentSlide]) {
        dots[currentSlide].classList.add('active');
    }
}

function changeSlide(n) {
    currentSlide += n;
    showSlide(currentSlide);
}

function goToSlide(n) {
    currentSlide = n;
    showSlide(currentSlide);
}

function autoSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

if (slides.length > 0) {
    setInterval(autoSlide, 5000);
}

function showJoinForm() {
    alert('志愿者报名功能开发中，请拨打服务热线 400-888-6666 进行咨询');
}

function showRequestForm() {
    alert('用药需求提交功能开发中，请拨打服务热线 400-888-6666 进行咨询');
}

function showHealthForm() {
    alert('健康监测服务申请功能开发中，请拨打服务热线 400-888-6666 进行咨询');
}

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') {
                e.preventDefault();
            }
        });
    });
});

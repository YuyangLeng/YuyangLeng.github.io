document.addEventListener('DOMContentLoaded', function() {
    let header = document.querySelector('header');
    
    function animateHeader() {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(51, 51, 51, 0.9)';
        } else {
            header.style.background = '#333';
        }
    }
    
    window.addEventListener('scroll', animateHeader);
});
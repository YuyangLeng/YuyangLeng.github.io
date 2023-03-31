document.addEventListener('DOMContentLoaded', function() {
    let sectionList = document.querySelectorAll('section');
    
    function fadeInOnScroll() {
        let scrollPos = window.scrollY + window.innerHeight;
        
        sectionList.forEach(function(section) {
            if (scrollPos > section.offsetTop) {
                section.classList.add('fadeIn');
            }
        });
    }
    
    window.addEventListener('scroll', fadeInOnScroll);
});
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

document.addEventListener('DOMContentLoaded', function() {
    let sectionList = document.querySelectorAll('section');

    function fadeInOnScroll() {
        let scrollPos = window.scrollY + window.innerHeight;

        sectionList.forEach(function(section) {
            let items = section.querySelectorAll('li');
            items.forEach(function(item, index) {
                if (scrollPos > item.offsetTop + section.offsetTop) {
                    setTimeout(function() {
                        item.style.opacity = '1';
                    }, 150 * index);
                }
            });
        });
    }

    window.addEventListener('scroll', fadeInOnScroll);
});
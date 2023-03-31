document.addEventListener('DOMContentLoaded', function () {
  let sectionList = document.querySelectorAll('section');

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return rect.top <= windowHeight && rect.bottom >= 0;
  }

  function fadeInOnScroll() {
    sectionList.forEach(function (section) {
      let items = section.querySelectorAll('li');
      items.forEach(function (item, index) {
        if (isInViewport(item)) {
          setTimeout(function () {
            item.style.opacity = '1';
          }, 150 * index);
        }
      });
    });
  }

  window.addEventListener('scroll', fadeInOnScroll);
  fadeInOnScroll();
});
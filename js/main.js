document.addEventListener('DOMContentLoaded', function () {
  let items = document.querySelectorAll('section li');

  function fadeInOnScroll() {
    let windowHeight = window.innerHeight;
    items.forEach(function (item, index) {
      let itemPosition = item.getBoundingClientRect().top;
      if (itemPosition <= windowHeight - 50) {
        setTimeout(function () {
          item.style.opacity = '1';
        }, 150 * index);
      }
    });
  }

  window.addEventListener('scroll', fadeInOnScroll);
  fadeInOnScroll();
});
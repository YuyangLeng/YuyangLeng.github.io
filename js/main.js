document.addEventListener('DOMContentLoaded', function () {
  let sectionList = document.querySelectorAll("section");

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const html = document.documentElement;
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || html.clientHeight) &&
      rect.right <= (window.innerWidth || html.clientWidth)
    );
  }

  function fadeInOnScroll() {
    sectionList.forEach(function (section) {
      let items = section.querySelectorAll("li");
      items.forEach(function (item, index) {
        if (isInViewport(item)) {
          setTimeout(function () {
            item.style.opacity = "1";
          }, 150 * index);
        }
      });
    });
  }

  window.addEventListener("scroll", fadeInOnScroll);
  fadeInOnScroll();
});
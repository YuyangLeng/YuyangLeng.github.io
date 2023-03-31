document.addEventListener("DOMContentLoaded", function () {
  let sectionList = document.querySelectorAll("section");

  function fadeIn(item, index) {
    setTimeout(function () {
      item.style.opacity = "1";
    }, 150 * index);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll("li");
          items.forEach(fadeIn);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  sectionList.forEach((section) => {
    observer.observe(section);
  });
});
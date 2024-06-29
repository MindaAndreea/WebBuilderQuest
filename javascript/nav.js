document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".header-nav-button");
  const lists = document.querySelectorAll(
    ".header-nav-html-list, .header-nav-css-list, .header-nav-javascript-list"
  );
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const parent = button.parentNode;
      const list = parent.querySelector("ol");
      lists.forEach((l) => {
        if (l !== list) {
          l.style.display = "none";
          l.parentNode.classList.remove("active");
        }
      });
      list.style.display = list.style.display === "block" ? "none" : "block";
      parent.classList.toggle("active");
    });
  });
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".header-nav")) {
      lists.forEach((l) => {
        l.style.display = "none";
        l.parentNode.classList.remove("active");
      });
    }
  });
});

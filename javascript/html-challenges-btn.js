document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".btn");
  const mainSection = document.querySelector(".main");
  const hiddenElements = document.querySelector(".hidden-elements");

  btn.addEventListener("click", function () {
    mainSection.style.display = "none";

    hiddenElements.style.display = "block";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const returnBtn = document.querySelector(".return-to-main-btn");

  returnBtn.addEventListener("click", function () {
    window.location.href = "WebBuilderQuest.html";
  });
});

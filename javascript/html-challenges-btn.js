document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".btn");
  const mainSection = document.querySelector(".main");
  const hiddenElements = document.querySelector(".level-one");

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

document
  .getElementById("exerciseForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let exercise = document.getElementById("exercise").value;

    console.log("Exercise:", exercise);

    alert("Exercise submitted successfully!");
  });

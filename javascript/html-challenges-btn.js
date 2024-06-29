document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.querySelector(".main-introduction-button .btn");
  const mainPage = document.getElementById("main-page");
  const levels = document.querySelectorAll(".level");

  startButton.addEventListener("click", () => {
    mainPage.style.display = "none";
    document.getElementById("level-1").style.display = "block";
  });

  levels.forEach((level) => {
    const form = level.querySelector("form");
    const nextButton = level.querySelector(".next");
    const prevButton = level.querySelector(".previous");

    if (form) {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const currentLevelId = level.id;
        const nextLevelId = nextButton ? nextButton.dataset.next : null;
        if (nextLevelId) {
          document.getElementById(currentLevelId).style.display = "none";
          document.getElementById(nextLevelId).style.display = "block";
        } else {
          document.getElementById(currentLevelId).style.display = "none";
          document.getElementById("completionMessage").style.display = "block";
        }
      });
    }

    if (nextButton) {
      nextButton.addEventListener("click", () => {
        const currentLevelId = level.id;
        const nextLevelId = nextButton.dataset.next;
        if (nextLevelId) {
          document.getElementById(currentLevelId).style.display = "none";
          document.getElementById(nextLevelId).style.display = "block";
        }
      });
    }

    if (prevButton) {
      prevButton.addEventListener("click", () => {
        const currentLevelId = level.id;
        const prevLevelId = prevButton.dataset.prev;
        if (prevLevelId) {
          document.getElementById(currentLevelId).style.display = "none";
          document.getElementById(prevLevelId).style.display = "block";
        }
      });
    }
  });
});

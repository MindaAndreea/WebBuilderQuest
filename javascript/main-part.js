document.addEventListener("DOMContentLoaded", () => {
  const completionButton = document.getElementById("completionButton");
  const completionMessage = document.getElementById("completionMessage");

  let htmlChallengesCompleted = false;
  function checkHTMLCompletion() {
    htmlChallengesCompleted = true;

    if (htmlChallengesCompleted) {
      completionMessage.classList.remove("hidden");
    }
  }

  completionButton.addEventListener("click", () => {
    checkHTMLCompletion();
  });
});

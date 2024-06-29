document.addEventListener("DOMContentLoaded", () => {
    // Assuming you have a way to track completion of HTML challenges
    let htmlChallengesCompleted = false; // Set to true when all challenges are completed
  
    // Function to check if all HTML challenges are completed
    function checkHTMLCompletion() {
      // Logic to determine if all HTML challenges are completed
      // Replace with your actual completion tracking logic
      // Example condition:
      if (/* Condition to check if all HTML challenges are completed */) {
        htmlChallengesCompleted = true;
      }
  
      // Show completion message if all HTML challenges are completed
      const completionMessage = document.getElementById("completionMessage");
      if (htmlChallengesCompleted) {
        completionMessage.style.display = "block";
      }
    }
  
    // Example: Simulating completion after 5 seconds (replace with actual logic)
    setTimeout(() => {
      checkHTMLCompletion();
    }, 5000); // Simulating delay, replace with your actual logic or event handling
  
    // Event listener for navigation or other triggers that mark completion
    // Example: When clicking on a button to mark completion
    const completionButton = document.getElementById("completionButton");
    completionButton.addEventListener("click", () => {
      checkHTMLCompletion();
    });
  });
  
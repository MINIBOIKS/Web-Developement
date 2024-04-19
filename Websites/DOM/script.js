const greetingText = document.getElementById("greeting");
const changeButton = document.getElementById("changeButton");

changeButton.addEventListener("click", () => {
  if (greetingText.textContent === "Click the button below to change the greeting!") {
    greetingText.textContent = "Welcome back!";
  } else {
    greetingText.textContent = "Click the button below to change the greeting!";
  }
});


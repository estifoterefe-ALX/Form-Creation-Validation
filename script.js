document.addEventListener("DOMContentLoaded", function () {
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const form = document.getElementById('registration-form"');
  const feedbackDiv = document.getElementById("form-feedback");
  let isValid = true;
  let messages = [];
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (username.length < 3) {
      isValid = false;
      messages.push("username's length must be longer than 3");
    }
    if (!email.includes("@") && !email.includes(".")) {
      isValid = false;
      messages.push("email must be valid");
    }
    if (password.length < 8) {
      isValid = false;
      messages.push("password's length must be longer than 8");
    }
    feedbackDiv.style.display = "block";
    if (isValid) {
      feedbackDiv.innerText = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
    } else {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545";
    }
  });
});

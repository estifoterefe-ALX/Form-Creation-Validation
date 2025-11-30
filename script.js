document.addEventListener("DOMContentLoaded", function () {
  const userName = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const form = document.getElementById('registration-form"');
  const formFeedback = document.getElementById("form-feedback");
  let isValid = true;
  let messages = [];
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (userName.length < 3) {
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
    formFeedback.style.display = "block";
    if (isValid) {
      formFeedback.innerText = "Registration successful!";
      formFeedback.style.color = "#28a745";
    } else {
      formFeedback.innerHTML = message.join("<br>");
      formFeedback.style.color = "#dc3545";
    }
  });
});

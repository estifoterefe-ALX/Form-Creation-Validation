async function fetchUserData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const dataContainer = document.getElementById("api-data");
  try {
    const response = await fetch(apiUrl);
    const users = await response.json();
    dataContainer.innerHTML = "";
    const userList = `<ul>
    ${users.forEach((user) => {
      `<li>${user.name}</li>`;
    })}
    </ul>`;
    dataContainer.appendChild(document.createElement("ul")).innerHTML =
      userList;
  } catch (error) {
    dataContainer.innerHTML = "Failed to load user data.";
  }
}
document.addEventListener("DOMContentLoaded", function () {
  fetchUserData();
});

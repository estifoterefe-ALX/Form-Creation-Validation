async function fetchUserData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const dataContainer = document.getElementById("api-data");
  try {
    const response = await fetch(apiUrl);
    const users = await response.json();
    dataContainer.innerHTML = "";
    const userList = `<ul>
    ${users.forEach((user) => {
      `<li>${user}</li>`;
    })}
    </ul>`;
    dataContainer.innerHTML = userList;
  } catch (error) {
    dataContainer.innerHTML = "Failed to load user data.";
  }
}
document.addEventListener("DOMContentLoaded", function () {
  fetchUserData();
});

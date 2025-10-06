const menuIcon = document.getElementById("menu-icon");
const menuIcon2 = document.getElementById("menu-icon2");
const sidebar = document.getElementById("sidebar");

function toggleSidebar() {
  sidebar.classList.toggle("sidebar2");
  // sidebar.style.display = sidebar.style.display === "flex" ? "none" : "flex";
}
menuIcon.addEventListener("click", toggleSidebar);

function remSidebar() {
  sidebar.classList.remove("sidebar2");
}
menuIcon2.addEventListener("click", remSidebar);

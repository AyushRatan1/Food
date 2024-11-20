// Toggle the mobile navigation menu
function toggleMenu() {
  const nav = document.getElementById("mobile-nav");
  nav.style.display = nav.style.display === "block" ? "none" : "block";
}

// Open and close popups for mobile
function openPopup() {
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function closeRecipeDetails() {
  document.getElementById("recipeDetailsBox").style.display = "none";
}

// Ensure smooth scrolling to the top for mobile devices
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

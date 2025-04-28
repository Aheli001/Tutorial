// Define the global docs object
const docs = {};

function loadContent(page) {
  const container = document.getElementById("content-container");
  container.innerHTML = docs[page] || `<div style="display:flex; justify-content: center; align-items:center;"><h1>Content Coming Soon</h1></div>`;
}

// Load 'roadmap' content by default when the page loads
window.onload = function () {
  loadContent("home");
};

function goToPreviousPage() {
  // Goes back one page in history
  window.history.back();
}

function goToNextPage() {
  // Goes forward one page in history
  window.history.forward();
}

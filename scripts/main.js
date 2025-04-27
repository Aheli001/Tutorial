// Define the global docs object
const docs = {};

function loadContent(page) {
  const container = document.getElementById("content-container");
  container.innerHTML = docs[page] || "<h1>Content Not Found</h1>";
}

function copyCode() {
    const code = document.getElementById("reactCode").innerText;
    navigator.clipboard.writeText(code).then(() => {});
  }

// Load 'roadmap' content by default when the page loads
window.onload = function () {
  loadContent("roadmap");
};

function goToPreviousPage() {
  // Goes back one page in history
  window.history.back();
}

function goToNextPage() {
  // Goes forward one page in history
  window.history.forward();
}

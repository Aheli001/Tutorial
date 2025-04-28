// Define the global docs object
const docs = {};

// Variable to store the sidebar data once loaded
let sidebarData = [];

// Track current page
let currentPage = "home";

function loadContent(page) {
  currentPage = page;
  const container = document.getElementById("content-container");
  container.innerHTML = docs[page] || `<div style="display:flex; justify-content: center; align-items:center;"><h1>Content Coming Soon</h1></div>`;
  
  // Update navigation button states
  updateNavigationButtons();
}

// Function to load the sidebar data from external JSON file
async function loadSidebarData() {
  try {
    const response = await fetch('sideBarData.json') // Adjust the path to your JSON file
      ;
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    sidebarData = data;
    return data;
  } catch (error) {
    console.error('Error loading sidebar data:', error);
    // Fallback to empty array if loading fails
    sidebarData = [];
    return [];
  }
}

// Initialize the application when the page loads
window.onload = function() {
  // First load the sidebar data, then initialize the page
  loadSidebarData().then(() => {
    loadContent("home");
  });
};

function goToPreviousPage() {
  // Find the current page index in the sidebar data
  const currentIndex = sidebarData.findIndex(item => item.page === currentPage);
  
  if (currentIndex > 0) {
    // Navigate to previous page
    loadContent(sidebarData[currentIndex - 1].page);
  }
}

function goToNextPage() {
  // Find the current page index in the sidebar data
  const currentIndex = sidebarData.findIndex(item => item.page === currentPage);
  
  if (currentIndex < sidebarData.length - 1) {
    // Navigate to next page
    loadContent(sidebarData[currentIndex + 1].page);
  }
}

function updateNavigationButtons() {
  // Find the current page index in the sidebar data
  const currentIndex = sidebarData.findIndex(item => item.page === currentPage);
  
  // Disable previous button if we're on the first page
  const prevButton = document.getElementById("prev-button");
  if (prevButton) {
    prevButton.disabled = currentIndex === 0;
  }
  
  // Disable next button if we're on the last page
  const nextButton = document.getElementById("next-button");
  if (nextButton) {
    nextButton.disabled = currentIndex === sidebarData.length - 1;
  }
}
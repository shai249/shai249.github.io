// Function to open image modal with any image
function openImageModal(imageElement) {
  const modal = document.getElementById("fullscreenModal");
  const modalImage = document.getElementById("fullscreenImage");

  // Set the modal image source and alt text from the clicked image
  modalImage.src = imageElement.src;
  modalImage.alt = imageElement.alt;

  // Show the modal
  modal.style.display = "flex";
}

// Original function for the credit button (shows Shavit and dildo animation)
function openFullscreen() {
  // Show the Shavit animation
  const animation = document.getElementById("shavitAnimation");
  animation.classList.add("show");
}

// Function to close the Shavit animation
function closeShavitAnimation() {
  const animation = document.getElementById("shavitAnimation");
  animation.classList.remove("show");
}

// Add event listeners when the page loads
document.addEventListener('DOMContentLoaded', function() {
  const animation = document.getElementById("shavitAnimation");
  
  // Close animation when clicking on it
  animation.addEventListener('click', closeShavitAnimation);
  
  // Close animation when pressing Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && animation.classList.contains('show')) {
      closeShavitAnimation();
    }
  });
});

function closeFullscreen(event) {
  if (event) {
    event.stopPropagation(); // prevent bubbling from closing if button is clicked
  }
  document.getElementById("fullscreenModal").style.display = "none";
}

// Hide on background click
document.getElementById("fullscreenModal").addEventListener("click", () => {
  document.getElementById("fullscreenModal").style.display = "none";
});

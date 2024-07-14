const images = [
  "https://picsum.photos/id/25/400/300",
  "https://picsum.photos/id/26/400/300",
  "https://picsum.photos/id/27/400/300",
  "https://picsum.photos/id/28/400/300",
  "https://picsum.photos/id/29/400/300",
];
let currentIndex = 0;

function updateImage(newIndex) {
  if (newIndex < 0 || newIndex >= images.length) return;

  if (!document.startViewTransition) {
      updateDOM(newIndex);
      return;
  }

  document.startViewTransition(() => updateDOM(newIndex));
}

function updateDOM(newIndex) {
  const img = document.getElementById('hero-image');
  img.src = images[newIndex];
  img.alt = `Image ${newIndex + 1}`;
  currentIndex = newIndex;
  updateButtons();
  updateThumbnails();
}

function previousImage() {
  updateImage(currentIndex - 1);
}

function nextImage() {
  updateImage(currentIndex + 1);
}

function updateButtons() {
  document.getElementById('prevBtn').disabled = currentIndex === 0;
  document.getElementById('nextBtn').disabled = currentIndex === images.length - 1;
}

function createThumbnails() {
  const thumbnailsContainer = document.getElementById('thumbnails');
  images.forEach((src, index) => {
      const thumbnail = document.createElement('img');
      thumbnail.src = src;
      thumbnail.alt = `Thumbnail ${index + 1}`;
      thumbnail.className = 'thumbnail';
      thumbnail.onclick = () => updateImage(index);
      thumbnailsContainer.appendChild(thumbnail);
  });
}

function updateThumbnails() {
  const thumbnails = document.querySelectorAll('.thumbnail');
  thumbnails.forEach((thumb, index) => {
      thumb.classList.toggle('active', index === currentIndex);
  });
}

// Initialize
createThumbnails();
updateButtons();
updateThumbnails();
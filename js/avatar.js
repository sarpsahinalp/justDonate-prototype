// Simple script to update avatar preview
document.addEventListener('DOMContentLoaded', function () {
  const avatarImage = document.getElementById('avatarImage');
  const hairStyleSelect = document.getElementById('hairStyle');
  const outfitSelect = document.getElementById('outfit');

  hairStyleSelect.addEventListener('change', updateAvatar);
  outfitSelect.addEventListener('change', updateAvatar);

  function updateAvatar() {
    // This is a simplified example. In a real application,
    // you would layer images or use a canvas to compose the avatar.

    // Placeholder code to change avatar image source
    let hair = hairStyleSelect.value;
    let outfit = outfitSelect.value;

    // For demonstration purposes, we're just changing the avatar image to a static image.
    // You would implement the logic to combine hair and outfit selections here.
    avatarImage.src = 'combined_avatar.png'; // Placeholder image
  }
});

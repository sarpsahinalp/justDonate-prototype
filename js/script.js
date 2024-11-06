// Avatar Customization Script
document.addEventListener('DOMContentLoaded', function () {
  const avatarImage = document.getElementById('avatarImage');
  const hairStyleSelect = document.getElementById('hairStyle');
  const outfitSelect = document.getElementById('outfit');

  // Store selected options
  let selectedHair = '';
  let selectedOutfit = '';

  hairStyleSelect.addEventListener('change', updateAvatar);
  outfitSelect.addEventListener('change', updateAvatar);

  function updateAvatar() {
    selectedHair = hairStyleSelect.value;
    selectedOutfit = outfitSelect.value;

    // Simple way to update avatar image source
    // In a real application, you'd layer images or use canvas
    if (selectedHair && selectedOutfit) {
      avatarImage.src = `images/${selectedHair}_${selectedOutfit}.png`;
    } else if (selectedHair) {
      avatarImage.src = `images/${selectedHair}`;
    } else if (selectedOutfit) {
      avatarImage.src = `images/${selectedOutfit}`;
    } else {
      avatarImage.src = 'images/avatar_base.png';
    }
  }
});

// Map Interaction Script
document.addEventListener('DOMContentLoaded', function () {
  const checkpoints = document.querySelectorAll('.checkpoint');

  checkpoints.forEach(function (checkpoint) {
    checkpoint.addEventListener('click', function () {
      const checkpointNumber = this.getAttribute('data-checkpoint');
      alert(`You clicked on Checkpoint ${checkpointNumber}`);
      // You can expand this function to show checkpoint details or trigger donations
    });
  });
});

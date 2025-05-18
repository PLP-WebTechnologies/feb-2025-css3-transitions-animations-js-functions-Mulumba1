document.addEventListener("DOMContentLoaded", () => {
  const box = document.getElementById("box");
  const animateBtn = document.getElementById("animateBtn");
  const colorPicker = document.getElementById("colorPicker");
  const saveColorBtn = document.getElementById("saveColorBtn");

  // Load saved color from localStorage on page load
  const savedColor = localStorage.getItem("favoriteColor");
  if (savedColor) {
    box.style.backgroundColor = savedColor;
    colorPicker.value = savedColor;
  }

  // Animate box on button click
  animateBtn.addEventListener("click", () => {
    box.classList.remove("animate", "bounce");
    void box.offsetWidth; // Force reflow
    box.classList.add("animate", "bounce");
  });

  // Save selected color to localStorage
  saveColorBtn.addEventListener("click", () => {
    const color = colorPicker.value;
    localStorage.setItem("favoriteColor", color);
    box.style.backgroundColor = color;
    alert("Color saved!");
  });
});
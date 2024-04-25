document.addEventListener("DOMContentLoaded", function () {
    const sparkleCount = 200;
    const baseSize = 10;
    const maxSparkleCount = 500;
    const container = document.querySelector(".sparkle-container");
  
    function generateSparkles() {
      container.innerHTML = "";
      const actualSparkleCount = Math.min(sparkleCount, maxSparkleCount);
      for (let i = 0; i < actualSparkleCount; i++) {
        const sparkle = document.createElement("div");
        sparkle.classList.add("sparkle");
        container.appendChild(sparkle);
        applyStyles(sparkle);
      }
    }
  
    function applyStyles(sparkle) {
      const size = Math.random() * baseSize + 1;
      const left = Math.random() * 100 + "%";
      const top = Math.random() * 100 + "%";
      const duration = Math.random() * 5 + 8; // Further increased duration for slower twinkling
      const delay = Math.random() * 5;
      sparkle.style.width = size + "px";
      sparkle.style.height = size + "px";
      sparkle.style.left = left;
      sparkle.style.top = top;
      sparkle.style.animationDuration = duration + "s";
      sparkle.style.animationDelay = delay + "s";
      sparkle.style.transition = "opacity 2s ease-in-out"; // Smoother transition for opacity change
      updateVisibility(sparkle);
    }
  
    function updateVisibility(sparkle) {
      function animate() {
        sparkle.style.opacity = Math.random() > 0.5 ? 0 : 1; // Slower and more distinct visibility change
        setTimeout(animate, 2000 + Math.random() * 3000); // Random delay for each cycle between 2 and 5 seconds
      }
      animate();
    }
  
    generateSparkles();
  });
  
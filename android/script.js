// ====== Material You Dynamic Theme Simulation ======
document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const dynamicColors = [
    "#4CAF50", "#03A9F4", "#FF9800", "#9C27B0", "#E91E63"
  ];

  // Cycle through theme colors every few seconds
  let i = 0;
  setInterval(() => {
    root.style.setProperty("--color-primary", dynamicColors[i]);
    document.body.style.background = `linear-gradient(135deg, ${dynamicColors[i]}44, #101820)`;
    i = (i + 1) % dynamicColors.length;
  }, 6000);
});

// ====== Ripple Effect ======
document.querySelectorAll(".ripple").forEach((el) => {
  el.addEventListener("click", function (e) {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple-circle");
    ripple.style.left = e.clientX - e.target.offsetLeft + "px";
    ripple.style.top = e.clientY - e.target.offsetTop + "px";
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});

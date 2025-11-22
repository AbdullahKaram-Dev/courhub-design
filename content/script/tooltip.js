document.addEventListener("DOMContentLoaded", function () {
  const tooltips = document.querySelectorAll(".info-input");

  tooltips.forEach((tooltip) => {
    const icon = tooltip.querySelector(".tooltip-icon");
    const tooltipBox = tooltip.querySelector(".tooltip");

    icon.addEventListener("mouseenter", function () {
      const iconRect = icon.getBoundingClientRect();
      const tooltipWidth = tooltipBox.offsetWidth;
      const tooltipHeight = tooltipBox.offsetHeight;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Reset positioning first
      tooltipBox.style.left = "50%";
      tooltipBox.style.transform = "translateX(-50%)";
      tooltipBox.style.top = "calc(100% + 10px)";

      // Horizontal positioning
      if (iconRect.left + tooltipWidth / 2 > viewportWidth) {
        tooltipBox.style.left = "auto";
        tooltipBox.style.right = "0";
        tooltipBox.style.transform = "translateX(0)";
      } else if (iconRect.left - tooltipWidth / 2 < 0) {
        tooltipBox.style.left = "0";
        tooltipBox.style.transform = "translateX(0)";
      }

      // Vertical positioning
      if (iconRect.bottom + tooltipHeight > viewportHeight) {
        tooltipBox.style.top = "auto";
        tooltipBox.style.bottom = "calc(100% + 10px)";
      }
    });
  });
});

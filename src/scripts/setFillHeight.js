const setFillHeight = () => {
  const viewHieght = window.innerHeight * 0.01;
  document.documentElement.style.setProperty(
    "--view-height",
    `${viewHieght}px`
  );
};

window.addEventListener("load", () => {
  setFillHeight();
});

window.addEventListener("resize", () => {
  setFillHeight();
});

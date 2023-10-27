const $headerHeight = document.querySelector(".header").clientHeight;
const $footerHeight = document.querySelector(".footer").clientHeight;

const setMainContentHeight = () => {
  document.documentElement.style.setProperty(
    "--header-height",
    `${$headerHeight}px`
  );
  document.documentElement.style.setProperty(
    "--footer-height",
    `${$footerHeight}px`
  );
};

window.addEventListener("load", () => {
  setMainContentHeight();
});

window.addEventListener("resize", () => {
  setMainContentHeight();
});

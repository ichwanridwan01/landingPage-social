let checkbox = document.querySelector("input[name=checkbox]");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    mode();
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    mode();
    document.documentElement.setAttribute("data-theme", "light");
  }
});

let mode = () => {
  document.documentElement.classList.add("move");
  window.setTimeout(() => {
    document.documentElement.classList.remove("move");
  }, 1000);
};

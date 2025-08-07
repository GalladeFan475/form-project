const light = document.querySelector(".light-button");
const dark = document.querySelector(".dark-button");
const root = document.documentElement;

dark.addEventListener("click", () => {
  root.style.setProperty("--text-color", "rgba(235, 226, 226, 0.545)"),
    root.style.setProperty("--hf-background-color", "black"),
    root.style.setProperty("--form-color", "white"),
    root.style.setProperty("--form-background-color", "rgb(108, 103, 103)");
});

light.addEventListener("click", () => {
  root.style.setProperty("--text-color", "black"),
    root.style.setProperty(
      "--hf-background-color",
      "rgba(235, 226, 226, 0.545)"
    ),
    root.style.setProperty("--form-color", "rgb(108, 103, 103)"),
    root.style.setProperty("--form-background-color", "white");
});

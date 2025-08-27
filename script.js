const light = document.querySelector(".light-button");
const dark = document.querySelector(".dark-button");
const root = document.documentElement;

dark.addEventListener("click", () => {
  root.style.setProperty("--text-color", "#f9fafb"),
    root.style.setProperty("--hf-background-color", "black"),
    root.style.setProperty("--form-color", "white"),
    root.style.setProperty("--form-background-color", "#5f6670");
});

light.addEventListener("click", () => {
  root.style.setProperty("--text-color", "black"),
    root.style.setProperty("--hf-background-color", "#f9fafb"),
    root.style.setProperty("--form-color", "#5f6670"),
    root.style.setProperty("--form-background-color", "white");
});

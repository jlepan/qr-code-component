import { toggleMode } from "./functions/toggleMode.js";
import { applySavedMode } from "./functions/applySavedMode.js";

const body = document.querySelector("body");
const button = document.querySelector(".toggle-mode");

applySavedMode(body, button);

button.addEventListener("click", (e) => {
    toggleMode(body, button);
})
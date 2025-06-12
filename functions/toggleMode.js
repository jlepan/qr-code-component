import { updateModeLocalStorage } from "./updateModeLocalStorage.js";

/**
 * Alterne entre les modes sombre et clair pour le body.
 * Met à jour le texte du bouton selon le mode activé.
 * Appelle la fonction de mise à jour du localStorage.
 *
 * @param {HTMLElement} body - L'élément <body> du document.
 * @param {HTMLElement} button - Le bouton qui permet de changer le mode.
 */

export function toggleMode(body, button) {
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");
    if (body.classList.contains("dark-mode")) {
        button.textContent = "Dark mode 🌙"
    } else {
        button.textContent = "Light mode 🌞"
    }

    updateModeLocalStorage(body)
}
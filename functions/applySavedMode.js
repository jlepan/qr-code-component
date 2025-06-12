/**
 * Applique le mode enregistré dans le localStorage au chargement de la page.
 * Si le mode enregistré est "dark-mode", il l'active et ajuste le texte du bouton.
 *
 * @param {HTMLElement} body - L'élément <body> du document.
 * @param {HTMLElement} button - Le bouton à mettre à jour.
 */

export function applySavedMode(body, button) {
    const savedMode = localStorage.getItem("currentMode");

    if (savedMode === "dark-mode") {
        body.classList.add(savedMode);
        body.classList.remove("light-mode");
        button.textContent = "Dark mode 🌙"
    }
}
/**
 * Sauvegarde dans le localStorage le mode actuel du site (clair ou sombre).
 *
 * @param {HTMLElement} body - L'élément <body> dont on vérifie la classe.
 */

export function updateModeLocalStorage(body) {
    const newMode = body.classList.contains("dark-mode") ? "dark-mode" : "light-mode";

    localStorage.setItem("currentMode", newMode)
}
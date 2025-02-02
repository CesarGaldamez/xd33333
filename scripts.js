// scripts.js
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        const button = document.createElement("button");
        button.textContent = "Mostrar Ejemplo";
        section.appendChild(button);

        const example = section.querySelector("p:last-of-type");
        example.style.display = "none";

        button.addEventListener("click", () => {
            if (example.style.display === "none") {
                example.style.display = "block";
                button.textContent = "Ocultar Ejemplo";
            } else {
                example.style.display = "none";
                button.textContent = "Mostrar Ejemplo";
            }
        });
    });
});

// ======== VALIDATION FORMULAIRE ==========
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const stars = document.querySelectorAll(".star-rating input");
    const labels = document.querySelectorAll(".star-rating label");

    form.addEventListener("submit", function (event) {
        let valid = true;

        // Vérifie les champs requis
        form.querySelectorAll("[required]").forEach((input) => {
            if (!input.value.trim()) {
                input.style.border = "2px solid #ff4d4d";
                valid = false;
            } else {
                input.style.border = "1px solid rgba(255,255,255,0.3)";
            }
        });

        // Vérifie au moins une case cochée
        const oneChecked = Array.from(checkboxes).some((cb) => cb.checked);
        const checkboxContainer = document.querySelector(".checkboxes");

        if (!oneChecked) {
            checkboxContainer.style.border = "2px solid #ff4d4d";
            valid = false;
        } else {
            checkboxContainer.style.border = "none";
        }

        if (!valid) {
            event.preventDefault();
            alert("Merci de bien remplir tous les champs obligatoires et de sélectionner au moins un style de photo.");
            return false;
        }

        // Si tout est ok, petit effet avant reset
        form.classList.add("form-sent");
        setTimeout(() => {
            form.reset();
            labels.forEach((label) => (label.style.color = "#fff"));
        }, 1000);
    });

    // ======== SYSTÈME D'ÉTOILES ==========
    stars.forEach((star) => {
        star.addEventListener("change", function () {
            const value = parseInt(this.value);
            labels.forEach((label, index) => {
                if (index < value) {
                    label.style.color = "#FFD700";
                    label.style.textShadow = "0 0 10px rgba(255,215,0,0.8)";
                    label.style.transform = "scale(1.2)";
                } else {
                    label.style.color = "#fff";
                    label.style.textShadow = "none";
                    label.style.transform = "scale(1)";
                }
            });
        });
    });

    // ======== SURVOL ÉTOILES ==========
    labels.forEach((label, index) => {
        label.addEventListener("mouseenter", function () {
            for (let i = 0; i <= index; i++) {
                labels[i].style.color = "#FFD700";
                labels[i].style.textShadow = "0 0 8px rgba(255,215,0,0.6)";
                labels[i].style.transform = "scale(1.15)";
            }
        });

        label.addEventListener("mouseleave", function () {
            stars.forEach((star, i) => {
                if (!star.checked) {
                    labels[i].style.color = "#fff";
                    labels[i].style.textShadow = "none";
                    labels[i].style.transform = "scale(1)";
                }
            });
        });
    });
});

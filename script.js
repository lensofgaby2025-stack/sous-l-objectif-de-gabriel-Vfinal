document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const stars = document.querySelectorAll('.star-rating label');
    const checkboxes = document.querySelectorAll('.checkbox-label input[type="checkbox"]');

    form.addEventListener('submit', (e) => {
        let valid = true;
        form.querySelectorAll('input[required], textarea[required]').forEach(field => {
            if (!field.value.trim()) {
                field.style.borderColor = '#f87171';
                valid = false;
            } else {
                field.style.borderColor = 'rgba(255,255,255,0.3)';
            }
        });

        const oneChecked = Array.from(checkboxes).some(chk => chk.checked);
        if (!oneChecked) {
            alert('Veuillez sélectionner au moins un style de photo.');
            valid = false;
        }

        if (!valid) {
            e.preventDefault();
            return;
        }

        alert('Merci ! Votre message a été envoyé avec succès.');
    });

    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            stars.forEach((s, i) => {
                if (i <= index) s.classList.add('active');
                else s.classList.remove('active');
            });
        });
    });
});

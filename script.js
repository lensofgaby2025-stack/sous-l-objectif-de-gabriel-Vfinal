// Script pour étoiles interactives (naturelles) + barre de progression + autres
document.addEventListener('DOMContentLoaded', function() {
    // Étoiles : Hover et sélection (style naturel)
    const stars = document.querySelectorAll('.star-rating label');
    const progressContainer = document.querySelector('.progress-container');
    const progressFill = document.querySelector('.progress-fill');
    let selectedValue = 0; // Pour tracker la sélection

    stars.forEach((star, index) => {
        // Hover : Allume les étoiles jusqu'à celle-ci (naturel)
        star.addEventListener('mouseover', function() {
            stars.forEach((s, i) => {
                if (i <= index) {
                    s.style.color = '#fbbf24'; // Or doux
                    s.style.textShadow = '0 0 8px rgba(251, 191, 36, 0.3)';
                    s.style.transform = 'scale(1.1)';
                } else {
                    s.style.color = '#a5b4fc'; // Bleu pour vides
                    s.style.textShadow = 'none';
                    s.style.transform = 'scale(1)';
                }
            });
        });
        
        // Clic : Sélectionne et met à jour la barre
        star.addEventListener('click', function() {
            const radio = document.getElementById(`star${index + 1}`);
            radio.checked = true;
            selectedValue = parseInt(radio.value);
            updateProgressBar(selectedValue);
        });
        
        // Sortie hover : Reset sauf si sélectionné
        star.addEventListener('mouseout', function() {
            if (selectedValue === 0) {
                // Pas de sélection : tout reset
                stars.forEach(s => {
                    s.style.color = '#a5b4fc';
                    s.style.textShadow = 'none';
                    s.style.transform = 'scale(1)';
                });
                progressContainer.classList.remove('visible');
                progressFill.style.width = '0%';
            } else {
                // Sélectionné : Garde les étoiles remplies jusqu'à selectedValue
                stars.forEach((s, i) => {
                    if (i < selectedValue) {
                        s.style.color = '#f59e0b'; // Or rempli
                        s.style.textShadow = '0 0 8px rgba(251, 191, 36, 0.3)';
                        s.style.transform = 'scale(1.1)';
                    } else {
                        s.style.color = '#a5b4fc';
                        s.style.textShadow = 'none';
                        s.style.transform = 'scale(1)';
                    }
                });
            }
        });
    });

    // Fonction pour updater la barre (pourcentage basé sur étoiles)
    function updateProgressBar(value) {
        const percentage = (value / 5) * 100;
        progressFill.style.width = percentage + '%';
        progressContainer.classList.add('visible'); // Affiche la barre
        console.log('Niveau sélectionné : ' + value + ' étoiles (' + percentage + '%)'); // Debug, enlève si pas besoin
    }

    // Sur changement radio (pour compatibilité)
    const radios = document.querySelectorAll('input[name="note"]');
    radios.forEach(radio => {
        radio.addEventListener('change', function() {
            selectedValue = parseInt(this.value);
            updateProgressBar(selectedValue);
        });
    });

    // Confirmation après submit (optionnel)
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function() {
            const note = document.querySelector('input[name="note"]:checked');
            if (note) {
                console.log('Note envoyée : ' + note.value + ' étoiles');
            }
        });
    }
});

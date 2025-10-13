// Script complet pour le site : Étoiles left-to-right, animations checkboxes, progress bar, et confirmation submit
document.addEventListener('DOMContentLoaded', function() {
    // Étoiles : Hover et sélection left-to-right (de gauche à droite)
    const stars = document.querySelectorAll('.star-rating label');
    const progressContainer = document.querySelector('.progress-container');
    const progressFill = document.querySelector('.progress-fill');
    let selectedValue = 0;

    if (stars.length > 0) {
        stars.forEach((star, index) => {
            // Hover : Allume les étoiles de gauche à droite jusqu'à l'index survolé
            star.addEventListener('mouseover', function() {
                stars.forEach((s, i) => {
                    if (i <= index) {
                        s.style.color = '#fbbf24'; // Or doux pour allumées
                        s.style.textShadow = '0 0 8px rgba(251, 191, 36, 0.3)';
                        s.style.transform = 'scale(1.1)';
                    } else {
                        s.style.color = '#a5b4fc'; // Bleu pour non allumées
                        s.style.textShadow = 'none';
                        s.style.transform = 'scale(1)';
                    }
                });
            });
            
            // Clic : Sélectionne la radio et met à jour la barre
            star.addEventListener('click', function() {
                const radioId = `star${index + 1}`;
                const radio = document.getElementById(radioId);
                if (radio) {
                    radio.checked = true;
                    selectedValue = parseInt(radio.value);
                    updateProgressBar(selectedValue);
                    // Met à jour l'affichage des étoiles sélectionnées
                    stars.forEach((s, i) => {
                        if (i < selectedValue) {
                            s.style.color = '#f59e0b'; // Or rempli pour sélectionnées
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
            
            // Sortie hover : Reset si pas sélectionné, sinon garde la sélection
            star.addEventListener('mouseout', function() {
                if (selectedValue === 0) {
                    // Reset total si rien sélectionné
                    stars.forEach(s => {
                        s.style.color = '#a5b4fc';
                        s.style.textShadow = 'none';
                        s.style.transform = 'scale(1)';
                    });
                    if (progressContainer) progressContainer.classList.remove('visible');
                    if (progressFill) progressFill.style.width = '0%';
                } else {
                    // Garde les étoiles sélectionnées de gauche à droite
                    stars.forEach((s, i) => {
                        if (i < selectedValue) {
                            s.style.color = '#f59e0b';
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

        // Fonction pour mettre à jour la barre de progression
        function updateProgressBar(value) {
            if (progressFill) {
                const percentage = (value / 5) * 100;
                progressFill.style.width = percentage + '%';
            }
            if (progressContainer) {
                progressContainer.classList.add('visible');
            }
            console.log('Niveau sélectionné : ' + value + ' étoiles (' + Math.round((value / 5) * 100) + '%)'); // Debug optionnel
        }

        // Backup sur changement radio (pour compatibilité clavier/touch)
        const radios = document.querySelectorAll('input[name="note"]');
        radios.forEach(radio => {
            radio.addEventListener('change', function() {
                selectedValue = parseInt(this.value);
                updateProgressBar(selectedValue);
            });
        });
    }

    // Animations pour Checkboxes (hover déjà en CSS ; JS pour coche extra feedback)
    const checkboxLabels = document.querySelectorAll('.checkbox-label');
    checkboxLabels.forEach(label => {
        const checkbox = label.querySelector('input[type="checkbox"]');
        if (checkbox) {
            // Sur coche : Ajoute classe pour animation CSS (bounce + glow)
            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    label.classList.add('checked');
                    // Extra JS : Petit délai pour rebond (complète CSS)
                    setTimeout(() => {
                        label.style.transform = 'scale(1.05)';
                    }, 100);
                    setTimeout(() => {
                        label.style.transform = 'scale(1)';
                    }, 600);
                } else {
                    label.classList.remove('checked');
                }
            });
        }
    });

    // Confirmation après submit formulaire (optionnel, pour debug)
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            const note = document.querySelector('input[name="note"]:checked');
            if (note) {
                console.log('Note envoyée via Formspree : ' + note.value + ' étoiles');
            }
            // Pas de preventDefault – laisse Formspree gérer l'envoi
        });
    }

    // Autres fonctionnalités futures (vide pour l'instant)
    // Ex. : Si tu ajoutes plus de JS (ex. lightbox pour galeries), ajoute ici
});

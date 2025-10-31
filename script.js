// Script complet : Étoiles, checkboxes, ET rotation interactive Polaroids (opposée à souris)
document.addEventListener('DOMContentLoaded', function() {
    // Étoiles left-to-right
    const stars = document.querySelectorAll('.star-rating label');
    const progressContainer = document.querySelector('.progress-container');
    const progressFill = document.querySelector('.progress-fill');
    let selectedValue = 0;

    if (stars.length > 0) {
        stars.forEach((star, index) => {
            star.addEventListener('mouseover', function() {
                stars.forEach((s, i) => {
                    if (i <= index) {
                        s.style.color = '#fbbf24';
                        s.style.textShadow = '0 0 8px rgba(251, 191, 36, 0.3)';
                        s.style.transform = 'scale(1.1)';
                    } else {
                        s.style.color = '#a5b4fc';
                        s.style.textShadow = 'none';
                        s.style.transform = 'scale(1)';
                    }
                });
            });
            
            star.addEventListener('click', function() {
                const radioId = `star${index + 1}`;
                const radio = document.getElementById(radioId);
                if (radio) {
                    radio.checked = true;
                    selectedValue = parseInt(radio.value);
                    updateProgressBar(selectedValue);
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
            
            star.addEventListener('mouseout', function() {
                if (selectedValue === 0) {
                    stars.forEach(s => {
                        s.style.color = '#a5b4fc';
                        s.style.textShadow = 'none';
                        s.style.transform = 'scale(1)';
                    });
                    if (progressContainer) progressContainer.classList.remove('visible');
                    if (progressFill) progressFill.style.width = '0%';
                } else {
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

        function updateProgressBar(value) {
            if (progressFill) progressFill.style.width = (value / 5) * 100 + '%';
            if (progressContainer) progressContainer.classList.add('visible');
        }

        const radios = document.querySelectorAll('input[name="note"]');
        radios.forEach(radio => radio.addEventListener('change', function() {
            selectedValue = parseInt(this.value);
            updateProgressBar(selectedValue);
        }));
    }

    // Checkboxes
    const checkboxLabels = document.querySelectorAll('.checkbox-label');
    checkboxLabels.forEach(label => {
        const checkbox = label.querySelector('input[type="checkbox"]');
        if (checkbox) {
            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    label.classList.add('checked');
                    setTimeout(() => label.style.transform = 'scale(1.05)', 100);
                    setTimeout(() => label.style.transform = 'scale(1)', 600);
                } else label.classList.remove('checked');
            });
        }
    });

    // Rotation interactive Polaroids (opposée à souris – fixée et testée)
    const polaroids = document.querySelectorAll('.polaroid:not(.large-empty)'); // Seulement photos
    const maxTiltX = 6; // Max opposée (degrés)
    const maxTiltY = 3; // Tilt subtil
    let throttleTimer;

    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    polaroids.forEach(polaroid => {
        polaroid.addEventListener('mousemove', throttle(function(e) {
            const rect = this.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // Position relative au centre (-1 à +1)
            const mouseX = (e.clientX - centerX) / (rect.width / 2);
            const mouseY = (e.clientY - centerY) / (rect.height / 2);

            // Rotation opposée : Souris droite (mouseX > 0) → tourne gauche (tiltX négatif)
            const tiltX = -mouseX * maxTiltX; // Opposé horizontal
            const tiltY = mouseY * maxTiltY; // Vertical subtil

            const originalRotation = getComputedStyle(this).getPropertyValue('--rotation') || 0;
            this.style.transform = `rotateY(${tiltX}deg) rotateX(${tiltY}deg) rotate(${originalRotation}deg) scale(1.02)`;
        }, 16)); // 60fps throttle

        polaroid.addEventListener('mouseleave', function() {
            const originalRotation = getComputedStyle(this).getPropertyValue('--rotation') || 0;
            this.style.transform = `rotate(${originalRotation}deg) scale(1)`; // Reset
        });
    });

    // Submit form
    const form = document.querySelector('form');
    if (form) form.addEventListener('submit', function() {
        const note = document.querySelector('input[name="note"]:checked');
        if (note) console.log('Note envoyée : ' + note.value + ' étoiles');
    });
});
// ---------- ANIMATION ENVOI FORMULAIRE ----------
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");
    const submitBtn = form?.querySelector(".btn");

    if (form && submitBtn) {
        form.addEventListener("submit", (e) => {
            // Si tu veux garder l’envoi réel vers formspree, supprime la ligne suivante :
            e.preventDefault(); 

            // Sauvegarde du texte original
            const originalText = submitBtn.textContent;

            // Animation d'envoi
            submitBtn.disabled = true;
            submitBtn.innerHTML = `
                <span class="loading-dots">
                    <span>.</span><span>.</span><span>.</span>
                </span> Envoi... 
            `;
            submitBtn.classList.add("sending");

            // Simule un délai de 2 secondes (tu peux ajuster)
            setTimeout(() => {
                submitBtn.innerHTML = "✅ Message envoyé !";
                submitBtn.classList.remove("sending");
                submitBtn.classList.add("sent");

                // Retour à l’état normal après 2 secondes
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.classList.remove("sent");
                    form.reset();
                }, 2000);
            }, 2000);
        });
    }
});
// Effet "onde lumineuse" au clic sur les boutons .btn
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function (e) {
        // Créer l'élément "onde"
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');

        // Positionner l'onde au point du clic
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        // Ajouter l'onde dans le bouton
        this.appendChild(ripple);

        // Supprimer après l'animation
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});
// Effet de confirmation sur le bouton "Envoyer"
document.querySelectorAll('.btn[type="submit"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault(); // empêche le rechargement immédiat du formulaire

        // Animation du bouton
        btn.classList.add('sent');
        btn.innerHTML = '✅ Message envoyé !';

        // Retour à l’état normal après 2,5 secondes
        setTimeout(() => {
            btn.classList.remove('sent');
            btn.innerHTML = 'Envoyer';
        }, 2500);
    });
});

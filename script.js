/* ======================================
   L'OBJECTIF DE GABRIEL — script.js
   ======================================

   STRUCTURE DES DOSSIERS IMAGES :
   ──────────────────────────────────────
   📁 images/
     ├── 📁 logo/
     │     └── logo.jpg               ← Votre logo
     │
     ├── 📁 about/
     │     └── portrait.jpg           ← Votre photo portrait (page À propos)
     │
     ├── 📁 publicitaire/
     │     ├── pub-01.jpg
     │     ├── pub-02.jpg
     │     ├── pub-03.jpg
     │     └── ... (autant que souhaité)
     │
     ├── 📁 evenementiel/
     │     ├── eve-01.jpg
     │     ├── eve-02.jpg
     │     └── ...
     │
     ├── 📁 shooting/
     │     ├── shoot-01.jpg
     │     ├── shoot-02.jpg
     │     └── ...
     │
     └── 📁 favoris/
           ├── fav-01.jpg
           ├── fav-02.jpg
           └── ...

   COMMENT AJOUTER DES PHOTOS :
   Dans chaque tableau "items" ci-dessous,
   ajoutez autant d'objets que vous voulez :
   { src: 'images/publicitaire/pub-01.jpg', alt: 'Description de la photo' }
   ──────────────────────────────────────
*/
/* ======================================
   L'OBJECTIF DE GABRIEL — script.js
   ======================================
   STRUCTURE DOSSIERS IMAGES :
   images/logo/logo.jpg
   images/about/portrait.jpg
   images/publicitaire/pub-01.jpg ...
   images/evenementiel/eve-01.jpg ...
   images/shooting/shoot-01.jpg ...
   images/favoris/fav-01.jpg ...
   ======================================
*/
/* ======================================
   L'OBJECTIF DE GABRIEL — script.js
   ======================================

   STRUCTURE DES DOSSIERS IMAGES :
   ──────────────────────────────────────
   📁 images/
     ├── 📁 logo/
     │     └── logo.jpg               ← Votre logo
     │
     ├── 📁 about/
     │     └── portrait.jpg           ← Votre photo portrait (page À propos)
     │
     ├── 📁 publicitaire/
     │     ├── pub-01.jpg
     │     ├── pub-02.jpg
     │     ├── pub-03.jpg
     │     └── ... (autant que souhaité)
     │
     ├── 📁 evenementiel/
     │     ├── eve-01.jpg
     │     ├── eve-02.jpg
     │     └── ...
     │
     ├── 📁 shooting/
     │     ├── shoot-01.jpg
     │     ├── shoot-02.jpg
     │     └── ...
     │
     └── 📁 favoris/
           ├── fav-01.jpg
           ├── fav-02.jpg
           └── ...

   COMMENT AJOUTER DES PHOTOS :
   Dans chaque tableau "items" ci-dessous,
   ajoutez autant d'objets que vous voulez :
   { src: 'images/publicitaire/pub-01.jpg', alt: 'Description de la photo' }
   ──────────────────────────────────────
*/
/* ======================================
   L'OBJECTIF DE GABRIEL — script.js
   ======================================
   STRUCTURE DOSSIERS IMAGES :
   images/logo/logo.jpg
   images/about/portrait.jpg
   images/publicitaire/pub-01.jpg ...
   images/evenementiel/eve-01.jpg ...
   images/shooting/shoot-01.jpg ...
   images/favoris/fav-01.jpg ...
   ======================================
*/

// ===================== CURSOR =====================
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});
function animateRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

// ===================== NAV SCROLL =====================
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
});

// ===================== MOBILE MENU =====================
function toggleMenu() {
  document.getElementById('hamburger').classList.toggle('open');
  document.getElementById('mobile-menu').classList.toggle('open');
}

// ===================== PAGE NAVIGATION =====================
const overlay = document.getElementById('overlay');
function showPage(id) {
  overlay.classList.add('in');
  setTimeout(() => {
    document.querySelectorAll('.page').forEach(p => {
      p.classList.remove('active');
      p.style.display = 'none';
    });
    const target = document.getElementById('page-' + id);
    if (target) {
      target.style.display = 'block';
      target.classList.add('active');
    }
    window.scrollTo(0, 0);
    overlay.classList.remove('in');
    initReveal();
  }, 400);
}

// ======================================================
//  DONNÉES GALERIES
//  → Ajoutez vos photos dans chaque tableau "items"
//  → Format : { src: 'images/[dossier]/[nom].jpg', alt: 'Description' }
// ======================================================
const galleries = {

  publicitaire: {
    title: 'Shooting',
    titleItalic: 'Publicitaire',
    count: 'Galerie Shooting Publicitaire',
    quote: 'Une image vaut mille mots — une bonne image vend mille produits.',
    quoteCite: '— L\'Objectif de Gabriel',
    items: [
      { src: 'images/publicitaire/pub-01.jpg', alt: 'Shooting publicitaire' },
      { src: 'images/publicitaire/pub-02.jpg', alt: 'Shooting publicitaire' },
      { src: 'images/publicitaire/pub-03.jpg', alt: 'Shooting publicitaire' },
      { src: 'images/publicitaire/pub-04.jpg', alt: 'Shooting publicitaire' },
      { src: 'images/publicitaire/pub-05.jpg', alt: 'Shooting publicitaire' },
      { src: 'images/publicitaire/pub-06.jpg', alt: 'Shooting publicitaire' },
      { src: 'images/publicitaire/pub-07.jpg', alt: 'Shooting publicitaire' },
      { src: 'images/publicitaire/pub-08.jpg', alt: 'Shooting publicitaire' },
      { src: 'images/publicitaire/pub-09.jpg', alt: 'Shooting publicitaire' },
      { src: 'images/publicitaire/pub-10.jpg', alt: 'Shooting publicitaire' },
      { src: 'images/publicitaire/pub-11.jpg', alt: 'Shooting publicitaire' },
      { src: 'images/publicitaire/pub-12.jpg', alt: 'Shooting publicitaire' },
      { src: 'images/publicitaire/pub-13.jpg', alt: 'Shooting publicitaire' },
      { src: 'images/publicitaire/pub-14.jpg', alt: 'Shooting publicitaire' },
      { src: 'images/publicitaire/pub-15.jpg', alt: 'Shooting publicitaire' },
      // Ajoutez ici : { src: 'images/publicitaire/pub-07.jpg', alt: '...' },
    ]
  },

  evenementiel: {
    title: 'Évènementiel',
    titleItalic: '',
    count: 'Galerie Évènementiel',
    quote: 'Chaque événement est unique. Chaque instant mérite d\'être éternel.',
    quoteCite: '— L\'Objectif de Gabriel',
    items: [
      { src: 'images/evenementiel/eve-01.jpg', alt: 'Évènementiel' },
      { src: 'images/evenementiel/eve-01.jpg', alt: 'Évènementiel' },
      { src: 'images/evenementiel/eve-02.jpg', alt: 'Évènementiel' },
      { src: 'images/evenementiel/eve-03.jpg', alt: 'Évènementiel' },
      { src: 'images/evenementiel/eve-04.jpg', alt: 'Évènementiel' },
      { src: 'images/evenementiel/eve-05.jpg', alt: 'Évènementiel' },
      { src: 'images/evenementiel/eve-06.jpg', alt: 'Évènementiel' },
      { src: 'images/evenementiel/eve-07.jpg', alt: 'Évènementiel' },
      { src: 'images/evenementiel/eve-08.jpg', alt: 'Évènementiel' },
      { src: 'images/evenementiel/eve-09.jpg', alt: 'Évènementiel' },
      { src: 'images/evenementiel/eve-10.jpg', alt: 'Évènementiel' },
      { src: 'images/evenementiel/eve-11.jpg', alt: 'Évènementiel' },
      { src: 'images/evenementiel/eve-12.jpg', alt: 'Évènementiel' },
      { src: 'images/evenementiel/eve-13.jpg', alt: 'Évènementiel' },
      { src: 'images/evenementiel/eve-14.jpg', alt: 'Évènementiel' },
      // Ajoutez ici : { src: 'images/evenementiel/eve-07.jpg', alt: '...' },
    ]
  },

  shooting: {
    title: 'Shooting',
    titleItalic: 'Personnel',
    count: 'Galerie Shooting Personnel',
    quote: 'Révéler l\'authenticité d\'une personne, c\'est l\'art du portrait.',
    quoteCite: '— L\'Objectif de Gabriel',
    items: [
      { src: 'images/shooting/shoot-01.jpg', alt: 'Shooting personnel' },
      { src: 'images/shooting/shoot-02.jpg', alt: 'Shooting personnel' },
      { src: 'images/shooting/shoot-03.jpg', alt: 'Shooting personnel' },
      { src: 'images/shooting/shoot-04.jpg', alt: 'Shooting personnel' },
      { src: 'images/shooting/shoot-05.jpg', alt: 'Shooting personnel' },
      { src: 'images/shooting/shoot-06.jpg', alt: 'Shooting personnel' },
      // Ajoutez ici : { src: 'images/shooting/shoot-07.jpg', alt: '...' },
    ]
  },

  favoris: {
    title: 'Mes Clichés',
    titleItalic: 'Favoris',
    count: 'Sélection personnelle',
    quote: 'Ces images sont celles qui me parlent le plus. Celles qui restent.',
    quoteCite: '— Gabriel',
    items: [
      { src: 'images/favoris/fav-01.jpg', alt: 'Cliché favori' },
      { src: 'images/favoris/fav-02.jpg', alt: 'Cliché favori' },
      { src: 'images/favoris/fav-03.jpg', alt: 'Cliché favori' },
      { src: 'images/favoris/fav-04.jpg', alt: 'Cliché favori' },
      { src: 'images/favoris/fav-05.jpg', alt: 'Cliché favori' },
      { src: 'images/favoris/fav-06.jpg', alt: 'Cliché favori' },
      { src: 'images/favoris/fav-07.jpg', alt: 'Cliché favori' },
      { src: 'images/favoris/fav-08.jpg', alt: 'Cliché favori' },
      { src: 'images/favoris/fav-09.jpg', alt: 'Cliché favori' },
      { src: 'images/favoris/fav-10.jpg', alt: 'Cliché favori' },
      { src: 'images/favoris/fav-11.jpg', alt: 'Cliché favori' },
      { src: 'images/favoris/fav-12.jpg', alt: 'Cliché favori' },
      { src: 'images/favoris/fav-13.jpg', alt: 'Cliché favori' },
      { src: 'images/favoris/fav-14.jpg', alt: 'Cliché favori' },
      { src: 'images/favoris/fav-15.jpg', alt: 'Cliché favori' },
      { src: 'images/favoris/fav-16.jpg', alt: 'Cliché favori' },
      // Ajoutez ici : { src: 'images/favoris/fav-07.jpg', alt: '...' },
    ]
  }
};

// ======================================================
//  HOVER IMAGE SUR LES BOUTONS D'ACCUEIL
//  Charge une image aléatoire de la galerie au survol
// ======================================================
function initButtonHoverImages() {
  Object.keys(galleries).forEach(cat => {
    const bg  = document.getElementById('bg-' + cat);
    const btn = document.getElementById('btn-' + cat);
    if (!bg || !btn) return;

    const items = galleries[cat].items;
    let lastIndex = -1;

    btn.addEventListener('mouseenter', () => {
      if (items.length === 0) return;
      // Choisit un index aléatoire différent du précédent
      let idx;
      do { idx = Math.floor(Math.random() * items.length); }
      while (idx === lastIndex && items.length > 1);
      lastIndex = idx;
      bg.style.backgroundImage = `url('${items[idx].src}')`;
    });
  });
}
initButtonHoverImages();

// ======================================================
//  AFFICHAGE GALERIE
// ======================================================
function showGallery(cat) {
  const g = galleries[cat];

  // Titre
  document.getElementById('gallery-title').innerHTML =
    g.titleItalic
      ? g.title + '<br><em>' + g.titleItalic + '</em>'
      : g.title;
  document.getElementById('gallery-count').textContent = g.count;

  // Citation
  document.getElementById('gallery-quote-text').textContent = g.quote;
  document.getElementById('gallery-quote-cite').textContent = g.quoteCite;

  // Photos en maçonnerie
  const masonry = document.getElementById('gallery-masonry');
  masonry.innerHTML = '';
  const fallbackHeights = [320, 380, 440, 500, 560, 420, 480, 360, 530, 410];

  g.items.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'gallery-item reveal';
    div.style.transitionDelay = (i * 0.07) + 's';

    const img = document.createElement('img');
    img.src   = item.src;
    img.alt   = item.alt;
    img.style.cssText = 'width:100%;display:block;object-fit:cover;';
    img.onerror = function() {
      this.style.display = 'none';
      const ph = document.createElement('div');
      ph.className = 'photo-placeholder';
      ph.style.height = fallbackHeights[i % fallbackHeights.length] + 'px';
      ph.setAttribute('data-label', item.alt);
      this.parentNode.appendChild(ph);
    };

    div.appendChild(img);
    masonry.appendChild(div);
  });

  showPage('gallery');
}

// ===================== SCROLL REVEAL =====================
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => io.observe(el));
}
initReveal();

// ===================== CHECKBOX TOGGLE =====================
function toggleCheck(label) {
  // Empêche le double-déclenchement onclick/change
  event.preventDefault();
  label.classList.toggle('checked');
  const cb = label.querySelector('input[type="checkbox"]');
  cb.checked = !cb.checked;
}

// ======================================================
//  FORM SUBMIT — Formspree AJAX
//  Vérifie qu'au moins un type de shooting est sélectionné
// ======================================================
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', async e => {
    e.preventDefault();

    // Vérification : au moins une case cochée
    const checked = form.querySelectorAll('input[type="checkbox"]:checked');
    if (checked.length === 0) {
      // Mettre en évidence la zone checkboxes
      const group = document.getElementById('shooting-checkboxes');
      if (group) {
        group.style.outline = '1px solid var(--gold)';
        group.style.outlineOffset = '8px';
        setTimeout(() => { group.style.outline = 'none'; }, 2000);
      }
      return;
    }

    const action = form.getAttribute('action');
    const data   = new FormData(form);

    // Formspree n'accepte pas les champs tableau, on les concatène
    const shootingValues = Array.from(checked).map(cb => cb.value).join(', ');
    data.delete('shooting[]');
    data.append('type_de_shooting', shootingValues);

    try {
      const res = await fetch(action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        form.style.display = 'none';
        document.getElementById('form-success').style.display = 'block';
      } else {
        alert('Une erreur est survenue. Veuillez réessayer.');
      }
    } catch (err) {
      alert('Erreur réseau. Veuillez réessayer.');
    }
  });
}
// ===================== LOADER =====================
function hideLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;
  loader.style.opacity = '0';
  loader.style.pointerEvents = 'none';
  setTimeout(() => { loader.style.display = 'none'; }, 600);
}
// Lance le masquage dès que possible
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => setTimeout(hideLoader, 1600));
} else {
  setTimeout(hideLoader, 1600);
}
// Sécurité absolue : force la fermeture après 3s quoi qu'il arrive
setTimeout(hideLoader, 3000);

// ===================== LIGHTBOX =====================
let lightboxImages = [];
let lightboxIndex  = 0;

function openLightbox(images, index) {
  lightboxImages = images;
  lightboxIndex  = index;
  updateLightbox();
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

function updateLightbox() {
  const img     = document.getElementById('lightbox-img');
  const counter = document.getElementById('lightbox-counter');
  img.style.opacity = '0';
  setTimeout(() => {
    img.src = lightboxImages[lightboxIndex].src;
    img.alt = lightboxImages[lightboxIndex].alt;
    img.style.opacity = '1';
  }, 150);
  counter.textContent = (lightboxIndex + 1) + ' / ' + lightboxImages.length;
}

document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
document.getElementById('lightbox-prev').addEventListener('click', () => {
  lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
  updateLightbox();
});
document.getElementById('lightbox-next').addEventListener('click', () => {
  lightboxIndex = (lightboxIndex + 1) % lightboxImages.length;
  updateLightbox();
});
// Fermer avec Escape, naviguer avec flèches clavier
document.addEventListener('keydown', e => {
  const lb = document.getElementById('lightbox');
  if (!lb.classList.contains('open')) return;
  if (e.key === 'Escape')      closeLightbox();
  if (e.key === 'ArrowLeft')  { lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length; updateLightbox(); }
  if (e.key === 'ArrowRight') { lightboxIndex = (lightboxIndex + 1) % lightboxImages.length; updateLightbox(); }
});
// Clic fond pour fermer
document.getElementById('lightbox').addEventListener('click', e => {
  if (e.target === document.getElementById('lightbox')) closeLightbox();
});

// Patch showGallery pour activer lightbox sur chaque image
const _origShowGallery = showGallery;
// Override : on réécrit showGallery pour ajouter le clic lightbox après création
const _buildGallery = showGallery;
window.showGallery = function(cat) {
  _buildGallery(cat);
  // On attend que le DOM soit prêt après showPage (transition 400ms)
  setTimeout(() => {
    const items = galleries[cat].items;
    const allImgs = document.querySelectorAll('#gallery-masonry .gallery-item img');
    allImgs.forEach((img, i) => {
      img.style.cursor = 'none';
      img.addEventListener('click', () => openLightbox(items, i));
    });
  }, 500);
};

// ===================== BACK TO TOP =====================
const backToTopBtn = document.getElementById('back-to-top');
if (backToTopBtn) {
  window.addEventListener('scroll', () => {
    backToTopBtn.classList.toggle('visible', window.scrollY > 400);
  });
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

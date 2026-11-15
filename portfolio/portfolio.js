/* ─────────────────────────────────────────────────────
   Portfolio Page Script
   Data-driven certifications with accessible lightbox support
   ───────────────────────────────────────────────────── */

/**
 * CERTIFICATIONS DATA
 * ─────────────────────
 * Add genuine certifications here.
 * Each certification supports:
 *   image  — (required) path to the certificate document / image
 *   title  — (optional) certification name
 *   issuer — (optional) issuing organisation
 *   year   — (optional) year received
 */
const certifications = [
  {
    image: '../Assets/Student buddy.png',
    title: 'Student Buddy Coordinator',
    issuer: 'Parul University',
    year: '2025 – 2026',
  },
];

// Track element to restore focus after closing lightbox
let lastFocusedElement = null;

// ── Render Certifications ──
function renderCertifications() {
  const grid = document.getElementById('certifications-grid');
  const empty = document.getElementById('certifications-empty');
  const section = document.getElementById('certifications-section');

  if (!grid || !section) return;

  // Filter out entries without an image
  const valid = certifications.filter((c) => c && c.image);

  if (valid.length === 0) {
    grid.replaceChildren();
    if (empty) empty.style.display = 'block';
    return;
  }

  // Hide empty state
  if (empty) empty.style.display = 'none';

  grid.replaceChildren();

  valid.forEach((cert, i) => {
    const delay = (0.30 + i * 0.06).toFixed(2);

    // Outer card
    const card = document.createElement('div');
    card.className = 'cert-card';
    card.dataset.index = String(i);
    card.style.animationDelay = delay + 's';
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', 'View ' + (cert.title || 'certification') + ' full size');

    // Image wrapper
    const imageWrap = document.createElement('div');
    imageWrap.className = 'cert-image-wrap';

    const img = document.createElement('img');
    img.src = cert.image;
    img.alt = cert.title || 'Certification';
    img.loading = 'lazy';
    imageWrap.appendChild(img);
    card.appendChild(imageWrap);

    // Info block
    const hasInfo = cert.title || cert.issuer || cert.year;
    if (hasInfo) {
      const info = document.createElement('div');
      info.className = 'cert-info';

      if (cert.title) {
        const p = document.createElement('p');
        p.className = 'cert-title';
        p.textContent = cert.title;
        info.appendChild(p);
      }
      if (cert.issuer) {
        const p = document.createElement('p');
        p.className = 'cert-issuer';
        p.textContent = cert.issuer;
        info.appendChild(p);
      }
      if (cert.year) {
        const p = document.createElement('p');
        p.className = 'cert-year';
        p.textContent = cert.year;
        info.appendChild(p);
      }

      card.appendChild(info);
    }

    grid.appendChild(card);
  });
}

// ── Lightbox with focus trap & restoration ──
function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-image');
  const lightboxClose = document.getElementById('lightbox-close');
  const grid = document.getElementById('certifications-grid');

  if (!lightbox || !lightboxImg || !grid) return;

  function openLightbox(src, alt, triggerEl) {
    lastFocusedElement = triggerEl || document.activeElement;
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.classList.add('is-active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lightboxClose?.focus();
  }

  function closeLightbox() {
    if (!lightbox.classList.contains('is-active')) return;
    lightbox.classList.remove('is-active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  }

  // Click card to open
  grid.addEventListener('click', (e) => {
    const card = e.target.closest('.cert-card');
    if (!card) return;
    const img = card.querySelector('img');
    if (img) openLightbox(img.src, img.alt, card);
  });

  // Keyboard navigation on cards
  grid.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.target.closest('.cert-card');
      if (!card) return;
      e.preventDefault();
      const img = card.querySelector('img');
      if (img) openLightbox(img.src, img.alt, card);
    }
  });

  // Close handlers
  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Global keyboard handler for lightbox (Escape & Tab trap)
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('is-active')) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      closeLightbox();
      return;
    }

    if (e.key === 'Tab') {
      // Trap focus on close button
      e.preventDefault();
      lightboxClose?.focus();
    }
  });
}

// ── Init ──
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    renderCertifications();
    initLightbox();
  });
} else {
  renderCertifications();
  initLightbox();
}

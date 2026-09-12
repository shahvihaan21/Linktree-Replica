/* ─────────────────────────────────────────────────────
   Portfolio Page Script
   Data-driven certifications with lightbox support
   ───────────────────────────────────────────────────── */

/**
 * CERTIFICATIONS DATA
 * ─────────────────────
 * Add new certifications by adding objects to this array.
 * Each certification supports:
 *   image  — (required) path to the certification image
 *   title  — (optional) certification name
 *   issuer — (optional) issuing organisation
 *   year   — (optional) year received
 *
 * Example:
 * {
 *   image: '../Assets/certifications/google-analytics.png',
 *   title: 'Google Analytics Certified',
 *   issuer: 'Google',
 *   year: '2026'
 * }
 */
const certifications = [
  {
    image: '../Assets/Student buddy.png',
    title: 'Student Buddy',
  },
  {
    image: '../Assets/International Week.jpg',
    title: 'International Week',
  },
];

// ── Render Certifications ──
function renderCertifications() {
  const grid = document.getElementById('certifications-grid');
  const empty = document.getElementById('certifications-empty');
  const section = document.getElementById('certifications-section');

  if (!grid || !section) return;

  // Filter out entries without an image
  const valid = certifications.filter(c => c.image);

  if (valid.length === 0) {
    // Show subtle empty state
    grid.innerHTML = '';
    if (empty) empty.style.display = '';
    return;
  }

  // Hide empty state
  if (empty) empty.style.display = 'none';

  grid.innerHTML = valid
    .map((cert, i) => {
      const delay = (0.38 + i * 0.07).toFixed(2);
      const titleHTML = cert.title
        ? `<p class="cert-title">${escapeHTML(cert.title)}</p>`
        : '';
      const issuerHTML = cert.issuer
        ? `<p class="cert-issuer">${escapeHTML(cert.issuer)}</p>`
        : '';
      const yearHTML = cert.year
        ? `<p class="cert-year">${escapeHTML(cert.year)}</p>`
        : '';
      const hasInfo = cert.title || cert.issuer || cert.year;

      return `
        <div class="cert-card" data-index="${i}" style="animation-delay:${delay}s" tabindex="0" role="button" aria-label="View ${cert.title || 'certification'} full size">
          <div class="cert-image-wrap">
            <img src="${escapeHTML(cert.image)}" alt="${escapeHTML(cert.title || 'Certification')}" loading="lazy" />
          </div>
          ${hasInfo ? `<div class="cert-info">${titleHTML}${issuerHTML}${yearHTML}</div>` : ''}
        </div>
      `;
    })
    .join('');
}

// ── Lightbox ──
function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-image');
  const lightboxClose = document.getElementById('lightbox-close');
  const grid = document.getElementById('certifications-grid');

  if (!lightbox || !lightboxImg || !grid) return;

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.classList.add('is-active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lightboxClose?.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('is-active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Delegate click on certification cards
  grid.addEventListener('click', (e) => {
    const card = e.target.closest('.cert-card');
    if (!card) return;
    const img = card.querySelector('img');
    if (img) openLightbox(img.src, img.alt);
  });

  // Keyboard support on cert cards
  grid.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.target.closest('.cert-card');
      if (!card) return;
      e.preventDefault();
      const img = card.querySelector('img');
      if (img) openLightbox(img.src, img.alt);
    }
  });

  // Close handlers
  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('is-active')) {
      closeLightbox();
    }
  });
}

// ── Utility ──
function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ── Init ──
renderCertifications();
initLightbox();

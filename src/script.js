const { links, socialImages } = window.siteData

const icons = {
  github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 22v-3.87c.04-1 .39-1.96 1-2.75 3.28-.37 6.72-1.61 6.72-7.29a5.7 5.7 0 0 0-1.5-3.9A5.3 5.3 0 0 0 21.08.35S19.86 0 17 1.89a13.4 13.4 0 0 0-7 0C7.14 0 5.92.35 5.92.35a5.3 5.3 0 0 0-.14 3.84 5.7 5.7 0 0 0-1.5 3.9c0 5.67 3.44 6.91 6.72 7.29.61.78.96 1.74 1 2.75V22" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"></path><path d="M9 19c-3 .92-3-1.5-4.2-1.8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.8"></path></svg>',
  linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM6 9H2v12h4zM4 6.5A2.25 2.25 0 1 0 4 2a2.25 2.25 0 0 0 0 4.5Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"></path></svg>',
  instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="5" ry="5" fill="none" stroke="currentColor" stroke-width="1.8"></rect><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.8"></circle><circle cx="17.3" cy="6.7" r="1" fill="currentColor"></circle></svg>',
  globe: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.8"></circle><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.8"></path></svg>',
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"></path></svg>',
}

function makeLink(link, className, content, label) {
  if (link.internal) {
    return '<a class="' + className + '" href="' + link.url + '" aria-label="' + label + '">' + content + '</a>'
  }
  return '<a class="' + className + '" href="' + link.url + '" target="_blank" rel="noopener noreferrer" aria-label="' + label + '">' + content + '</a>'
}

function renderNavigation() {
  const socialList = document.querySelector('#socials')
  const linkList = document.querySelector('#link-list')
  if (!socialList || !linkList) return

  socialList.innerHTML = links
    .filter((link) => socialImages[link.icon])
    .map((link) => makeLink(link, 'social-link', '<img src="' + socialImages[link.icon] + '" alt="" />', 'Vihaan Shah on ' + link.title))
    .join('')

  linkList.innerHTML = links
    .map((link) => {
      const content =
        '<span class="link-icon">' + icons[link.icon] + '</span>' +
        '<span class="link-copy"><strong>' + link.title + '</strong><small>' + link.subtitle + '</small></span>' +
        '<span class="arrow">' + icons.arrow + '</span>'
      return makeLink(link, 'link-card', content, link.title + ': ' + link.subtitle)
    })
    .join('')
}

function enableAboutToggle() {
  const about = document.querySelector('#about')
  const trigger = about?.querySelector('.about-trigger')
  const content = about?.querySelector('.about-content')
  if (!about || !trigger || !content) return

  trigger.addEventListener('click', () => {
    const isOpen = about.classList.toggle('is-open')
    trigger.setAttribute('aria-expanded', String(isOpen))
    content.setAttribute('aria-hidden', String(!isOpen))
  })
}

renderNavigation()
enableAboutToggle()

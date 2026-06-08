import './WebringNav.css'

const WEBRING_URL = 'https://webring.lpnuci.com'
const SITE_ID = 'chrisyeh.dev'

export default function WebringNav() {
  return (
    <footer className="page-nav" aria-label="LPN Webring navigation">
      <a
        href={`${WEBRING_URL}/?nav=prev&from=${SITE_ID}`}
        className="page-nav-link"
        aria-label="Previous site in the LPN Webring"
      >
        {'<'}
      </a>

      <a
        href={WEBRING_URL}
        className="page-nav-logo-link"
        aria-label="LPN Webring home"
      >
        <img
          src={`${WEBRING_URL}/widget-icon.png`}
          alt="LPN Webring"
          className="page-nav-logo"
          height="48"
          loading="lazy"
        />
      </a>

      <a
        href={`${WEBRING_URL}/?nav=next&from=${SITE_ID}`}
        className="page-nav-link"
        aria-label="Next site in the LPN Webring"
      >
        {'>'}
      </a>
    </footer>
  )
}

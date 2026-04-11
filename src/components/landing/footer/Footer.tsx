import "./footer.css";


type NavItem = {
  label: string;
  href: string;
  badge?: string;
};

type NavGroup = Record<string, NavItem[]>;

// const NAV = {
const NAV: NavGroup = {
  Product: [
    { label: "Overview",     href: "/overview" },
    { label: "Crowd Shield", href: "/crowd-shield", badge: "New" },
    { label: "Drone Fleet",  href: "/drones" },
    { label: "Analytics",    href: "/analytics" },
    { label: "Integrations", href: "/integrations" },
  ],
  Company: [
    { label: "About",    href: "/about" },
    { label: "Careers",  href: "/careers" },
    { label: "Press",    href: "/press" },
    { label: "Contact",  href: "/contact" },
  ],
  Resources: [
    { label: "Documentation", href: "/docs" },
    { label: "API Reference", href: "/api" },
    { label: "Case Studies",  href: "/cases" },
    { label: "Security",      href: "/security" },
  ],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        {/* ── Brand ── */}
        <div className="footer-brand">
          <a href="/" className="brand-logo" aria-label="Agrani Home">
            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="10" cy="10" r="8.5" stroke="#8fa8c8" strokeWidth="1.2" />
              <circle cx="10" cy="10" r="4.5" stroke="#8fa8c8" strokeWidth="1" />
              <circle cx="10" cy="10" r="1.5" fill="#8fa8c8" />
            </svg>
            <span className="brand-name">
              Agrani<span className="brand-dot" aria-hidden="true" />
            </span>
          </a>

          <p className="brand-desc">
            Autonomous drone surveillance and AI-powered crowd intelligence
            for critical infrastructure security.
          </p>

          <div className="brand-social">
            {/* X */}
            <a href="https://x.com" className="social-btn" aria-label="Follow on X" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M12.6 2h2.2L9.9 7.3 15.5 14H11L7.5 9.6 3.5 14H1.3l5.3-5.7L.5 2H5.1l3.2 4.1L12.6 2zm-.8 10.8h1.2L4.3 3.2H3L11.8 12.8z" fill="currentColor" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="https://linkedin.com" className="social-btn" aria-label="Connect on LinkedIn" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M2.5 5.5h2.2v8H2.5v-8zm1.1-3.5a1.3 1.3 0 1 1 0 2.6A1.3 1.3 0 0 1 3.6 2zm3.2 3.5h2.1v1.1h.03c.3-.55 1-1.3 2.17-1.3 2.3 0 2.7 1.5 2.7 3.5v4.2H11.6V9.1c0-.8 0-1.8-1.1-1.8-1.1 0-1.3.87-1.3 1.75v4.45H6.8v-8z" fill="currentColor" />
              </svg>
            </a>
            {/* GitHub */}
            <a href="https://github.com" className="social-btn" aria-label="View on GitHub" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M8 1a7 7 0 0 0-2.21 13.64c.35.06.48-.15.48-.34v-1.2c-1.94.42-2.35-.94-2.35-.94-.32-.81-.78-1.03-.78-1.03-.64-.44.05-.43.05-.43.7.05 1.07.72 1.07.72.62 1.07 1.63.76 2.03.58.06-.45.24-.76.44-.93-1.55-.18-3.18-.78-3.18-3.46 0-.76.27-1.39.72-1.88-.07-.18-.31-.89.07-1.85 0 0 .59-.19 1.92.72A6.67 6.67 0 0 1 8 4.8c.59 0 1.19.08 1.75.24 1.33-.91 1.92-.72 1.92-.72.38.96.14 1.67.07 1.85.45.49.72 1.12.72 1.88 0 2.69-1.64 3.28-3.2 3.45.25.22.48.65.48 1.31v1.94c0 .19.13.41.48.34A7 7 0 0 0 8 1z" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>

        {/* ── Nav columns ── */}
        {Object.entries(NAV).map(([group, links]) => (
          <div className="footer-col" key={group}>
            <p className="col-title">{group}</p>
            <ul className="col-links">
              {links.map(({ label, href, badge }) => (
                <li key={label}>
                  <a href={href}>
                    {label}
                    {badge && <span className="link-badge">{badge}</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>

      {/* ── Bottom bar ── */}
      <div className="footer-bottom">
        <span className="footer-copy">
          © {new Date().getFullYear()} Agrani Technologies. All rights reserved.
        </span>

        <div className="status-pill" aria-label="System status: operational">
          <span className="status-dot" aria-hidden="true" />
          All systems operational
        </div>

        <nav className="footer-legal" aria-label="Legal">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/cookies">Cookies</a>
        </nav>
      </div>
    </footer>
  );
}
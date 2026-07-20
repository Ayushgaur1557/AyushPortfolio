import { useEffect, useState } from 'react'
import './App.css'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Ayushgaur1557' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ayush-gaur-9494942bb/' },
  { label: 'Email', href: 'mailto:ayushgaur061@gmail.com' },
]

const metrics = [
  { value: '5', label: 'Live products shipped' },
  { value: '3', label: 'Store accounts managed' },
  { value: '300+', label: 'Coding problems solved' },
]

const liveProducts = [
  {
    title: 'Stapples',
    type: 'Self-service printing kiosk',
    description: 'An unattended tablet kiosk for sending documents from a phone, previewing print settings, and printing directly to network printers.',
    highlights: ['Custom IPP engine', 'QR & one-time pairing', 'Printer discovery'],
    href: 'https://play.google.com/store/apps/details?id=com.kiosk_user&hl=gu',
  },
  {
    title: 'MettsCredit',
    type: 'Property management platform',
    description: 'A large-scale owner platform for managing properties, tenants, IoT meters, billing, wallets, reports, and payments across 100+ screens.',
    highlights: ['IoT smart meters', 'Billing & wallets', 'Razorpay'],
    href: 'https://play.google.com/store/search?q=MettsCredit&c=apps',
  },
  {
    title: 'MettsPe',
    type: 'Production fintech product',
    description: 'Contributed features, API integrations, UI improvements, production fixes, performance work, and cross-platform release support.',
    highlights: ['Production support', 'API integrations', 'Android & iOS'],
    href: 'https://play.google.com/store/search?q=MettsPe&c=apps',
  },
  {
    title: 'AEEROx LMS',
    type: 'Learning management system',
    description: 'Delivered product features, responsive interfaces, API-connected workflows, defect fixes, and release-ready improvements for a live LMS.',
    highlights: ['Feature delivery', 'Scalable UI', 'Release support'],
    href: 'https://play.google.com/store/apps/details?id=com.aeero.learner.android&hl=en',
  },
  {
    title: 'VadapavMirchi',
    type: 'Food ordering application',
    description: 'Worked on a customer-facing production application, supporting reliable app experiences and live-store delivery.',
    highlights: ['Live product', 'Store delivery', 'Customer experience'],
    href: 'https://play.google.com/store/apps/details?id=com.purevegrn.android&hl=en',
  },
]

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Srchout Software Pvt. Ltd.',
    period: 'Jul 2025 — Present',
    points: [
      'Build and maintain production software across frontend, cross-platform, API, and native Android layers.',
      'Ship features for MettsCredit, MettsPe, AEEROx LMS, Stapples, and VadapavMirchi, from reusable UI and state architecture through testing and release.',
      'Integrate REST APIs, Socket.IO, Firebase, push notifications, payments, native device capabilities, and backend services.',
      'Support Android and iOS release pipelines and manage production publishing across three store accounts.',
      'Collaborate on debugging, performance, UX quality, and reliable delivery for real users.',
    ],
  },
  {
    role: 'Frontend Engineering Intern',
    company: 'Srchout Software Pvt. Ltd.',
    period: 'Mar 2025 — Jun 2025',
    points: [
      'Built reusable interfaces and API-connected product flows while learning production engineering practices.',
      'Contributed to debugging, testing, usability improvements, and Android/iOS release readiness.',
    ],
  },
]

const projects = [
  {
    title: 'Stapples',
    subtitle: 'Kiosk software · React Native, TypeScript, Kotlin, Java, Node.js',
    description: 'Built a self-service document-printing kiosk with an end-to-end workflow from phone upload to unattended network printing.',
    bullets: [
      'Wrote a native IPP printing engine from scratch for document conversion, capability discovery, streaming, submission, and live job-status polling.',
      'Added zero-configuration mDNS/Zeroconf printer discovery and native print previews with A4/A3, orientation, and color controls.',
      'Built Socket.IO document delivery using secure QR and one-time kiosk codes, plus device registration and token-based authentication.',
      'Contributed Node.js/Express endpoints for kiosk profiles, pending documents, print-status updates, and real-time server pairing.',
    ],
    links: [{ label: 'View live app', href: 'https://play.google.com/store/apps/details?id=com.kiosk_user&hl=en' }],
  },
  {
    title: 'MettsCredit · Owner Panel',
    subtitle: 'Property management · React Native, TypeScript, Firebase, Socket.IO',
    description: 'Engineered a production property-management platform spanning rental operations, IoT energy data, payments, and reporting.',
    bullets: [
      'Developed workflows across 100+ screens with Redux Toolkit and a modular 40+ service Axios API layer.',
      'Implemented real-time smart-meter monitoring, energy logs, recharge flows, device health, and anomaly visibility.',
      'Built prepaid/postpaid billing, rates, dues, collections, payouts, settlements, Razorpay payments, and offline approval flows.',
      'Delivered KYC and onboarding, signature capture, OTP, dashboards, PDF/XLSX exports, notifications, support chat, and responsive UI components.',
    ],
    links: [{ label: 'View product listing', href: 'https://play.google.com/store/search?q=MettsCredit&c=apps' }],
  },
  {
    title: 'UpGrowLearn',
    subtitle: 'Full-stack e-learning platform',
    description: 'A role-based learning platform for administrators, instructors, and learners with enrollment and progress tracking.',
    bullets: [
      'Integrated Stripe payments, Redux Toolkit state management, and Cloudinary media delivery.',
      'Created a responsive React interface with Tailwind CSS and dark mode.',
    ],
    links: [{ label: 'View GitHub repository', href: 'https://github.com/Ayushgaur1557/Up-Grow-Learner' }],
  },
  {
    title: 'AI-Powered Document Assistant',
    subtitle: 'AI document processing platform',
    description: 'A web application for understanding PDFs and images through OCR and AI-assisted processing.',
    bullets: [
      'Integrated Hugging Face APIs for summarization, translation, and sentiment analysis.',
      'Added OCR extraction and AI image-generation workflows in a focused, accessible interface.',
    ],
    links: [{ label: 'View GitHub repository', href: 'https://github.com/Ayushgaur1557/Ai-Powered-document-Assistant' }],
  },
]

const skillGroups = [
  { title: 'Frontend', items: ['React.js', 'React Native', 'TypeScript', 'JavaScript', 'Redux Toolkit', 'Tailwind CSS', 'Responsive UI', 'React Navigation'] },
  { title: 'Backend & Data', items: ['Node.js', 'Express.js', 'REST APIs', 'Socket.IO', 'SQL', 'MongoDB', 'Axios', 'Token Authentication'] },
  { title: 'Platform & Native', items: ['Kotlin', 'Java', 'Android', 'iOS', 'Firebase', 'FCM', 'IPP Printing', 'Zeroconf / mDNS'] },
  { title: 'Tools & Delivery', items: ['Git & GitHub', 'Postman', 'Android Studio', 'VS Code', 'Play Console', 'App Store Connect', 'Razorpay', 'Stripe'] },
]

const achievements = [
  '3-star competitive programmer with a rating above 1691.',
  'Top 5 at Lakshagrah 4.0 (2024), an international-level hackathon.',
  'Solved 300+ data structures and algorithms problems across LeetCode and GeeksforGeeks.',
  'Hands-on ownership of five live products and production releases across Android and iOS.',
]

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme')
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem('portfolio-theme', theme)
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      theme === 'light' ? '#f4f6f2' : '#090d14',
    )
  }, [theme])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      }),
      { threshold: 0.04, rootMargin: '0px 0px 12% 0px' },
    )
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="page-shell">
      <header className={`topbar ${isScrolled ? 'topbar-scrolled' : ''}`}>
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Ayush Gaur home">
          <span className="brand-mark">AG</span>
          <span>Ayush Gaur</span>
        </a>
        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`} id="site-nav">
          <button
            className="theme-button nav-theme-button"
            type="button"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            onClick={() => setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" /></svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.4 15.5A9 9 0 0 1 8.5 3.6 9 9 0 1 0 20.4 15.5Z" /></svg>
            )}
          </button>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#work" onClick={closeMenu}>Live work</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <div className="topbar-actions">
          <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="site-nav" onClick={() => setMenuOpen((open) => !open)}>
            <span className="sr-only">Toggle navigation</span>
            <span /><span /><span />
          </button>
        </div>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span className="status-dot" /> Frontend Developer · Software Engineer</p>
            <h1>I build software that works in the real world.</h1>
            <p className="hero-text">Frontend-focused software developer building production platforms across web, mobile, backend services, native Android, real-time systems, payments, and app-store delivery.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">View production work <span aria-hidden="true">↗</span></a>
              <a className="button button-secondary" href="#contact">Let&apos;s talk</a>
            </div>
            <div className="social-row">{socialLinks.map((link) => <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{link.label} <span aria-hidden="true">↗</span></a>)}</div>
          </div>
          <aside className="hero-panel reveal">
            <div className="code-card">
              <div className="window-bar"><span /><span /><span /><small>developer.profile</small></div>
              <pre><code><span className="code-muted">const</span> ayush = {'{'}{`\n`}  role: <span className="code-accent">&quot;Frontend Developer&quot;</span>,{`\n`}  focus: [<span className="code-accent">&quot;product&quot;</span>, <span className="code-accent">&quot;scale&quot;</span>],{`\n`}  ships: <span className="code-number">5</span> liveProducts,{`\n`}  stack: <span className="code-accent">&quot;full software lifecycle&quot;</span>{`\n`}{'}'}</code></pre>
            </div>
            <div className="metric-grid">{metrics.map((metric) => <article key={metric.label} className="metric-card"><strong>{metric.value}</strong><span>{metric.label}</span></article>)}</div>
          </aside>
        </section>

        <section className="section about-grid" id="about">
          <div className="section-heading reveal"><p className="section-number">01 / ABOUT</p><h2>More than<br />one platform.</h2></div>
          <div className="about-copy reveal">
            <p className="lead">I turn product requirements into reliable software—from the interface people see to the services and native integrations underneath.</p>
            <p>My experience spans responsive frontend engineering, React Native applications, Node.js/Express APIs, Kotlin and Java modules, Firebase, Socket.IO, SQL and MongoDB. I have worked on live learning, fintech, property, printing, and food-ordering products.</p>
            <p>I care about maintainable architecture, clear user experiences, dependable integrations, and owning delivery through testing, release, and production support.</p>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading horizontal reveal"><div><p className="section-number">02 / EXPERIENCE</p><h2>Production-minded engineering.</h2></div><p className="section-note">Building, shipping, and supporting software used by real customers.</p></div>
          <div className="timeline">{experiences.map((experience) => <article key={experience.role} className="timeline-card reveal"><div className="timeline-marker" /><div className="timeline-header"><div><h3>{experience.role}</h3><p className="meta">{experience.company}</p></div><span className="period">{experience.period}</span></div><ul>{experience.points.map((point) => <li key={point}>{point}</li>)}</ul></article>)}</div>
        </section>

        <section className="section" id="work">
          <div className="section-heading horizontal reveal"><div><p className="section-number">03 / LIVE WORK</p><h2>Products in production.</h2></div><p className="section-note">Five shipped applications across multiple business domains.</p></div>
          <div className="product-grid">{liveProducts.map((product, index) => <article key={product.title} className={`product-card reveal ${index < 2 ? 'product-featured' : ''}`}><div className="product-index">0{index + 1}</div><p className="product-type">{product.type}</p><h3>{product.title}</h3><p>{product.description}</p><div className="tag-row">{product.highlights.map((item) => <span key={item}>{item}</span>)}</div><a href={product.href} target="_blank" rel="noreferrer" aria-label={`View ${product.title} listing`}>View product <span aria-hidden="true">↗</span></a></article>)}</div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading horizontal reveal"><div><p className="section-number">04 / CASE STUDIES</p><h2>Selected technical work.</h2></div><p className="section-note">A closer look at systems, architecture, and delivery.</p></div>
          <div className="project-list">{projects.map((project, index) => <article key={project.title} className="project-card reveal"><div className="project-number">{String(index + 1).padStart(2, '0')}</div><div className="project-body"><p className="meta">{project.subtitle}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><ul>{project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul><div className="link-row">{project.links.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label} <span aria-hidden="true">↗</span></a>)}</div></div></article>)}</div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading horizontal reveal"><div><p className="section-number">05 / CAPABILITIES</p><h2>Skills & tools.</h2></div><p className="section-note">A practical stack shaped by production requirements.</p></div>
          <div className="skills-grid">{skillGroups.map((group) => <article className="skill-group reveal" key={group.title}><h3>{group.title}</h3><div className="skills-cloud">{group.items.map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}</div>
        </section>

        <section className="section split-section" id="education">
          <article className="info-card reveal"><p className="section-number">06 / EDUCATION</p><h2>B.Tech in Computer Science</h2><p className="lead-small">Dev Bhoomi Uttarakhand University</p><div className="info-footer"><span>2022 — 2026</span><strong>CGPA 8.0</strong></div></article>
          <article className="info-card reveal"><p className="section-number">07 / ACHIEVEMENTS</p><h2>Recognition</h2><ul className="achievement-list">{achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}</ul></article>
        </section>

        <section className="section contact-section reveal" id="contact">
          <p className="section-number">08 / CONTACT</p><div className="contact-heading"><h2>Have a product to build?</h2><p>I&apos;m open to frontend and software development opportunities where thoughtful engineering and dependable delivery matter.</p></div>
          <a className="email-link" href="mailto:ayushgaur061@gmail.com">ayushgaur061@gmail.com <span aria-hidden="true">↗</span></a>
          <div className="contact-footer"><span>Dehradun, Uttarakhand, India</span><div>{socialLinks.map((link) => <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{link.label}</a>)}<a href="https://wa.me/919027659922" target="_blank" rel="noreferrer">WhatsApp</a></div></div>
        </section>
      </main>
    </div>
  )
}

export default App

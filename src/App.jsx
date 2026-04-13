import { useEffect, useState } from 'react'
import './App.css'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Ayushgaur1557' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ayush-gaur-9494942bb/' },
  { label: 'Email', href: 'mailto:ayushgaur061@gmail.com' },
]

const metrics = [
  { value: '3', label: 'Live apps in production' },
  { value: '2', label: 'Stores managed: Play Store and App Store' },
]

const liveProducts = [
  {
    title: 'MettsCredit',
    description:
      'Live fintech product where I contribute features, UI improvements, bug fixes, API integration, and production polish.',
    href: 'https://play.google.com/store/search?q=mettsCredit&c=apps&hl=gu',
    linkLabel: 'View on Play Store',
  },
  {
    title: 'MettsPe',
    description:
      'Production mobile app I help maintain and scale with cross-platform React Native development for Android and iOS.',
    href: 'https://play.google.com/store/search?q=mettsPe&c=apps&hl=gu',
    linkLabel: 'View on Play Store',
  },
  {
    title: 'AEEROx LMS',
    description:
      'Current LMS product work involving feature delivery, API integration, clean UI implementation, and release support.',
    href: 'https://play.google.com/store/apps/details?id=com.aeero.learner.android&hl=gu',
    linkLabel: 'Open App Listing',
  },
]

const experiences = [
  {
    role: 'React Native Developer',
    company: 'Srchout Software Pvt. Ltd.',
    period: 'Nov 2025 - Present',
    points: [
      'Joined full-time after successfully completing a 4-month internship and now contribute to production-grade mobile products.',
      'Working on Mettsenia Phase 2 (V2) and supporting live app delivery for MettsPe, MettsCredit, and AEEROx LMS.',
      'Build features, improve UI/UX, integrate APIs, fix bugs, and optimize performance in React Native apps.',
      'Handle cross-platform delivery for Android and iOS, including push notifications, Firebase integration, and release workflows.',
      'Support App Store and Google Play Store publishing processes, signed builds, validation, and live app updates.',
    ],
  },
  {
    role: 'React Native Intern',
    company: 'Srchout Software Pvt. Ltd.',
    period: 'Jul 2025 - Oct 2025',
    points: [
      'Contributed to live mobile products by building screens, reusable components, and API-connected features.',
      'Worked on debugging, testing, and improving usability and app performance for Android and iOS.',
      'Learned production workflows, team collaboration, and release readiness in a real delivery environment.',
    ],
  },
]

const projects = [
  {
    title: 'UpGrowLearn',
    subtitle: 'Full-stack e-learning platform',
    description:
      'Built a full-stack learning product with role-based modules for admin, instructor, and learner flows.',
    bullets: [
      'Implemented user registration, course enrollment, and progress tracking.',
      'Integrated Stripe payments and Redux Toolkit for state and API management.',
      'Created a responsive interface with Tailwind CSS, dark mode, and Cloudinary-backed media delivery.',
    ],
    links: [
      {
        label: 'Repo: github.com/Ayushgaur1557/Up-Grow-Learner',
        href: 'https://github.com/Ayushgaur1557/Up-Grow-Learner',
      },
    ],
  },
  {
    title: 'AI-Powered Document Assistant',
    subtitle: 'Document summarization and AI utility app',
    description:
      'Developed a web application that summarizes PDFs and images while also supporting AI image generation workflows.',
    bullets: [
      'Integrated Hugging Face APIs for summarization, translation, and sentiment analysis.',
      'Added OCR support to extract text from image documents before processing.',
      'Designed a clean user flow for AI-assisted document understanding.',
    ],
    links: [
      {
        label: 'Repo: github.com/Ayushgaur1557/Ai-Powered-document-Assistant',
        href: 'https://github.com/Ayushgaur1557/Ai-Powered-document-Assistant',
      },
    ],
  },
]

const skills = [
  'React Native',
  'React.js',
  'JavaScript',
  'C++',
  'Firebase',
  'Push Notifications',
  'Android',
  'iOS',
  'API Integration',
  'Git & GitHub',
  'Tailwind CSS',
  'Postman',
  'Android Studio',
  'VS Code',
  'App Store Release Workflow',
  'Play Store Release Workflow',
]

const education = {
  degree: 'Bachelor of Technology in Computer Science',
  school: 'Dev Bhoomi Uttarakhand University',
  score: 'CGPA: 8.0',
  period: '2022 - 2026',
}

const achievements = [
  'Top 5 position in Lakshagrah 4.0 (2024), an international-level hackathon.',
  'Solved 300+ problems across LeetCode and GeeksforGeeks.',
  'Hands-on experience shipping live apps for both Android and iOS stores.',
]

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.01,
        rootMargin: '0px 0px 18% 0px',
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="page-shell">
      <header className={`topbar ${isScrolled ? 'topbar-scrolled' : ''}`}>
        <a className="brand" href="#home">
          <span className="brand-mark">AG</span>
          <span>Ayush Gaur</span>
        </a>

        <nav className="nav">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero-section reveal" id="home">
          <div className="hero-copy">
            <p className="eyebrow">React Native Developer</p>
            <h1>
              Building clean, production-ready mobile experiences for Android
              and iOS.
            </h1>
            <p className="hero-text">
              I am Ayush Gaur, a developer focused on cross-platform apps,
              scalable UI, API integration, Firebase workflows, and live store
              releases. I enjoy shipping practical products that feel polished,
              reliable, and user-first.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore My Work
              </a>
              <a className="button button-secondary" href="#contact">
                Contact Me
              </a>
            </div>

            <div className="social-row">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <aside className="hero-panel">
            <div className="hero-card">
              <p className="hero-card-label">Now Working On</p>
              <h2>Production mobile apps at Srchout Software Pvt. Ltd.</h2>
              <p>
                Delivering features, improving UI/UX, managing APIs, and
                supporting releases for live Play Store and App Store products.
              </p>
            </div>

            <div className="metric-grid">
              {metrics.map((metric) => (
                <article key={metric.label} className="metric-card">
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </article>
              ))}
            </div>
          </aside>
        </section>

        <section className="section reveal" id="about">
          <div className="section-heading">
            <p className="eyebrow">Profile</p>
            <h2>About Me</h2>
          </div>
          <div className="content-card reveal">
            <p>
              Experienced in building production-level Android and iOS apps with
              strong expertise in JavaScript, frontend development, API
              integration, and user-friendly mobile interfaces. I work
              comfortably across development, debugging, deployment, and release
              coordination.
            </p>
            <p>
              My current focus is React Native development backed by Firebase,
              push notifications, clean Git-based collaboration, and live app
              delivery for real users.
            </p>
          </div>
        </section>

        <section className="section reveal" id="experience">
          <div className="section-heading section-heading-split">
            <p className="eyebrow eyebrow-opposite">Career</p>
            <h2>Experience</h2>
          </div>

          <div className="timeline">
            {experiences.map((experience) => (
              <article key={experience.role} className="timeline-card reveal">
                <div className="timeline-header">
                  <div>
                    <h3>{experience.role}</h3>
                    <p className="meta">{experience.company}</p>
                  </div>
                  <span className="period">{experience.period}</span>
                </div>

                <ul>
                  {experience.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal" id="work">
          <div className="section-heading section-heading-split">
            <p className="eyebrow eyebrow-opposite">Live Work</p>
            <h2>Products In Production</h2>
          </div>

          <div className="card-grid">
            {liveProducts.map((product) => (
              <article key={product.title} className="feature-card reveal">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <a href={product.href} target="_blank" rel="noreferrer">
                  {product.linkLabel}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal" id="projects">
          <div className="section-heading section-heading-split">
            <p className="eyebrow eyebrow-opposite">Portfolio</p>
            <h2>Selected Projects</h2>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article key={project.title} className="project-card reveal">
                <div className="project-topline">
                  <div>
                    <h3>{project.title}</h3>
                    <p className="meta">{project.subtitle}</p>
                  </div>
                </div>

                <p>{project.description}</p>

                <ul>
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

                <div className="link-row">
                  {project.links.map((link) => (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal" id="skills">
          <div className="section-heading">
            <p className="eyebrow">Capabilities</p>
            <h2>Skills & Tools</h2>
          </div>

          <div className="skills-cloud">
            {skills.map((skill) => (
              <span key={skill} className="skill-pill">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="section split-section reveal" id="education">
          <article className="content-card reveal">
            <p className="eyebrow">Education</p>
            <h2>{education.degree}</h2>
            <p className="meta">{education.school}</p>
            <p>
              {education.score} | {education.period}
            </p>
            <p>{education.extra}</p>
          </article>

          <article className="content-card reveal">
            <p className="eyebrow">Recognition</p>
            <h2>Achievements & Certificate</h2>
            <ul className="achievement-list">
              {achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
            <a
              className="inline-link"
              href="https://drive.google.com/file/d/1faqtbpxVPo3iDz5n0mDfWeG1HeWiRmjL/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              View Certificate
            </a>
          </article>
        </section>

        <section className="section contact-section reveal" id="contact">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s Build Something Useful</h2>
          </div>

          <div className="contact-card reveal">
            <p>
              I&apos;m open to React Native, frontend, and cross-platform mobile
              opportunities where strong UI, clean engineering, and dependable
              delivery matter.
            </p>

            <div className="contact-links">
              <a className="contact-pill glow-link" href="mailto:ayushgaur061@gmail.com">
                Gmail
                <span>ayushgaur061@gmail.com</span>
              </a>
              <a
                className="contact-pill glow-link"
                href="https://wa.me/919027659922"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
                <span>+91 9027659922</span>
              </a>
              <a
                className="contact-pill glow-link"
                href="https://github.com/Ayushgaur1557"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
                <span>github.com/Ayushgaur1557</span>
              </a>
              <a
                className="contact-pill glow-link"
                href="https://www.linkedin.com/in/ayush-gaur-9494942bb/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
                <span>linkedin.com/in/ayush-gaur-9494942bb</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App

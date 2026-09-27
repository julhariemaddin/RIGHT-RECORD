import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

const LOGO_URL =
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/2696.svg'

const IMG = {
  magnaCarta:
    'https://commons.wikimedia.org/wiki/Special:FilePath/Magna_Carta_(British_Library_Cotton_MS_Augustus_II.106).jpg',
  englishBill:
    'https://commons.wikimedia.org/wiki/Special:FilePath/English_Bill_of_Rights_of_1689.jpg',
  declarationRightsMan:
    'https://commons.wikimedia.org/wiki/Special:FilePath/Declaration_of_the_Rights_of_Man_and_of_the_Citizen_in_1789.jpg',
  usBillOfRights:
    'https://commons.wikimedia.org/wiki/Special:FilePath/Bill_of_Rights_Pg1of1_AC.jpg',
  eleanorRoosevelt:
    'https://commons.wikimedia.org/wiki/Special:FilePath/Eleanor_Roosevelt_and_Human_Rights_Declaration.jpg',
}

const TIMELINE = [
  {
    no: 'I',
    year: '1215',
    title: 'Magna Carta, England',
    text: "Clause 39 guarantees free men judgment by their peers or the law of the land — the earliest written seed of due process, though limited to a small landholding class.",
    img: IMG.magnaCarta,
    alt: 'Manuscript page of the 1215 Magna Carta',
  },
  {
    no: 'II',
    year: '1628',
    title: 'The Petition of Right',
    text: "English Parliament revives Magna Carta's language to challenge Charles I's imprisonments without trial, embedding the clause into ongoing constitutional struggle.",
    img: IMG.englishBill,
    alt: 'Historic English parliamentary document',
  },
  {
    no: 'III',
    year: '1689',
    title: 'The English Bill of Rights',
    text: 'Cruel punishments and excessive bail are formally barred, extending the spirit of fair treatment beyond the original clause into the everyday conduct of trials.',
    img: IMG.englishBill,
    alt: 'The English Bill of Rights of 1689',
  },
  {
    no: 'IV',
    year: '1789',
    title: 'Declaration of the Rights of Man, France',
    text: 'Article 7 declares that no one may be accused, arrested, or detained except as the law prescribes — the same promise, now claimed for every citizen of a nation, not just a noble class.',
    img: IMG.declarationRightsMan,
    alt: 'Painting depicting the Declaration of the Rights of Man and of the Citizen, 1789',
  },
  {
    no: 'V',
    year: '1791',
    title: 'The U.S. Bill of Rights',
    text: 'The Fifth and Sixth Amendments guarantee due process, an impartial jury, and the right to confront one\u2019s accuser, translating medieval English law into a new republic\u2019s charter.',
    img: IMG.usBillOfRights,
    alt: 'First page of the United States Bill of Rights',
  },
  {
    no: 'VI',
    year: '1948',
    title: 'Universal Declaration of Human Rights',
    text: 'Article 10 declares a fair and public hearing by an independent tribunal a right owed to everyone — the clause\u2019s final leap, from English barons to all of humanity.',
    img: IMG.eleanorRoosevelt,
    alt: 'Eleanor Roosevelt holding a poster of the Universal Declaration of Human Rights',
  },
]

const IMPACT = [
  {
    title: 'Limiting arbitrary power',
    text: 'It established, for the first time in writing, that even a ruler must answer to a fixed body of law rather than personal will.',
  },
  {
    title: 'A model for constitutions',
    text: 'Drafters in Philadelphia, Paris, and beyond borrowed its structure — a written check on power, binding on rulers and citizens alike.',
  },
  {
    title: 'A universal claim',
    text: 'What began as a privilege for landed barons became, through centuries of reuse, a right invoked by ordinary people on every continent.',
  },
]

// Reveal wrapper — one quiet, GPU-cheap fade/rise on transform + opacity only,
// triggered once on scroll so it never re-fires while browsing.
function Reveal({ children, delay = 0, className = '' }) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  )
}

function Hero() {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const plateY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 60])
  const plateRotate = useTransform(scrollYProgress, [0, 1], [-3, reduceMotion ? -3 : -8])

  return (
    <div className="hero" ref={ref}>
      <div className="hero-grid">
        <motion.div
          className="hero-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="file-tag">Exhibit VI · A Right Traced Across Eight Centuries</p>
          <h1>
            The Right to
            <br />a Fair Trial
          </h1>
          <p className="lede">
            From a muddy field at Runnymede to the courts of the modern
            world — how one clause of a 1215 charter grew into a right
            claimed by every person, everywhere.
          </p>
          <div className="hero-meta">
            <span>1215</span>
            <span className="meta-line" aria-hidden="true" />
            <span>Present</span>
          </div>
        </motion.div>

        <motion.div
          className="hero-plate"
          style={{ y: plateY, rotate: plateRotate }}
          initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src={IMG.magnaCarta} alt="The original 1215 Magna Carta manuscript" />
          <span className="plate-stamp">EST. 1215</span>
        </motion.div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <header>
        <div className="nav">
          <div className="brand">
            <img className="brand-logo" src={LOGO_URL} alt="" aria-hidden="true" />
            Right &amp; Record
          </div>
          <nav className="links">
            <a href="#origins">Origins</a>
            <a href="#timeline">Evolution</a>
            <a href="#text">The Text</a>
            <a href="#impact">Global Impact</a>
          </nav>
        </div>
      </header>

      <main id="main">
        <Hero />

        <div className="wrap">
          <hr className="divider" />

          <section id="origins">
            <div className="intro">
              <Reveal>
                <h2>Origins: Magna Carta, 1215</h2>
                <p>
                  In June 1215, a group of rebellious English barons forced
                  King John to seal a charter at Runnymede, limiting royal
                  power after years of arbitrary taxation and punishment
                  without cause. Buried among its sixty-three clauses was a
                  promise that would outlast the king, the barons, and the
                  century that produced it.
                </p>
                <p>
                  Clause 39 stated that no free man would be seized,
                  imprisoned, or ruined except by the lawful judgment of his
                  equals or the law of the land. It was written to protect a
                  narrow class of noblemen — yet the language of "the law of
                  the land" proved elastic enough to grow far beyond its
                  original audience.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <figure>
                  <img src={IMG.magnaCarta} alt="Page of the 1215 Magna Carta manuscript" />
                  <figcaption>
                    One of four surviving 1215 exemplars, held today at the
                    British Library.
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </section>

          <hr className="divider" />

          <section id="timeline">
            <Reveal>
              <h2>How the Right Evolved</h2>
            </Reveal>
            <div className="timeline">
              {TIMELINE.map((item, i) => (
                <Reveal key={item.year} delay={Math.min(i * 0.06, 0.3)}>
                  <div className="tl-item">
                    <div className="tl-num">{item.no}</div>
                    <div className="tl-media">
                      <motion.img
                        src={item.img}
                        alt={item.alt}
                        loading="lazy"
                        whileHover={{ scale: 1.04 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        style={{ willChange: 'transform' }}
                      />
                    </div>
                    <div className="tl-body">
                      <div className="tl-year">{item.year}</div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          <hr className="divider" />

          <section id="text">
            <Reveal>
              <h2>The Text That Started It</h2>
              <blockquote className="quote-block">
                No free man shall be taken, imprisoned, disseised, outlawed,
                or exiled, or in any way ruined, except by the lawful
                judgment of his peers or by the law of the land.
                <cite>— Magna Carta, Clause 39, 1215 (translated from Latin)</cite>
              </blockquote>
              <p className="follow">
                Nearly identical language reappears eight centuries later in
                Article 10 of the 1948 Universal Declaration of Human Rights,
                which holds that everyone is entitled to a fair hearing by an
                independent tribunal. The wording changed from Latin to
                modern English; the underlying promise barely moved at all.
              </p>
            </Reveal>
          </section>

          <hr className="divider" />

          <section id="impact">
            <Reveal>
              <h2>Why It Mattered Globally</h2>
            </Reveal>
            <div className="impact-grid">
              {IMPACT.map((card, i) => (
                <Reveal key={card.title} delay={i * 0.08}>
                  <div className="impact-card">
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        </div>

        <footer>
          <div className="wrap footer-inner">
            <p className="footer-title">
              Digital Museum Exhibit — The Right to a Fair Trial
            </p>
            <p className="footer-sub">
              Prepared for the Group Project on Rights and Their Evolution
            </p>
            <hr className="footer-rule" />
            <p className="credit">Developed by Julharie Maddin</p>
            <p className="credit credit-sub">Powered by Null-Pointer</p>
          </div>
        </footer>
      </main>
    </>
  )
}

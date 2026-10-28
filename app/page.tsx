import { assetPath } from "./asset-path";

const products = [
  {
    number: "01",
    name: "MacBasic",
    eyebrow: "Programming, made immediate",
    description:
      "A structured BASIC for macOS and GNUstep that pairs the delight of classic computing with modern blocks, functions, graphics, sound, and native app compilation.",
    tags: ["Language design", "Native macOS", "GNUstep"],
    visual: "terminal",
    href: "/downloads/MacBasic.zip",
    linkLabel: "Download MacBasic",
  },
  {
    number: "02",
    name: "PupPad",
    eyebrow: "Better days for better dogs",
    description:
      "A thoughtful home base for pet care—designed to make routines, notes, and the little moments that matter feel beautifully simple.",
    tags: ["Product design", "Web application", "Cloud platform"],
    visual: "pup",
  },
  {
    number: "03",
    name: "ScoreMaker",
    eyebrow: "See what the music is saying",
    description:
      "A lightweight native score viewer and editor that opens MIDI, MusicXML, and MusicKit scorefiles, then turns them into clear, playable notation.",
    tags: ["Music technology", "AppKit", "Cross-platform"],
    visual: "score",
    href: "/downloads/ScoreMaker.zip",
    linkLabel: "Download ScoreMaker",
  },
  {
    number: "04",
    name: "SalonSync",
    eyebrow: "The whole salon, in rhythm",
    description:
      "A connected operations platform for modern salons, bringing appointments, customers, stylists, services, inventory, checkout, and payments into one calm workflow across web and iOS.",
    tags: ["Operations platform", "Ruby on Rails", "Native iOS"],
    visual: "salon",
    href: "https://salonsync.duckdns.org",
    linkLabel: "Launch SalonSync",
  },
  {
    number: "05",
    name: "ScrubBit",
    eyebrow: "Delete with confidence",
    description:
      "A focused macOS privacy utility for overwriting selected files, folders, and removable media—with clear device details and live progress through every pass.",
    tags: ["Privacy utility", "Native macOS", "Disk management"],
    visual: "scrubbit",
    href: "/downloads/ScrubBit.zip",
    linkLabel: "Download ScrubBit",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function ProductVisual({ type }: { type: string }) {
  if (type === "terminal") {
    return (
      <div className="product-visual terminal-visual" aria-hidden="true">
        <div className="window-bar"><i /><i /><i /><span>hello.bas</span></div>
        <pre><b>SUB</b> Greet(name$){"\n  "}<em>PRINT</em> &quot;Hello, &quot; + name${"\n"}<b>END SUB</b>{"\n\n"}Greet(&quot;world&quot;)<span className="cursor">_</span></pre>
        <div className="result-line">Hello, world</div>
      </div>
    );
  }

  if (type === "pup") {
    return (
      <div className="product-visual pup-visual" aria-hidden="true">
        <div className="pup-card">
          <div className="pup-face">●ᴥ●</div>
          <div><small>GOOD MORNING</small><strong>Milo’s day</strong></div>
        </div>
        <div className="routine"><span>08:00</span><b>Morning walk</b><i>✓</i></div>
        <div className="routine"><span>09:15</span><b>Breakfast</b><i>✓</i></div>
        <div className="routine muted"><span>14:00</span><b>Park time</b><i>→</i></div>
      </div>
    );
  }

  if (type === "score") {
    return (
      <div className="product-visual score-visual" aria-hidden="true">
        <div className="score-toolbar"><span>Score No. 04</span><b>▶ Play</b></div>
        <div className="staff">
          <div className="clef">𝄞</div>
          <div className="note n1">♪</div><div className="note n2">♩</div>
          <div className="note n3">♫</div><div className="note n4">♩</div>
        </div>
        <div className="score-meta"><span>Andante</span><span>4 / 4</span><span>84 BPM</span></div>
      </div>
    );
  }

  if (type === "salon") {
    return (
      <div className="product-visual salon-visual" aria-hidden="true">
        <div className="salon-topline"><span>SALONSYNC</span><b>Today · 8 appointments</b></div>
        <div className="salon-dashboard">
          <div className="salon-calendar">
            <small>THURSDAY / JUL 30</small>
            <div><span>9:00</span><b>Cut + style</b><i>AM</i></div>
            <div><span>10:30</span><b>Color service</b><i>JR</i></div>
            <div><span>1:00</span><b>Consultation</b><i>SK</i></div>
          </div>
          <div className="salon-summary">
            <small>DAILY PULSE</small>
            <strong>$1,240</strong>
            <span>Projected revenue</span>
            <div className="salon-meter"><i /></div>
            <b>75% booked</b>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="product-visual scrubbit-visual" aria-hidden="true">
      <div className="scrub-window">
        <div className="scrub-head"><span><i /> SCRUBBIT</span><b>PRIVACY UTILITY</b></div>
        <div className="drive-card">
          <div className="drive-icon">▰</div>
          <div><small>REMOVABLE MEDIA</small><strong>Archive Drive</strong><span>USB · 128 GB · /Volumes/Archive</span></div>
          <i>✓</i>
        </div>
        <div className="scrub-progress">
          <div><span>Overwrite progress</span><b>72%</b></div>
          <div className="scrub-track"><i /></div>
          <small>PASS 3 OF 4 · PROCESSING SELECTED DATA</small>
        </div>
      </div>
      <div className="scrub-status"><span>FILES</span><b>OVERWRITE</b><span>VERIFY</span></div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Black Lotus home">
          <img src={assetPath("/black-lotus-logo.png")} alt="" />
          <span>BLACK LOTUS<small>INCORPORATED</small></span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#services">Consulting</a>
          <a href="#approach">Approach</a>
          <a href="#support">Support</a>
          <a href="#contact" className="nav-cta">Start a project <Arrow /></a>
        </div>
      </nav>

      <header className="hero shell" id="top">
        <div className="hero-kicker"><span>Independent software studio</span><span>Est. 2023 · Maryland</span></div>
        <div className="hero-grid">
          <h1>Technology<br />with <em>soul.</em></h1>
          <div className="hero-aside">
            <p>We design and build distinctive digital products—and help ambitious teams make smarter technology decisions.</p>
            <a href="#work" className="text-link">Explore our work <Arrow /></a>
          </div>
          <div className="hero-mark" aria-hidden="true">
            <img src={assetPath("/black-lotus-logo.png")} alt="" />
          </div>
        </div>
        <div className="hero-marquee" aria-label="Services">
          <div>PRODUCT STRATEGY <i>✦</i> EXPERIENCE DESIGN <i>✦</i> SOFTWARE ENGINEERING <i>✦</i> MODERNIZATION <i>✦</i></div>
        </div>
      </header>

      <section className="work shell" id="work">
        <div className="section-heading">
          <span className="label">Selected work / 2026</span>
          <h2>Built to be<br /><em>remembered.</em></h2>
          <p>Original products and careful modernizations, each shaped around a real human need.</p>
        </div>

        <div className="product-list">
          {products.map((product) => (
            <article className="product" key={product.name}>
              <div className="product-copy">
                <span className="product-number">{product.number}</span>
                <p className="eyebrow">{product.eyebrow}</p>
                <h3>{product.name}</h3>
                <p className="description">{product.description}</p>
                <div className="tags">{product.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                {product.href && (
                  <a className="product-link" href={product.href.startsWith("/") ? assetPath(product.href) : product.href}>
                    {product.linkLabel} <Arrow />
                  </a>
                )}
              </div>
              <ProductVisual type={product.visual} />
            </article>
          ))}
        </div>
      </section>

      <section className="services shell" id="services">
        <div className="services-intro">
          <span className="label">Consulting services</span>
          <h2>Expert thinking.<br /><em>Practical momentum.</em></h2>
          <p>Bring us the hard problem, the half-formed idea, or the system that no longer fits. We meet your team where it is and create a clear path forward.</p>
        </div>
        <div className="service-grid">
          <article>
            <span>01 / STRATEGY</span>
            <h3>Product direction</h3>
            <p>Opportunity framing, product roadmaps, technical discovery, and rapid prototypes that turn uncertainty into an actionable plan.</p>
          </article>
          <article>
            <span>02 / DELIVERY</span>
            <h3>Software engineering</h3>
            <p>Focused design and development for web, mobile, and native applications—from a first working release to the next critical capability.</p>
          </article>
          <article>
            <span>03 / MODERNIZATION</span>
            <h3>Legacy, renewed</h3>
            <p>Thoughtful upgrades for valuable existing software: architecture, interfaces, platform support, packaging, and maintainability.</p>
          </article>
          <article>
            <span>04 / ADVISORY</span>
            <h3>Technical counsel</h3>
            <p>Independent architecture reviews, team guidance, vendor evaluation, and hands-on problem solving for consequential decisions.</p>
          </article>
        </div>
        <a className="services-cta" href="mailto:greg.casamento@gmail.com?subject=Consulting%20inquiry">
          <span>Tell us what you’re working through</span><Arrow />
        </a>
      </section>

      <section className="approach" id="approach">
        <div className="shell">
          <div className="section-heading light">
            <span className="label">How we work</span>
            <h2>Small team.<br /><em>Serious craft.</em></h2>
          </div>
          <div className="principles">
            <article><span>01</span><h3>Find the signal</h3><p>We clarify the problem, audience, and opportunity before a single screen is built.</p></article>
            <article><span>02</span><h3>Make it tangible</h3><p>We prototype early, put the product in your hands, and use real feedback to shape it.</p></article>
            <article><span>03</span><h3>Build for the long run</h3><p>Clean foundations, thoughtful details, and a product your team can confidently grow.</p></article>
          </div>
          <div className="quote">
            <p>“The best technology doesn’t ask for attention. It earns affection.”</p>
            <img src={assetPath("/black-lotus-logo.png")} alt="Black Lotus emblem" />
          </div>
        </div>
      </section>

      <section className="support shell" id="support" aria-labelledby="support-heading">
        <span className="label">Product support</span>
        <h2 id="support-heading">How can we help?</h2>
        <p>For help with any Black Lotus app, bug reports, or questions, contact Greg Casamento at <a href="mailto:greg.casamento@gmail.com">greg.casamento@gmail.com</a>.</p>
        <p>Please include the app name and version, your device and operating system version, and a description of the issue. Never send passwords or payment details.</p>
        <div className="support-links" aria-label="Support by app">
          {products.map((product) => (
            <a key={product.name} href={`mailto:greg.casamento@gmail.com?subject=${encodeURIComponent(`${product.name} support`)}`}>
              {product.name} support <Arrow />
            </a>
          ))}
        </div>
      </section>

      <section className="contact shell" id="contact">
        <span className="label">Building something—or solving something?</span>
        <h2>Let’s make it<br /><em>bloom.</em></h2>
        <a className="contact-button" href="mailto:greg.casamento@gmail.com">
          <span>Start a conversation</span><Arrow />
        </a>
        <div className="contact-footer">
          <div><strong>Black Lotus Incorporated</strong><span>Independent software studio</span></div>
          <div className="footer-links">
            <a href="#support">App support</a>
            <a href="mailto:greg.casamento@gmail.com">Contact: greg.casamento@gmail.com</a>
          </div>
          <span>© 2026 · Built with intention</span>
        </div>
      </section>
    </main>
  );
}

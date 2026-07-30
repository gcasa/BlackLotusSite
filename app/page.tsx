const products = [
  {
    number: "01",
    name: "MacBasic",
    eyebrow: "Programming, made immediate",
    description:
      "A structured BASIC for macOS and GNUstep that pairs the delight of classic computing with modern blocks, functions, graphics, sound, and native app compilation.",
    tags: ["Language design", "Native macOS", "GNUstep"],
    visual: "terminal",
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
  },
  {
    number: "04",
    name: "FreeBee",
    eyebrow: "Computing history, kept alive",
    description:
      "A modern macOS experience for the AT&T 3B1 emulator—portable packaging, native menus, display controls, and a frictionless first boot.",
    tags: ["Emulation", "macOS integration", "Preservation"],
    visual: "freebee",
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

  return (
    <div className="product-visual freebee-visual" aria-hidden="true">
      <div className="crt">
        <div className="crt-head"><span>FREEBEE / UNIX PC</span><i>●</i></div>
        <pre>AT&amp;T UNIX PC{"\n"}System V Release 3.51{"\n\n"}login: <span className="blink">_</span></pre>
      </div>
      <div className="machine-label">3B1 · 68010 · 1985 / 2026</div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Black Lotus home">
          <img src="/black-lotus-logo.png" alt="" />
          <span>BLACK LOTUS<small>INCORPORATED</small></span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#approach">Approach</a>
          <a href="#contact" className="nav-cta">Start a project <Arrow /></a>
        </div>
      </nav>

      <header className="hero shell" id="top">
        <div className="hero-kicker"><span>Independent software studio</span><span>Est. 2026 · Pennsylvania</span></div>
        <div className="hero-grid">
          <h1>Technology<br />with <em>soul.</em></h1>
          <div className="hero-aside">
            <p>We design and build distinctive digital products—from modern web experiences to native software and computing tools.</p>
            <a href="#work" className="text-link">Explore our work <Arrow /></a>
          </div>
          <div className="hero-mark" aria-hidden="true">
            <img src="/black-lotus-logo.png" alt="" />
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
              </div>
              <ProductVisual type={product.visual} />
            </article>
          ))}
        </div>
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
            <img src="/black-lotus-logo.png" alt="Black Lotus emblem" />
          </div>
        </div>
      </section>

      <section className="contact shell" id="contact">
        <span className="label">Have something in mind?</span>
        <h2>Let’s make it<br /><em>bloom.</em></h2>
        <a className="contact-button" href="mailto:hello@blacklotus.inc">
          <span>Start a conversation</span><Arrow />
        </a>
        <div className="contact-footer">
          <div><strong>Black Lotus Incorporated</strong><span>Independent software studio</span></div>
          <a href="mailto:hello@blacklotus.inc">hello@blacklotus.inc</a>
          <span>© 2026 · Built with intention</span>
        </div>
      </section>
    </main>
  );
}

const services = [
  ['Video Production', 'Professional promotional videos, brand storytelling and visual campaigns for modern businesses.'],
  ['Video Editing', 'Polished editing for reels, adverts, YouTube content, interviews, podcasts and campaigns.'],
  ['Social Media Content', 'Scroll-stopping content designed for Instagram, TikTok, LinkedIn and YouTube Shorts.'],
];

const portfolio = ['Brand Launch Video', 'Social Reels Campaign', 'Podcast Edit Package', 'Product Promo Video'];
const stats = [['120+', 'videos and edits delivered'], ['42%', 'average social reach increase'], ['3.8x', 'average engagement lift']];
const testimonials = [
  ['LVG Creative made our brand look polished, modern and ready for social media.', 'Small Business Client'],
  ['The video edits were fast, clean and exactly what we needed for our campaign.', 'Marketing Lead'],
  ['Our content finally feels consistent across Instagram, TikTok and LinkedIn.', 'Founder'],
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top">
          <img src="/logo.jpeg" alt="LVG Creative logo" />
          <span>LVG Creative</span>
        </a>
        <div className="navLinks">
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="top" className="hero section">
        <div className="heroText">
          <p className="eyebrow">Creative video and social media content</p>
          <h1>Turn attention into memorable brand content.</h1>
          <p className="lead">LVG Creative helps businesses grow through video production, professional editing and social-first content that builds attention and drives engagement.</p>
          <div className="actions">
            <a className="button primary" href="mailto:leah@lvgcreative.co.uk">Start a project</a>
            <a className="button secondary" href="#services">View services</a>
          </div>
        </div>
        <div className="heroCard">
          <img src="/logo.jpeg" alt="LVG Creative" />
          <h2>Video. Editing. Social.</h2>
          <p>Creative content made for brands that want to look sharper online.</p>
        </div>
      </section>

      <section id="services" className="section">
        <p className="eyebrow">Services</p>
        <h2>Everything you need to show up online.</h2>
        <div className="grid three">
          {services.map(([title, text]) => (
            <article className="card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="stats">
        {stats.map(([number, label]) => (
          <div key={label}>
            <strong>{number}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section id="portfolio" className="section">
        <p className="eyebrow">Portfolio</p>
        <h2>Showreels, reels, edits and campaigns.</h2>
        <p className="muted">Add your best client work, sample videos or showreel here when ready.</p>
        <div className="grid four">
          {portfolio.map((item) => (
            <article className="portfolio" key={item}>
              <div>Video Placeholder</div>
              <h3>{item}</h3>
              <p>Replace this with an embedded video or case study.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Process</p>
          <h2>A simple system for better content.</h2>
        </div>
        <ol className="steps">
          <li>Plan your content goals</li>
          <li>Capture or collect the assets</li>
          <li>Edit for the right platforms</li>
          <li>Publish consistently and improve</li>
        </ol>
      </section>

      <section className="section">
        <p className="eyebrow">Testimonials</p>
        <h2>Trusted by growing brands and creators.</h2>
        <div className="grid three">
          {testimonials.map(([quote, name]) => (
            <article className="card" key={name}>
              <p>“{quote}”</p>
              <strong>{name}</strong>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2>Ready to make better content?</h2>
        <p>Book a free strategy chat or send your project details directly.</p>
        <a className="button dark" href="mailto:leah@lvgcreative.co.uk">Email leah@lvgcreative.co.uk</a>
        <p className="domain">www.lvgcreative.co.uk</p>
      </section>
    </main>
  );
}

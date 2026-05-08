import React, { useState } from 'react';
import './App.css';
import me from './Assets/Tmiling.jpg';
import helloWorld from './Assets/helloWorld.png';

import MyCard from "./Tonya/Components/myCard";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="portfolio-page">
      <header className="site-header">
        <div className="header-inner">
          <button
            type="button"
            className={`nav-toggle ${menuOpen ? 'open' : ''}`}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
            <a href="#about" onClick={() => setMenuOpen(false)}>About Me</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            <a href="#work" onClick={() => setMenuOpen(false)}>Portfolio</a>
            <a href="#journal" onClick={() => setMenuOpen(false)}>Podcast</a>
            <a href="#photos" onClick={() => setMenuOpen(false)}>Photo Gallery</a>
          </nav>
        </div>
      </header>

      <main>

        <section className="hero-section">
          <div className="hero-overlay" />
          <div className="hero-grid">
            <div className="hero-copy">
              <div id='about'>

        <div className={'myName'}>Tonya Judkins</div>
        <div className={'brand'} >
          About Me
        </div>
  
        <div  >
          I am a Software Engineer From Chicago.  I started off building frontend web applications, mostly using Reactjs.
          Today's workflow consist of backend development, infrastructure, database, and cloud computing.
        </div>
        <div className={'life'} >
          My journey into technology has been one of the best experiences in my life.  I love the innovation, dedication, and networking.
          I believe that it is important to create leaders in business and technology from different communities.  
          Throughout my journey I have met a lot of people.  One of the most motivating things that I have experienced is the women who were advocating for women in tech.  It's an empowering experience that boosted my confidence and eased my fear of failing.
        </div>
        <div className={'life'} >
          I am a huge advocate for <span className={'wit'}>WOMEN IN TECHNOLOGY</span> and diversity and inclusion.
        </div>
      </div>
              <MyCard/>
            </div>

            <div className="hero-visual">
              <div className="hero-frame">
                <img
                  src={me}
                  alt="Portrait"
                />
              </div>
              <div className="hero-tag hero-tag-top hero-badge">
                Technologist • Innovator • Builder
              </div>
            </div>
          </div>
        </section>

        <section className="personality-section">
          <div className="section-intro">
            <span>Personality Snapshot</span>
            <h2>More than just projects.</h2>
          </div>

          <div className="personality-grid">
            <article className="card large-card">
              <div>
                <span>Philosophy</span>
                <h3>Great experiences should feel human first.</h3>
              </div>
              <p>
                I believe the best digital products connect emotionally before
                they impress technically.
              </p>
            </article>

            <article className="card accent-card">
              <span>Currently</span>
              <ul>
                <li>Reading: Creative Confidence</li>
                <li>Listening: Jazz + Lo-fi</li>
                <li>Learning: Motion design</li>
              </ul>
            </article>

            <article className="card values-card">
              <span>Values</span>
              <div className="value-tags">
                {['Authenticity', 'Curiosity', 'Empathy', 'Creativity'].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>

            <article className="card image-card">
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop"
                alt="Lifestyle"
              />
            </article>

            <article className="card quote-card">
              <span>Quote</span>
              <blockquote>“People remember how your work made them feel.”</blockquote>
            </article>
          </div>
        </section>

        <section id="work" className="work-section">
          <div className="section-header">
            <div>
              <span>Featured Work</span>
              <h2>Selected projects and creative collaborations.</h2>
            </div>
            <p>
              A curated collection of projects focused on storytelling,
              strategy, and impactful visual experiences.
            </p>
          </div>

          <div className="work-list">
            {[1, 2, 3].map((project, index) => (
              <div
                key={project}
                className={`project-card ${index % 2 === 1 ? 'reverse' : ''}`}>
                <div className="project-media">
                  <img
                    src={`https://picsum.photos/1200/900?random=${project}`}
                    alt="Project"
                  />
                </div>
                <div className="project-copy">
                  <span>Brand Experience</span>
                  <h3>Designing emotionally memorable digital experiences.</h3>
                  <p>
                    A creative project focused on transforming brand identity
                    into a modern, immersive digital experience.
                  </p>
                  <div className="project-tags">
                    {['Strategy', 'Design', 'UX', 'Storytelling'].map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <button className="link-button">View Case Study</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="about-content">
            <span>About</span>
            <h2>I care about creating work that people actually connect with.</h2>
            <p>
              My work lives at the intersection of creativity, strategy, and
              human-centered thinking. I’m interested in experiences that feel
              intentional, emotionally resonant, and visually distinct.
            </p>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-card">
            <span>Let’s Connect</span>
            <h2>Interested in creating something memorable together?</h2>
            <p>
              Whether it’s a collaboration, creative opportunity, or just a good
              conversation — I’d love to hear from you.
            </p>
            <button className="btn btn-primary">Start a Conversation</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

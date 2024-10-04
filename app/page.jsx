"use client"
import { useEffect, useRef, useState } from "react";
import Head from "next/head";

export default function Home() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="container">
        <header>
          <p>Muhammet Hasan Türkmen</p>
          <div className="link">
            <a href="#about" onClick={() => scrollToSection(aboutRef)}>About</a>
            <a href="#work" onClick={() => scrollToSection(workRef)}>Work</a>
            <a href="#contact" onClick={() => scrollToSection(contactRef)}>Contact</a>
          </div>
          <div className="dark-light">
            <label>
              <div className="icon" onClick={toggleTheme}>
                {theme === 'light' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.997 11.999" className="cc-sun">
                    <path fill="currentColor" d="M5.599 11.601v-1a.4.4 0 0 1 .4-.4.4.4 0 0 1 .4.4v1a.4.4 0 0 1-.4.4.4.4 0 0 1-.4-.4Zm4.075-1.356-.708-.707a.4.4 0 0 1 0-.565.4.4 0 0 1 .567 0l.705.707a.4.4 0 0 1 0 .565.391.391 0 0 1-.282.117.4.4 0 0 1-.28-.12Zm-7.919 0a.4.4 0 0 1 0-.565l.707-.707a.4.4 0 0 1 .565 0 .4.4 0 0 1 0 .565l-.707.707a.39.39 0 0 1-.283.117.393.393 0 0 1-.28-.12Zm.493-4.533a3.463 3.463 0 0 1 3.457-3.46 3.463 3.463 0 0 1 3.457 3.46 3.46 3.46 0 0 1-3.457 3.456A3.46 3.46 0 0 1 2.25 5.709Zm.813 0a2.648 2.648 0 0 0 2.645 2.642 2.646 2.646 0 0 0 2.645-2.642 2.647 2.647 0 0 0-2.645-2.645 2.649 2.649 0 0 0-2.644 2.642Zm7.537.689a.4.4 0 0 1-.4-.4.4.4 0 0 1 .4-.4h1a.4.4 0 0 1 .4.4.4.4 0 0 1-.4.4Zm-10.2 0a.4.4 0 0 1-.4-.4.4.4 0 0 1 .4-.4h1a.4.4 0 0 1 .4.4.4.4 0 0 1-.4.4Zm8.568-3.367a.4.4 0 0 1 0-.568l.708-.705a.4.4 0 0 1 .564 0 .4.4 0 0 1 0 .565l-.705.708a.407.407 0 0 1-.284.114.406.406 0 0 1-.281-.117Zm-6.5 0-.707-.708a.4.4 0 0 1 0-.565.4.4 0 0 1 .565 0l.707.705a.4.4 0 0 1 0 .568.406.406 0 0 1-.282.114.4.4 0 0 1-.285-.117Zm3.137-1.632v-1a.4.4 0 0 1 .4-.4.4.4 0 0 1 .4.4v1a.4.4 0 0 1-.4.4.4.4 0 0 1-.404-.401Z"></path>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" className="cc-moon">
                    <path fill="none" d="M0 0h12v12H0z"></path>
                    <path fill="currentColor" d="M6.315 10.617q-.223 0-.448-.02a4.93 4.93 0 0 1-.876-9.66.394.394 0 0 1 .486.486 4.142 4.142 0 0 0 5.1 5.1.394.394 0 0 1 .486.486 4.943 4.943 0 0 1-4.748 3.608Zm-1.741-8.69a4.142 4.142 0 1 0 5.5 5.5 4.931 4.931 0 0 1-5.5-5.5Z"></path>
                  </svg>
                )}
              </div>
            </label>
          </div>
        </header>
        <div className="hero">
          <div className="hero-top">
            <div className="hero-title">
              <h1>Front End Developer</h1>
            </div>
            <div className="hero-sub">
              <p>Specialized in Front-End Development, with a focus on creating responsive and interactive websites using modern technologies.</p>
            </div>
          </div>
          <div ref={aboutRef} className="hero-botton">
            <p>I assist startups and business owners in creating visually engaging websites through expert Front-End Development, helping them boost brand visibility and increase sales.</p>
            <div className="hero-social">
              <ul>
                <li><span>Let's get connected</span></li>
                <li>Github</li>
                <li>Linkedn</li>
                <li>Vercel</li>
                <li>Netlify</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services">
          <div className="services-header">
            <h2>I can help you with ...</h2>
          </div>
          <div className="services-list">
            <div className="services-item">
              <span>01</span>
              <h2>Design</h2>
              <p>I make web designs that engage your audience and create the user experience you want.</p>
            </div>
            <div className="services-item">
              <span>02</span>
              <h2>Development</h2>
              <p>Bringing visuals to life through developing highly functional web solutions.</p>
            </div>
            <div className="services-item">
              <span>03</span>
              <h2>The Full Package</h2>
              <p>Get the best of both worlds for your website, capture your brand identity and get fully functional features.</p>
            </div>
          </div>
        </div>
        <div className="works">
          <div ref={workRef} className="works-header">
            <h3>Works</h3>
          </div>
          <div className="works-list">
            <a className="ciz" href="https://github.com/muhammethasanturkmen">
              <h2 className="works-title">Github</h2>
              <div className="year">/24</div>
            </a>
            <a className="ciz" href="https://vercel.com/muhammet-hasan-turkmens-projects">
              <h2 className="works-title">Vercel</h2>
              <div className="year">/24</div>
            </a>
            <a className="ciz" href="https://app.netlify.com/teams/muhammethasanturkmen/sites">
              <h2 className="works-title">Netlify</h2>
              <div className="year">/24</div>
            </a>
          </div>
          <div className="works-footer">
            <h3>Want to see more?</h3>
            <p>
              Reach me out at
              <a href="mailto:muhammethasanturkmen@gmail.com">
                muhammethasanturkmen@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div ref={contactRef} className="footer">
          <div className="footer-end">
            <div className="footer-content">
              <h3> Let’s talk about a project, collaboration or an idea you may have</h3>
            </div>
            <a className="btn" href="mailto:muhammethasanturkmen@gmail.com">
              <span>Drop me a line</span>
              <div className="btn-icon">
                <div className="btn-nokta"></div>
                <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24"><path d="m7.012 18.069 9.702-9.702v7.298l1.499.028-.014-8.81-1.132-1.132-8.81-.014.028 1.499h7.298L5.88 16.937l1.131 1.132Z" fill="currentColor"></path></svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

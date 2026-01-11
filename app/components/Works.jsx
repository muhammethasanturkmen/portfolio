'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Works({ workRef }) {
  const headerRef = useRef(null);
  const linksRef = useRef([]);
  const footerRef = useRef(null);

  useEffect(() => {

    gsap.from(headerRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power3.out',
    });


    gsap.from(linksRef.current, {
      scrollTrigger: {
        trigger: linksRef.current[0],
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 40,
      scale: 0.95,
      stagger: 0.25,
      duration: 0.8,
      ease: 'power3.out',
    });


    gsap.from(footerRef.current, {
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  return (
    <div className="works">
      <div ref={(el) => { headerRef.current = el; if (workRef) workRef.current = el; }} className="works-header">
        <h3>Works</h3>
      </div>
      <div className="works-list">
        {[
          { href: "https://github.com/muhammethasanturkmen", title: "Github", year: "/24" },
          { href: "https://vercel.com/muhammet-hasan-turkmens-projects", title: "Vercel", year: "/24" },
          { href: "https://app.netlify.com/teams/muhammethasanturkmen/sites", title: "Netlify", year: "/24" },
        ].map(({ href, title, year }, index) => (
          <a
            key={index}
            href={href}
            className="ciz"
            ref={(el) => (linksRef.current[index] = el)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="works-title">{title}</h2>
            <div className="year">{year}</div>
          </a>
        ))}
      </div>
      <div className="works-footer" ref={footerRef}>
        <h3>Want to see more?</h3>
        <p>
          Reach me out at{' '}
          <a href="mailto:muhammethasanturkmen@gmail.com">
            muhammethasanturkmen@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}

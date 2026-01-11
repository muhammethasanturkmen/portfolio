'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ aboutRef }) {
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const bottomRef = useRef(null);
  const socialRefs = useRef([]);

  useEffect(() => {

    const splitTitle = new SplitType(titleRef.current, { types: 'chars' });
    gsap.from(splitTitle.chars, {
      y: 50,
      opacity: 0,
      stagger: 0.03,
      duration: 1,
      ease: 'power3.out',
    });

    gsap.from(subRef.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      delay: 0.6,
      ease: 'power2.out',
    });

    gsap.from(bottomRef.current, {
      scrollTrigger: {
        trigger: bottomRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power2.out',
    });

    gsap.from(socialRefs.current, {
      scrollTrigger: {
        trigger: bottomRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power2.out',
    });
  }, []);

  return (
    <div className="hero">
      <div className="hero-top">
        <div ref={titleRef} className="hero-title">
          <h1>Front End</h1>
          <h1>Developer</h1>
        </div>
        <div className="hero-sub">
          <p ref={subRef}>
            Specialized in Front-End Development, with a focus on creating responsive and interactive websites using modern technologies.
          </p>
        </div>
      </div>
      <div ref={aboutRef} className="hero-botton">
        <p ref={bottomRef}>
          I assist startups and business owners in creating visually engaging websites through expert Front-End Development, helping them boost brand visibility and increase sales.
        </p>
        <div className="hero-social">
          <ul>
            <li><span>Let's get connected</span></li>
            {['Github', 'LinkedIn', 'Vercel', 'Netlify'].map((item, index) => (
              <li
                key={index}
                ref={el => (socialRefs.current[index] = el)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

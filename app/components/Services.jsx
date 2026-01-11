'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const headerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    gsap.from(headerRef.current, {
      scrollTrigger: {
        trigger: itemsRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: -50,
      duration: 1,
      ease: 'power3.out',
    });

    gsap.from(itemsRef.current, {
      scrollTrigger: {
        trigger: itemsRef.current[0],
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 50,
      stagger: 0.3,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  return (
    <div className="services">
      <div className="services-header" ref={headerRef}>
        <h2>I can help you with ...</h2>
      </div>
      <div className="services-list">
        {[
          {
            number: '01',
            title: 'Design',
            description: 'I make web designs that engage your audience and create the user experience you want.',
          },
          {
            number: '02',
            title: 'Development',
            description: 'Bringing visuals to life through developing highly functional web solutions.',
          },
          {
            number: '03',
            title: 'The Full Package',
            description: 'Get the best of both worlds for your website, capture your brand identity and get fully functional features.',
          },
        ].map(({ number, title, description }, index) => (
          <div
            className="services-item"
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
          >
            <span>{number}</span>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export default function Footer({ contactRef }) {
  const contentRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // h3'ü harflerine böl
    const splitHeading = new SplitType(contentRef.current.querySelector('h3'), {
      types: 'chars',
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contactRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    // Harf harf aşağıdan gelme + fade-in
    tl.from(splitHeading.chars, {
      y: 50,
      opacity: 0,
      stagger: 0.05,
      duration: 0.8,
      ease: 'power3.out',
    })

    // Renk parlaklığı animasyonu (sonsuz yoyo)
    .to(splitHeading.chars, {
      color: '#d2b48c', // istediğin parlak renk
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      stagger: 0.05,
    }, '-=0.5') // bir miktar üst üste binme

    // Buton animasyonu
    .from(buttonRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.5');
  }, []);

  return (
    <div ref={contactRef} className="footer">
      <div className="footer-end">
        <div className="footer-content" ref={contentRef}>
          <h3>{`Let's talk about a project, collaboration or an idea you may have`}</h3>
        </div>
        <a
          className="btn"
          href="mailto:muhammethasanturkmen@gmail.com"
          ref={buttonRef}
        >
          <span>Drop me a line</span>
          <div className="btn-icon">
            <div className="btn-nokta"></div>
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="m7.012 18.069 9.702-9.702v7.298l1.499.028-.014-8.81-1.132-1.132-8.81-.014.028 1.499h7.298L5.88 16.937l1.131 1.132Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}

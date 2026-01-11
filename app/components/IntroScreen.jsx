'use client';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function IntroScreen({ onFinish }) {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setVisible(false);
        if (onFinish) onFinish();
      }
    });

    tl.from(titleRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out"
    })
    .to(titleRef.current, {
      opacity: 1,
      duration: 0.8,
      ease: "power1.inOut",
      delay: 0.8
    })
    .to(containerRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      delay: 0.5
    });

  }, []);

  if (!visible) return null;

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#222',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontSize: '2rem',
        fontWeight: 'bold',
        zIndex: 9999,
      }}
    >
      <h1 ref={titleRef}>Welcome to My Website</h1>
    </div>
  );
}

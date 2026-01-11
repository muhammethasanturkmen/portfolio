'use client';
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function Header({ scrollToSection, aboutRef, workRef, contactRef }) {
  const [theme, setTheme] = useState("light");

  const headerRef = useRef(null);
  const linksRef = useRef([]);
  const toggleRef = useRef(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
    }
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header container animasyonu
      gsap.from(headerRef.current, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power3.out",
      });

      // Linklere stagger animasyon
      gsap.from(linksRef.current, {
        opacity: 0,
        y: 20,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      });

      // Tema toggle ikon animasyonu
      gsap.from(toggleRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: 0.5,
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <header ref={headerRef}>
      <p>Muhammet Hasan Türkmen</p>
      <div className="link">
        {[
          { label: "About", ref: aboutRef },
          { label: "Work", ref: workRef },
          { label: "Contact", ref: contactRef },
        ].map(({ label, ref }, i) => (
          <a
            key={label}
            href={`#${label.toLowerCase()}`}
            onClick={() => scrollToSection(ref)}
            ref={(el) => (linksRef.current[i] = el)}
            style={{ cursor: "pointer" }}
          >
            {label}
          </a>
        ))}
      </div>
      <div className="dark-light">
        <label>
          <div
            className="icon"
            onClick={toggleTheme}
            ref={toggleRef}
            style={{ cursor: "pointer" }}
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 11.997 11.999"
                className="cc-sun"
              >
                <path
                  fill="currentColor"
                  d="M5.599 11.601v-1a.4.4 0 0 1 .4-.4.4.4 0 0 1 .4.4v1a.4.4 0 0 1-.4.4.4.4 0 0 1-.4-.4Zm4.075-1.356-.708-.707a.4.4 0 0 1 0-.565.4.4 0 0 1 .567 0l.705.707a.4.4 0 0 1 0 .565.391.391 0 0 1-.282.117.4.4 0 0 1-.28-.12Zm-7.919 0a.4.4 0 0 1 0-.565l.707-.707a.4.4 0 0 1 .565 0 .4.4 0 0 1 0 .565l-.707.707a.39.39 0 0 1-.283.117.393.393 0 0 1-.28-.12Zm.493-4.533a3.463 3.463 0 0 1 3.457-3.46 3.463 3.463 0 0 1 3.457 3.46 3.46 3.46 0 0 1-3.457 3.456A3.46 3.46 0 0 1 2.25 5.709Zm.813 0a2.648 2.648 0 0 0 2.645 2.642 2.646 2.646 0 0 0 2.645-2.642 2.647 2.647 0 0 0-2.645-2.645 2.649 2.649 0 0 0-2.644 2.642Zm7.537.689a.4.4 0 0 1-.4-.4.4.4 0 0 1 .4-.4h1a.4.4 0 0 1 .4.4.4.4 0 0 1-.4.4Zm-10.2 0a.4.4 0 0 1-.4-.4.4.4 0 0 1 .4-.4h1a.4.4 0 0 1 .4.4.4.4 0 0 1-.4.4Zm8.568-3.367a.4.4 0 0 1 0-.568l.708-.705a.4.4 0 0 1 .564 0 .4.4 0 0 1 0 .565l-.705.708a.407.407 0 0 1-.284.114.406.406 0 0 1-.281-.117Zm-6.5 0-.707-.708a.4.4 0 0 1 0-.565.4.4 0 0 1 .565 0l.707.705a.4.4 0 0 1 0 .568.406.406 0 0 1-.282.114.4.4 0 0 1-.285-.117Zm3.137-1.632v-1a.4.4 0 0 1 .4-.4.4.4 0 0 1 .4.4v1a.4.4 0 0 1-.4.4.4.4 0 0 1-.404-.401Z"
                ></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 12 12"
                className="cc-moon"
              >
                <path fill="none" d="M0 0h12v12H0z" />
                <path
                  fill="currentColor"
                  d="M6.315 10.617q-.223 0-.448-.02a4.93 4.93 0 0 1-.876-9.66.394.394 0 0 1 .486.486 4.142 4.142 0 0 0 5.1 5.1.394.394 0 0 1 .486.486 4.943 4.943 0 0 1-4.748 3.608Zm-1.741-8.69a4.142 4.142 0 1 0 5.5 5.5 4.931 4.931 0 0 1-5.5-5.5Z"
                ></path>
              </svg>
            )}
          </div>
        </label>
      </div>
    </header>
  );
}

"use client";
import { useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Works from "./components/Works";
import Footer from "./components/Footer";


export default function Home() {
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container">
      <Header scrollToSection={scrollToSection} aboutRef={aboutRef} workRef={workRef} contactRef={contactRef} />
      <Hero aboutRef={aboutRef} />
      <Services />
      <Works workRef={workRef} />
      <Footer contactRef={contactRef} />
    </div>
  );
}

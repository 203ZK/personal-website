import { useState } from 'react';
import "./styles/index.css";
import Navbar from './components/Navbar';
import Intro from "./components/Intro";
import Section from "./components/Section";

function App() {
  return (
    <>
      <Navbar />
      <Intro />

      <div className="links-to-section-container">
        <Section title="Education & Experiences" link="/education-and-experiences" />
        <Section title="Projects" link="/projects" />
        <Section title="Interests" link="/interests" />
      </div>
    </>
  );
}

export default App

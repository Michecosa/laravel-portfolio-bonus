import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Projects from "../components/Projects";

export default function Homepage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
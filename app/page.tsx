import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <div id="preview">
          <Projects />
          <Skills />
          <Contact />
        </div>
      </main>
    </>
  );
}
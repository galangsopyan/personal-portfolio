import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-24">
        <Projects />
      </main>

    </>
  );
}
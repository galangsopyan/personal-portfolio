import Navbar from "../components/Navbar";
import Skills from "../components/Skills";

export default function SkillsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-24">
        <Skills />
      </main>
    </>
  );
}
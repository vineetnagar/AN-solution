import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import AboutCompany from "../components/AboutCompany/AboutCompany";
import "bootstrap/dist/css/bootstrap.min.css";
import Features from "../components/Features/Features";
import AboutAssignment from "../components/AboutAssignment/AboutAssignment";
import NumberShow from "../components/NumberShow/NumberShow";
import Footer from "../components/Footer/Footer";
import CaseStudy from "../../my-react-app/CaseStudy/CaseStudy";
import EssayWriting from "../EssayWriting/EssayWriting";
import ReflectiveWriting from "../ReflectiveWriting/ReflectiveWriting";
import ResumeWriting from "../ResumeWriting/ResumeWriting";
import ResearchWriting from "../ResearchWriting/ResearchWriting";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/caseStudy" element={<CaseStudy />} />
        <Route path="/essayWriting" element={<EssayWriting />} />
        <Route path="/reflectiveWriting" element={<ReflectiveWriting />} />
        <Route path="/resumeWriting" element={<ResumeWriting />} />
        <Route path="/researchWriting" element={<ResearchWriting />} />
      </Routes>

      <Footer />
    </>
  );
}

function Home() {
  return (
    <main className="mainContent">
      <section className="contentSection">
        <Hero />
      </section>

      <section className="contentSection">
        <AboutCompany />
      </section>

      <section className="contentSection">
        <Features />
      </section>

      <section className="contentSection">
        <AboutAssignment />
      </section>

      <section className="contentSection">
        <NumberShow />
      </section>
    </main>
  );
}

export default App;

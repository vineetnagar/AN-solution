import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import AboutCompany from "../components/AboutCompany/AboutCompany";
import "bootstrap/dist/css/bootstrap.min.css";
import Features from "../components/Features/Features";
import AboutAssignment from "../components/AboutAssignment/AboutAssignment";
import NumberShow from "../components/NumberShow/NumberShow";
import Footer from "../components/Footer/Footer";
import CaseStudy from "../CaseStudy/CaseStudy";
import EssayWriting from "../EssayWriting/EssayWriting";
import ReflectiveWriting from "../ReflectiveWriting/ReflectiveWriting";
import ResumeWriting from "../ResumeWriting/ResumeWriting";
import ResearchWriting from "../ResearchWriting/ResearchWriting";
import DissertationWriting from "../DissertationWriting/DissertationWriting";
import HomeworkHelp from "../HomeworkHelp/HomeworkHelp";
import STATA from "../STATA/STATA";
import Nursing from "../Nursing/Nursing";
import Management from "../Management/Management";
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
        <Route path="/dissertationWriting" element={<DissertationWriting />} />
        <Route path="/homeworkHelp" element={<HomeworkHelp />} />
        <Route path="/STATA" element={<STATA />} />
        <Route path="/nursing" element={<Nursing />} />
        <Route path="/management" element={<Management />} />
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

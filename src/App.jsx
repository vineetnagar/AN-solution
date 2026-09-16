import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
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
import Law from "../Law/Law";
import Economics from "../Economics/Economics";
import STATICS from "../STATICS/STATICS";
import Finance from "../Finance/Finance";
import Marketing from "../Marketing/Marketing";
import UK from "../UK/UK";
import Australia from "../Australia/Australia";
import UAE from "../UAE/UAE";
import Germany from "../Germany/Germany";
import ScrollToTop from "../components/ScrollToTop";
import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs";
import ProjectForm from "../ProjectForm/ProjectForm";
import HeroSection from "../components/HeroSection/HeroSection";

function App() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
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
        <Route path="/law" element={<Law />} />
        <Route path="/economics" element={<Economics />} />
        <Route path="/statics" element={<STATICS />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/uk" element={<UK />} />
        <Route path="/australia" element={<Australia />} />
        <Route path="/germany" element={<Germany />} />
        <Route path="/uae" element={<UAE />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/projectForm" element={<ProjectForm />} />
      </Routes>

      <Footer />
    </>
  );
}

function Home() {
  return (
    <main className="mainContent">
      <section className="contentSection">
        <HeroSection />
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

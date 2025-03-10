//modules
import { Routes, Route } from "react-router-dom";

//components
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ProjectsPage } from "./pages/ProjectsPage";
import { HomePage } from "./pages/HomePage";
import { ResumePage } from "./pages/ResumePage";
import { ContactPage } from "./pages/ContactPage";

const App = () => {
  return (
    <div className="text-primary-950 bg-primary-200 dark:bg-primary-950 flex min-h-[100vh] flex-col items-center">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

//modules
import { Routes, Route } from 'react-router-dom';

//components
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProjectsPage } from './pages/ProjectsPage';
import { LandingPage } from './pages/LandingPage';
import { ResumePage } from './pages/ResumePage';
import { ContactPage } from './pages/ContactPage';
import { AboutPage } from './pages/AboutPage';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/resume' element={<ResumePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

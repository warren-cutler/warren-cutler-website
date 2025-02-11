//modules
import { Routes, Route } from 'react-router-dom';

//components
import { Header } from './containers/Header';
import { Footer } from './containers/Footer';
import { ProjectsPage } from './containers/ProjectsPage';
import { LandingPage } from './containers/LandingPage';
import { ResumePage } from './containers/ResumePage';
import { ContactPage } from './containers/ContactPage';
import { AboutPage } from './containers/AboutPage';

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

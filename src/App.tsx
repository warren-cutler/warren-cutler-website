//modules
import { Routes, Route } from 'react-router-dom';

//components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProjectsContainer } from './components/ProjectsContainer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <div>
              <p>LANDING PAGE COMING SOON</p>
            </div>
          }
        />
        <Route
          path='/projects'
          element={
            <div>
              <ProjectsContainer></ProjectsContainer>
            </div>
          }
        />
        <Route
          path='/resume'
          element={
            <div>
              <p>RESUME PAGE COMING SOON</p>
            </div>
          }
        />
        <Route
          path='/about'
          element={
            <div>
              <p>ABOUT PAGE COMING SOON</p>
            </div>
          }
        />
        <Route
          path='/contact'
          element={
            <div>
              <p>CONTACT PAGE COMING SOON</p>
            </div>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

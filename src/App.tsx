//modules
import { Routes, Route} from 'react-router-dom';

//components
import {Navbar} from './components/Navbar';
import {Footer} from './components/Footer';
import {ProjectsContainer} from './components/ProjectsContainer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/projects' element={<div><ProjectsContainer></ProjectsContainer></div>}/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;

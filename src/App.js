import './App.css';
import About from './Components/About/About';
import Navbar from './Components/Navbar/Navbar';
import ProjectsBox from './Components/Projects/ProjectsBox';
import SkillsList from './Components/SkillsList/SkillsList';


// import Contact from './Components/Contact/Contact';

// import Testimonials from './Components/Testimonials/Testimonials';

function App() {
  return (
  <main className="text-teal-400 bg-teal-900 body-font">
    <Navbar />
    <About />
    <ProjectsBox />
    <SkillsList />
    
  </main>
  );
}

export default App;

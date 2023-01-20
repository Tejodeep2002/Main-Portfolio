import './App.css';
import About from './Components/About/About';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Skills from './Components/Skills/Skills';
import Qualification from './Components/Qualification/Qualification';
import Projects from './Components/Projects/Projects';
import TopArrow from './Components/TopArrow/TopArrow';
import ContactMe from './Components/ContactMe/ContactMe';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Intro/>
      <About/>
      <Skills/>
      <Qualification/>    
      <Projects/>
      <ContactMe/>
      <Footer/>
      <TopArrow/>

    </div>
  );
}

export default App;

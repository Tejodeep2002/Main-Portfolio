import './App.css';
import About from './Components/About/About';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Skills from './Components/Skills/Skills';
function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Intro/>
      <About/>
      <Skills/>
    
    </div>
  );
}

export default App;

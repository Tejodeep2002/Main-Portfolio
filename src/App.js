import "./App.css";
import About from "./Components/About/About";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";
import Qualification from "./Components/Qualification/Qualification";
import Projects from "./Components/Projects/Projects";
import TopArrow from "./Components/TopArrow/TopArrow";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";
import Toggle from "./Components/Toggle/Toggle";


function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "var(--black)" : "",
        color: darkMode ? "var(--white)" : "",
      }}
      id="home"
    >
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Qualification />
      <Projects />
      <ContactMe />
      <Footer />
      <Toggle />
      <TopArrow />
    </div>
  );
}

export default App;

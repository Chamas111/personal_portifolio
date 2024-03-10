import "./App.css";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;

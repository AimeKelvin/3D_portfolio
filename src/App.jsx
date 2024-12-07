import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import Projects from './sections/Projects.jsx';
import WorkExperience from './sections/Experience.jsx';
import Skills from './sections/Skills.jsx';

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <div className="container mx-auto w-full flex justify-center items-center">
        <Skills />
      </div>
      <Projects />
      <WorkExperience />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;

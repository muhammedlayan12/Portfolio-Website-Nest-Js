import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Section from "./components/Section";
import Footer from "./components/Footer";

function Home() {
  return (
    <div >
     <Navbar></Navbar>
     <Hero></Hero>
     <About></About>
     <Skills></Skills>
     <Section></Section>
     <Footer></Footer>
    </div>
  );
}
export default Home;
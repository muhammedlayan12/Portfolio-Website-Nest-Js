import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";

function Home() {
  return (
    <div >
     <Navbar></Navbar>
     <Hero></Hero>
     <About></About>
    </div>
  );
}
export default Home;
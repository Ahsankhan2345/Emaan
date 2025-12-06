import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";

import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

export default function App() {
    return (
        <>
            <Navbar />
            {/* ✅ FIX: Added pt-16 (padding-top: 4rem) to ensure content starts below a fixed navbar. */}
            <main className="relative z-0 pt-16"> 
                <Hero />    
                <Services /> 
                <Projects /> 
                <Experience /> 
                <Contact /> 
            </main>
            <Footer /> 
        </>
    );
  }

// React & React-Bootstrap Dependencies 
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// Portfolio Project React Components Imported
import NavIntro from "./NavIntro";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

// App Component
function App() {
    return (
        <div>

            {/* App Components */}
            <NavIntro></NavIntro>
            <About></About>
            <Projects></Projects>
            <Skills></Skills>
            <Testimonials></Testimonials>
            <Contact></Contact>
            
        </div>
    );
}

export default App;




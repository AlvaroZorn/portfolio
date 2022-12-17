import React from "react";
import Favicon from "react-favicon";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Favicon url={require("./favicon.ico")}></Favicon>
      <Header />
      <Nav />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;

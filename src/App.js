import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <main className="bg-primary-first dark:bg-primary-dark blue:bg-blue-500">
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;

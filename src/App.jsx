import { Toaster } from "react-hot-toast";

import { About, Contact, Header, Skills, Experience, Portfolio } from "./container";
import { Navbar, Footer, FloatingNavbar } from "./components";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Toaster />
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
      <FloatingNavbar />
    </div>
  );
}

export default App;

import { Toaster } from "react-hot-toast";

import { About, Contact, Header, Skills, Experience, Portfolio } from "./container"; // Testimonial,
import { Navbar, Footer, FloatingNavbar } from "./components";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <Toaster
        position="top-right"
        toastOptions={{ ariaProps: { role: "status", "aria-live": "polite" } }}
      />
      <Navbar />
      <main id="main">
        <Header />
        <About />
        <Skills />
        <Portfolio />
        {/* <Testimonial /> */}
        <Experience />
        <Contact />
      </main>
      <Footer />
      <FloatingNavbar />
    </div>
  );
}

export default App;

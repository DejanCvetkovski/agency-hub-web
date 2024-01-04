import "./App.css";
import Header from "./components/Header/Header";
import "./assets/js/script";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Qualities from "./components/Qualities/Qualities";
import Features from "./components/Features/Features";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { Route } from "react-router-dom";
import ScrollToHashElement from "./utils/ScrollToHashElement";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <div className="App">
      <ScrollToHashElement />
      <ScrollToTop />
      <Header />
      <Services />
      <About />
      <Qualities />
      <Features />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

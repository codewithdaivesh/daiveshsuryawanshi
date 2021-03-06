import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from './pages/Navbar';
import Hero from './pages/Hero';
import Aboutus from './pages/Aboutus';
import Resume from "./pages/Resune";
import Services from './pages/Service';
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <>
    
  <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<Aboutus />} />
      <Route path="Resume" element={<Resume />} />
      <Route path="service" element={<Services />} />
      <Route path="contact" element={<Contact />} />
    </Routes>

    <Footer/>
    
    </>
  );
}

export default App;

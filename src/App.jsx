import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Layout from "./layout/Layout";
import About from "./pages/About";
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <>
     <ParallaxProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about-us" element={<About />} />
          </Routes>
        </Layout>
      </Router>
      <div className="mx-[10%]"></div>
      </ParallaxProvider>
    </>
  );
}

export default App;

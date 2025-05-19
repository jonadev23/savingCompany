import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Layout from "./layout/Layout";
import About from "./pages/About";
import InvestmentSimulator from "./pages/Charts";
import { ParallaxProvider } from "react-scroll-parallax";
import SignupForm from "./Auth/SignUp";
import Dashboard from "./Auth/Dashboard";
import Login from "./Auth/Login";
import Blog from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";

function App() {
  return (
    <>
      <ParallaxProvider>
        <Router>
          <Routes>
            {/* Routes with Layout */}
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/blogs" element={<Blog />} />
              <Route path="/chart" element={<InvestmentSimulator />} />
              <Route path="/single-blog" element={<BlogPost />} />
            </Route>

            {/* Route without Layout */}
            <Route path="/sign-up" element={<SignupForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </ParallaxProvider>
    </>
  );
}

export default App;

import "./App.css";
import { Route, Routes, Link, useNavigate, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import { useState, useEffect } from "react";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [page, setPage] = useState(0);

  // Update page state based on the current URL
  useEffect(() => {
    if (location.pathname === "/") {
      setPage(0);
    } else if (location.pathname === "/about") {
      setPage(1);
    } else if (location.pathname === "/contact") {
      setPage(2);
    }
  }, [location.pathname]);

  const handleOnClickPrev = () => {
    setPage((prevPage) => (prevPage === 0 ? 2 : prevPage - 1));
  };

  const handleOnClickNext = () => {
    setPage((prevPage) => (prevPage === 2 ? 0 : prevPage + 1));
  };

  useEffect(() => {
    if (page === 0) {
      navigate("/");
    } else if (page === 1) {
      navigate("/about");
    } else if (page === 2) {
      navigate("/contact");
    }
  }, [page, navigate]);

  return (
    <>
      <div>This is my nav bar.</div>
      <button onClick={handleOnClickPrev}>{"< Previous"}</button>
      <button onClick={handleOnClickNext}>{"Next >"}</button>
      <nav>
        <ul>
          <li>
            <Link to="/" onClick={() => setPage(0)}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setPage(1)}>About</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setPage(2)}>Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

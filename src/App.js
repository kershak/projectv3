import React from "react";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Footer from './components/Footer';
import About from "./components/About";
import Contact from "./components/Contact";
import ProductList from "./components/Products";

function App() {

  return (
    <Router>
      <div className="app">
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<ProductList />}/>
        <Route className= "page-not-found" path="*" element={<div>404 Not Found</div>} />
      </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
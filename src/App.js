
import './App.css'

import { NavBar } from "./components/NavBarPP/NavBar";
import { Footer } from "./components/Footer/Footer";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from './components/pages/Home';
import Noticias from './components/pages/Noticias';
import Contact from './components/pages/Contact';
import Cart from './components/pages/Carrt';




function App() {
  //  console.log(dataProducts)
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/noticias' element={<Noticias/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
    <Footer />

    </>
  );
}

export default App;

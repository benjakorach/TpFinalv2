
import './App.css'

import { NavBar } from "./components/NavBarPP/NavBar";
import { Footer } from "./components/Footer/Footer";
import { FtechApi } from './components/FethApi/FtechApi';
import { Routes, Route, Link } from "react-router-dom";
import { Home } from './components/pages/Home';
import { Carrousel } from './components/Carrousel/Carrousel';
import Noticias from './components/pages/Noticias';
import Contact from './components/pages/Contact';
import { Carrt } from './components/Carrt';
import { CartProvider } from './components/context/CarrtContexxt';



function App() {
  //  console.log(dataProducts)
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/noticias' element={<Noticias/>} />
      <Route path="/contact" element={<Contact/>} />
{/*        <Route path="/carrt" element={<Carrt/>} />
 */}    </Routes>
    <Footer />

    </>
  );
}

export default App;

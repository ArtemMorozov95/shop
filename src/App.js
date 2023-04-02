import Header from "./components/Header";
import Footer from './components/Footer';
import Intro from "./components/Intro";
import UpSort from "./components/UpSort";
import Product from './components/Product.json'
import Switch from "./components/Switch";
import { useState } from "react";
import MySelect from "./components/Select";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catalogpage from "./Pages/Catalogpage";
import Productcard from './Pages/Productcard'

function App() {
  return(
      <BrowserRouter>
        {/* <Catalogpage/> */}
        <Routes>
          <Route path="/" element={<Catalogpage/>} />
          <Route path="/Productcard" element={<Productcard/>} />
        </Routes>
        
      </BrowserRouter>
  )
}

export default App;

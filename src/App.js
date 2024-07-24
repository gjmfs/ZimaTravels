import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import React from "react";
import { NavBar } from "./NavBar";
import { NotFound } from "./NotFound";
import {ContentPage} from './components/Body'
import { Footer } from "./Footer";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<NotFound/>}></Route>
        <Route path='/content-page' element={<ContentPage/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

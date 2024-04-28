"use client";

import React, { useState, useEffect }  from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './pages/home';
import About from './pages/about';

export default function App() {

  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient ? (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </main>
  ) : null;
}

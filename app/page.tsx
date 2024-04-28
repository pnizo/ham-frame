"use client";

import React, { useState, useEffect }  from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './pages/home';

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
        </Routes>
      </BrowserRouter>
    </main>
  ) : null;
}

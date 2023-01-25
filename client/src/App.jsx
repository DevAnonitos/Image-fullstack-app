import React from 'react';
import "./index.css";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { logo } from "./assets";

import { Home, CreatePost } from "./pages";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <header 
          className='w-full flex justify-between 
          items-center bg-white sm:px-8 py-4 border-b-[#e6ebf4]'
        >
          Hi
        </header>
      </BrowserRouter>
    </>
  )
}

export default App
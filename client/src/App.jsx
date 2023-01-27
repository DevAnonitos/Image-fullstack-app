import React, { Suspense } from 'react';
import "./index.css";

import { BrowserRouter, Link, Route , Routes } from "react-router-dom";

import { logo } from "./assets";

import { Home, CreatePost } from "./pages";
import { Loader } from './components';

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* ========================Header====================== */}
        <header 
          className='w-full flex justify-between 
          items-center bg-white sm:px-8 py-4 
          border-b border-b-[#e6ebf4] 
          scroll-smooth touch-pan-up'
        >
          <Link to="/">
            <img 
              src={logo} 
              alt="logo"
              className='w-28 object-contain drop-shadow-x cursor-pointer' 
            />
          </Link>

          <Link 
            to='/create-posts'
            className='font-inter font-medium 
            bg-[#6468ff] text-white 
            px-4 py-2 rounded-md 
            hover:text-yellow-400 shadow-xl 
            duration-200 ease-in-out 
            transition-all delay-75'
          >
            Create
          </Link>


        </header>
        {/* ====================Main-page============================== */}
        <main 
          className='sm:p-8 px-4 py-8 w-full 
          bg-[#f9fafe] min-h-[calc(100vh-73px)]'
        >
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/create-posts' element={<CreatePost />} />
            </Routes>
          </Suspense>          
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
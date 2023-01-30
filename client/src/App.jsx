import React, { Suspense, lazy } from 'react';
import "./index.css";
import { BrowserRouter, Link, Route , Routes } from "react-router-dom";

import { logo } from "./assets";
import { Spinner } from '@chakra-ui/react'
import { FaReact, FaDiscord, FaFacebook } from "react-icons/fa";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";

const CreatePostView = lazy(() => delayView(import('./pages/CreatePost')));
const HomeView = lazy(() => delayView(import('./pages/Home')));

// ==============Delay functions ============================
function delayView(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 1500);
  }).then(() => promise);
}

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
            <div className='flex justify-center items-center'>
              <img 
                src={logo} 
                alt="logo"
                className='w-28 object-contain drop-shadow-x cursor-pointer' 
              />
              <div 
                className='flex justify-center 
                items-center mx-2 text-blue-500 
                hover:rotate-90 transition-all duration-200 ease-in-out'
              >
                <FaReact
                  className='w-6 h-6 object-contain'
                />
              </div>
            </div>
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
          <Suspense 
            fallback={
              <div className='flex justify-center items-center'>
                <Spinner  
                  thickness='4px'
                  speed='0.65s'
                  emptyColor='gray.200'
                  color='red.500'
                  size='xl' 
                  colorScheme='twitter'
                />
              </div>
              
            }
          >
            <Routes>
              <Route path='/' element={<HomeView />} />
              <Route path='/create-posts' element={<CreatePostView />} />
            </Routes>
          </Suspense>          
        </main>

        {/* =========================Footer============================= */}
        <footer>
          {/* <div className='container pt-9 sm:justify-center items-center'>
            <div className='flex justify-center mb-9'>
              
              <a href="#" className='w-6 h-6 mx-4 px-2 p-4'>
                <AiFillGithub />
              </a>
              <a href="#" className='w-6 h-6 mx-4 px-2 p-4'>
                <FaDiscord />
              </a>
              <a href="#" className='w-6 h-6 mx-4 px-2 p-4'>
                <FaFacebook />
              </a>
              <a href="#" className='w-6 h-6 mx-4 px-2 p-4'>
                <AiFillInstagram />
              </a>
            </div>
          </div> */}

          {/* <div 
            className='text-center text-gray-500 p-4 rounded-lg'
            style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}
          >
            © 2023 Copyright:
            <a 
              className='text-cyan-600 ml-2' 
              href="https://tailwind-elements.com/">
              BaoNguyenDev
            </a>
          </div> */}
        </footer>
      </BrowserRouter>
    </>
  )
}

export default App
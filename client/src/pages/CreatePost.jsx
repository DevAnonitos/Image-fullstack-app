import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import { preview } from "../assets";

import { ArrowBackIcon } from '@chakra-ui/icons';

import { getRandomPrompt } from '../utils';

import { FormField, Loader} from "../components";
import { Tooltip } from '@chakra-ui/react'


const CreatePost = () => {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  });

  const [generatingImg, setGeneratingImg] = useState(false);

  const [loading, setLoading] = useState(false);

  const generateImage = async () => {

  };

  const handleSubmit = () =>  {

  };

  const handleChange = (e) => {

  };

  const handleSurpriseMe = () => {
   
  };

  return (
    <>
      <section className='max-w-7xl mx-auto'>
        <div>         
          <h1 
            className="font-extrabold 
            text-[#222328] text-[32px]"
          >
            {/* <Link to='/'>
              <ArrowBackIcon 
                w={5} 
                h={5} 
                color="gray.500" 
                className='flex justify-center items-center my-4'
              />
            </Link>    */}
            Create
          </h1>
          <p 
            className="mt-2 text-[#666e75] 
            text-[14px] max-w-[500px]"
          >
            Generate an imaginative image through 
            DALL-E AI and share it with the community
          </p>
        </div>

        <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-5'>
            <FormField
              labelName='Your name'
              type='text'
              name='name'
              placeholder='BaoNguyen'
              handleChange={handleChange}
              value={form.name}             
            />
            <FormField
              labelName='Prompt'
              type='text'
              name='prompt'
              placeholder='Synthwave aeroplane'
              handleChange={handleChange}
              value={form.prompt}  
              isSurpriseMe
              handleSurpriseMe={handleSurpriseMe}          
            />

            <div 
              className='relative bg-gray-50 
              border border-gray-300 
              text-gray-900 text-sm 
              rounded-lg focus:ring-blue-500 
              focus:border-blue-500 w-64 
              p-3 h-64 flex 
              justify-center items-center shadow-teal-600'
            >
              {form.photo ? 
                ( <img 
                    src={form.photo} 
                    alt={form.prompt}
                    className='w-full h-full object-contain' 
                  />
                ) 
                : 
                (
                  <Tooltip label="PreView Image" aria-label='A tooltip'>
                    <img 
                      src={preview} 
                      alt="preview"
                      className='w-9/12 h-9/12 
                      object-contain opacity-40 shadow-sm' 
                    />
                  </Tooltip>
                  
                )
              }

              {generatingImg && (
                <div 
                  className='absolute inset-0 z-0 
                  flex justify-center 
                  items-center bg-[rgba(0,0,0,0.5)] 
                  rounded-lg'
                >
                  <Loader />
                </div>
              )}
            </div>

            <div className='mt-5 flex gap-5'>
              <button 
                type='button'
                onClick={generateImage}
                className='text-white bg-emerald-400 
                font-medium rounded-full
                text-sm w-full 
                sm:w-auto px-5 py-2.5 text-center'
              >
                {generatingImg ? 'Generate Image' : 'Generate'}
              </button>
            </div>

            <div className='mt-10'>
              <p className='mt-2 text-[#666e75] text-[14px]'>
                ** Once you have created the image you want, you can share it with others in the community **
              </p>
              <button 
                type='submit'
                className='mt-3 text-white bg-[#6469ff] 
                font-medium rounded-full text-sm 
                w-full sm:w-auto px-5 py-2.5 text-center'
              >
                {loading ? "Sharing....." : "Share with the Community"}
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  )
}

export default CreatePost
import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import { preview } from "../assets";

import { ArrowBackIcon } from '@chakra-ui/icons';

import { getRandomPrompt } from '../utils';

import { FormField, Loader} from "../components";


const CreatePost = () => {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  });

  const [generatingImg, setGeneratingImg] = useState(false);

  const [loading, setLoading] = useState(false);

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
          </div>
        </form>
      </section>
    </>
  )
}

export default CreatePost
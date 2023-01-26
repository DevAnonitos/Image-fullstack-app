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
      </section>
    </>
  )
}

export default CreatePost
'use client'
import Image from 'next/image'
import { TextField, Button } from '@mui/material'
import Link from 'next/link'
import { useState } from 'react'
import { createTheme } from '@mui/material/styles'
import { blue } from '@mui/material/colors'
import background from '@/public/image1.png'
import logo from '@/public/logo.png'
import coin from '@/public/coin.png'
import axios from 'axios'
import { useRouter } from 'next/navigation';

const API_URL = 'http://localhost:3001';

// Register component
export default function Register() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const { push } = useRouter();
  const handleRegister = async () => {
    try {
      const response = await axios.post(`${API_URL}/users/register`, formData);
      push('/login')
    } catch (error) {
      console.error(error.response.data.message);
    }
  };
  return (

    // Root container with full screen height and flex layout
    <div className='flex h-screen'>
      <div className='basis-1/2 relative'>
        <div className='flex'>
          <Image
                src={background}
                alt="Circle"
                fill
          />
        </div>
        <div className='flex w-full h-full absolute justify-center items-center'>
          <div className='pr-10'>
            <Image
                    src={logo}
                    alt="Circle"
                    height={250}
                    
              />
          </div>
        </div>
      </div>
      <div className='basis-1/2'>
        <div>
            <div className='flex justify-center pt-44'>
                <div className="flex text-center text-[70px] font-bold ">
                <Image
                    src={coin}
                    alt="logo"
                    height={100}
                
                />
                Register
                
            </div>
        </div>   
        
        <div className='flex justify-center flex-col py-10 px-40'>
            <div className='italic font-bold text-[20px] pb-2'>Username</div>
            <TextField
              id="outlined-username"
              type="username"
              label="Username"
              value={formData.username}
              onChange={(event) => {
                setFormData({ ...formData, username: event.target.value });
              }}
            />
            <br />

            <div className='italic font-bold text-[20px] pb-2' >Password</div>
            <TextField
            id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={(event) => {
                setFormData({ ...formData, password: event.target.value });
              }} 
            />
            <div className='pt-8'>
            <Button
            className='font-bold text-zinc-950 '
            variant="contained"
            size='large'
            onClick={()=>{
              handleRegister()
            }}
            style={{backgroundColor: 'yellow'}}>Register</Button>
            </div>

            <p className='text-[16px] pt-12 pb-2'>Return to Login</p>
            <div>
            <Button
            className='font-bold text-zinc-950'
            variant="contained"
            size='large'
            href="#contained-buttons"
            style={{backgroundColor: 'darkgrey'}}>Login</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
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
import useSessionStorage from '@/components/session'
import { useRouter } from 'next/navigation';

const API_URL = 'https://t8zsjnl5-3001.uks1.devtunnels.ms'; 

export default function Login() {
  const { push } = useRouter();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [sessionData, setSessionData] = useSessionStorage('myData');

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${API_URL}/users/login`, formData);
      setSessionData(response.data.token);
      push('/dashboard')
      // Save the token in local storage or cookies for future API requests
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
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
                    alt="logo"
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
              Login
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
            <div className='pt-6'>
            <Button
            className='font-bold text-zinc-950 '
            variant="contained"
            size='large'
            href="#contained-buttons"
            style={{backgroundColor: 'yellow'}}
            onClick={()=>{
              handleLogin()
            }}
            >Login</Button>
            </div>
            
            <Link 
            className='underline underline-offset-4 font-light text-cyan-700 text-[12px] pt-6 pb-1'
            href="/https://www.capitalone.co.uk/myaccount/secure/forgotten-username.jsf?channel=capitalone">I've forgotten my username</Link>
            <Link 
            className='underline underline-offset-4 font-light text-cyan-700 text-[12px] pt-0.5 '
            href="/https://auth.capitalone.co.uk/forgot-password?realm=%2Fcustomers&goto=https%3A%2F%2Fmyaccount-data.capitalone.co.uk%2Fweb-authorize%3Fclient_id%3DcapitaloneWebOrch%26redirect_uri%3Dhttps%3A%2F%2Fmyaccount-data.capitalone.co.uk%2Fauth%2Fcallback%26response_type%3Dcode%26scope%3Dopenid%2520iid%2520uci%2520profile&channel=capitalone&successMessage=false">I've forgotten my password</Link>
            <p className='text-[16px] pt-12 pb-2'>Register for your online account</p>
            <div>
            <Button
            className='font-bold text-zinc-950'
            variant="contained"
            size='medium'
            style={{backgroundColor: 'darkgrey'}}

            >Register</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

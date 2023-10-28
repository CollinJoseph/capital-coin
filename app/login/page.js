import Image from 'next/image'
import { TextField } from '@mui/material'
import Link from 'next/link'


export default function Login() {
  return (
    <div className='flex h-screen'>
      <div className='basis-1/2 bg-black'>
      
      </div>
      <div className='basis-1/2'>
        <div className='pt-44'>

          <div className="text-center text-[60px] font-bold ">Login</div>
          <div className='flex justify-center flex-col py-10 px-40'>
            <div className='font-bold text-[20px] pb-2'>Username</div>
            <TextField
              id="outlined-username"
              type="username"
              label="Username"/>
            <br />

            <div className='font-bold text-[20px] pb-2' >Password</div>
            <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            />
            
            <Link 
            className='font-light text-[12px] pt-4 pb-1'
            href="/https://www.capitalone.co.uk/myaccount/secure/forgotten-username.jsf?channel=capitalone">I've forgotten my username</Link>
            <Link 
            className='font-light text-[12px] pt-0.5 '
            href="/https://auth.capitalone.co.uk/forgot-password?realm=%2Fcustomers&goto=https%3A%2F%2Fmyaccount-data.capitalone.co.uk%2Fweb-authorize%3Fclient_id%3DcapitaloneWebOrch%26redirect_uri%3Dhttps%3A%2F%2Fmyaccount-data.capitalone.co.uk%2Fauth%2Fcallback%26response_type%3Dcode%26scope%3Dopenid%2520iid%2520uci%2520profile&channel=capitalone&successMessage=false">I've forgotten my password</Link>
            
          </div>
        </div>
      </div>
    </div>
  )
}

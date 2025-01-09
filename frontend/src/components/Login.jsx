import React, { useState } from 'react'
import { twitter_image } from '../constant'

const Login = () => {
  const [login, setLogin] = useState(true)
  const loginSignupHandler = () =>  {
    setLogin(!login)
  }
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='flex items-center justify-evenly w-[80%]'>
        <div >
          <img className='ml-5' src={twitter_image} width={"200px"} alt="twitter-logo" />
        </div>
        <div className=''>
          <div className='my-5'>
            <h1 className='font-bold text-6xl'>Happening now</h1>
          </div>
          <h1 className='mt-4 mb-2 text-2xl font-bold'>{login ? "Login" : 'Signup'}</h1>
          <form className='flex flex-col w-[55%] gap-2'>
            {
              !login ? <><input type="text" placeholder='Name' className='outline-blue-500 font-semibold border border-gray-800 px-4 py-1 rounded-full' />
              <input type="text" placeholder='Username' className='outline-blue-500 font-semibold border border-gray-800 px-4 py-1 rounded-full' />
              <input type="text"  placeholder='Email' className='outline-blue-500 font-semibold border border-gray-800 px-4 py-1 rounded-full'/>
              <input type="text" placeholder='Password' className='outline-blue-500 font-semibold border border-gray-800 px-4 py-1 rounded-full'/></> : <>
              <input type="text"  placeholder='Email' className='outline-blue-500 font-semibold border border-gray-800 px-4 py-1 rounded-full'/>
              <input type="text" placeholder='Password' className='outline-blue-500 font-semibold border border-gray-800 px-4 py-1 rounded-full'/>
              </>
            }
            
          
          <button className='bg-[#1D98f0] w-full rounded-full p-3 border-none text-lg  text-white'>{login ? 'Login' : 'Create an account'}</button>
          <p> {login ? 'Do not have an account?' : 'Already have an account?' }  <span onClick={loginSignupHandler} className='cursor-pointer text-blue-400 font-bold '>{login ? 'Signup' : 'Login'}</span> </p>
          </form>


        </div>
      </div> 
    </div>
  )
}

export default Login

import React from 'react'
import HeroBg from '../assets/bg-sign-up.jpg'

const Signup = () => {
  return (
    <>
      <div className='w-full h-screen'>
        <img className=' hidden sm:block w-full h-full object-cover absolute'
          src={HeroBg}
          alt="" />
        <div className='absolute w-full h-full bg-black/50'>
        </div>
      </div>

    </>
  )
}

export default Signup
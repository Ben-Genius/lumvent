import Image from 'next/image'
import React from 'react'

/* Header */ 

const Header = () => {
  return (
    
    // <header className="p-4 bg-[linear-gradient(-45deg,_#d118ff,_#f32861_51.59%,_#f8245d_51.6%,_#ffbe19_100.05%)]" >
    <header className="p-3 bg-[#fff5f5]">
        <nav className="container mx-auto flex justify-between  items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 133 134" width='20px' height='20px' className='text-gray-400 hover:text-black transition duration-500'>
          <path fill="currentColor" d="M133 67C96.282 67 66.5 36.994 66.5 0c0 36.994-29.782 67-66.5 67 36.718 0 66.5 30.006 66.5 67 0-36.994 29.782-67 66.5-67Z"></path>
        </svg>
        {/* <Image src="/images/favicon.svg" alt='luma logo icon' width={20} height={20} className='text-red-500'/> */}
        <span className='flex items-center gap-4 bg-none'>
          <h4 className='hidden sm:flex text-gray-500 text-sm'>08:40 GMT </h4>
          <button className='text-gray-500 bg-gray-200 text-sm font-semibold rounded-[1.3rem] py-[0.30rem] px-[0.625rem]'>Sign In</button>
        </span>
        </nav>
      </header>
    
  )
}

export default Header
// linear - gradient(180deg,rgba(19,21,23,0) 0 %,rgb(19,21,23) 100 %);
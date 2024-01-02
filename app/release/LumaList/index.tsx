import React from 'react'
import Image from 'next/image';
import ios from '../../../public/images/iosbanner.png';
import create from '../../../public/images/create.png';
import invite from '../../../public/images/invite.png';
import notify from '../../../public/images/notifications.png';
import {iosAppList1, iosAppList2} from '../LumaList/iOsData';
import IosListComponent from './iosListComponent';
import IosListIcons from './iosListIcons';
import { GoArrowUpRight } from "react-icons/go";

const Index = () => {
  return (
    <div className=' bg-black text-white m-0  p-4'>
      <div className='m-0 p-5'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330"  className='bg-blue-500 rounded-full p-2 md:p-4 w-[4rem] md:w-[5rem]'>
    <path fill="white" d="M68 290.485c-5.5 9.6-17.8 12.8-27.3 7.3-9.6-5.5-12.8-17.8-7.3-27.3l14.3-24.7c16.1-4.9 29.3-1.1 39.6 11.4l-19.3 33.3Zm138.9-53.9H25c-11 0-20-9-20-20s9-20 20-20h51l65.4-113.2-20.5-35.4c-5.5-9.6-2.2-21.8 7.3-27.3 9.6-5.5 21.8-2.2 27.3 7.3l8.9 15.4 8.9-15.4c5.5-9.6 17.8-12.8 27.3-7.3 9.6 5.5 12.8 17.8 7.3 27.3l-85.8 148.6h62.1c20.2 0 31.5 23.7 22.7 40Zm98.1 0h-29l19.6 33.9c5.5 9.6 2.2 21.8-7.3 27.3-9.6 5.5-21.8 2.2-27.3-7.3-32.9-56.9-57.5-99.7-74-128.1-16.7-29-4.8-58 7.1-67.8 13.1 22.7 32.7 56.7 58.9 102h52c11 0 20 9 20 20 0 11.1-9 20-20 20Z"></path>
</svg>
<h3 className='text-[3rem] font-bold p-3'>iOs App</h3>
<h3 className='font-semibold text-blue-500 text-5xl mb-4'>Fun, in your pocket</h3>

      </div>
      <div className='mx-6 p-0 bg-blue-500 overflow-hidden rounded-2xl'>
            <Image src={ios} alt="iOs banner" className='object-cover w-full md:h-[40rem] '/>
      </div>
      <div className='md:flex items-center justify-center gap-14 w-full  overflow-hidden mt-10'>
      <Image src={create} alt="iOs banner"className='object-cover my-3 rounded-2xl px-1 py-2 bg-[rgba(48,48,48,0.45)]'/>
      <Image src={invite} alt="iOs banner" className='object-cover my-3 rounded-2xl px-1 py-2 bg-[rgba(48,48,48,0.45)]'/>
      <Image src={notify} alt="iOs banner" className='object-cover my-3 rounded-2xl  bg-[rgba(48,48,48,0.45)] w-full md:w-[44rem] mx-auto'/>

      </div>
      <div className='my-10 w-full md:flex items-center justify-between '>
        {iosAppList1.map((item, index) => (
          <div key={index}>
          <IosListComponent title={item.title} para={item.para}/>
          <hr className='border-[1px] border-gray-700'/>
          </div>
        ))}
      </div>
      <div className='w-full md:flex items-center justify-between sm:flex-wrap '>
        {iosAppList2.map((list,index) => (
          <div key={index}>
            <IosListIcons icon={list.icon} title={list.title} para={list.para}/>
            <hr className='border-[1px] border-gray-700 mb-4'/>

          </div>
        ))}
      </div>
<div className='flex py-3 px-4 gap-2 items-center justify-center rounded-3xl  bg-blue-500 my-10 max-w-[15rem] mx-auto'>      
<button className=' '> Download for iOS  

</button>
<GoArrowUpRight /> 

</div>
     </div>
  )
}

export default Index

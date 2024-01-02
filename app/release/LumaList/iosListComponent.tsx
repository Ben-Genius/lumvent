import React from 'react'
import { IOsList1 } from './iOsData';


const IosListComponent = ({title, para}: IOsList1) => {
  return (
    <div className='w-full leading-9 md:h-[10rem]'>
        <div  className='mb-6'>
            
            <h4 className='text-xl md:text-2xl font-semibold max-w-full my-4 mx-auto'>{title}</h4>
            <p className='text-lg text-gray-500 md:max-w-[23rem] mx-auto'>{para}</p>
            
          </div>
    </div>
  )
}

export default IosListComponent;
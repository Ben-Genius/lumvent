import React from 'react'
import { IOsList2 } from './iOsData'

type Props = {}

const IosListIcons = ({icon, title, para}: IOsList2) => {
  return (
    <div className='w-full leading-9'>
        <div  className='mb-6'>
        <div className='text-2xl text-gray-500'>{React.createElement(icon)}</div> {/* Corrected line */}
            <h4 className='text-xl md:text-2xl font-semibold max-w-full my-4 mx-auto'>{title}</h4>
            <p className='text-lg text-gray-500 max-w-[23rem]'>{para}</p>
          </div>
    </div>
  )
}

export default IosListIcons
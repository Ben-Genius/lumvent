import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import mail from '../public/images/mail.svg';
import app from '../public/images/appstore.svg';
import tweet from '../public/images/twitter.svg';
import inst from '../public/images/instagram.svg';

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className='max-w-[80rem] mx-auto p-0 '>
      <hr />
    <footer className='bg-[#fff5f5] flex justify-between  pt-4 px-4'>
 
      {/* left footer */}
      <div>
        <div className=' text-[0.90rem] xs:flex block gap-5'>
            <div>
              <Link href='/'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 724 264'
                  className='text-gray-500 w-[46px] hover:text-black'
                >
                  <g fill='currentColor'>
                    <path d='M38.53 260.65H.43V27.86h38.1zM124.99 263.42c-42.25 0-66.48-22.96-66.48-63V89.33h38.1v108.28c0 23.61 8.7 32.39 32.12 32.39 30.35 0 42.73-14.54 42.73-50.17v-90.5h38.1v171.33h-36.54v-29.91c-4.99 22.98-27.12 32.67-48.03 32.67zm347.2-2.77H434.4V149.87c0-22.5-7.01-30.87-25.88-30.87-24.28 0-37.11 14.45-37.11 41.79v99.86h-37.79V149.87c0-21.93-7.23-30.87-24.94-30.87-31.59 0-38.05 32.96-38.05 41.79v99.86h-38.1V89.33h36.54v29.96c6.49-21.02 27.02-33.71 47.72-33.71 20.69 0 38.09 7.9 45.64 33.71 10.13-26.76 28.35-33.71 50.15-33.71 37.88 0 59.61 18.88 59.61 51.81v123.26zm76.65 2.77c-52.62 0-61.55-33.45-61.55-50.52 0-20.1 8.83-38.21 27.93-45.55 8.41-3.11 16.52-5.43 24.84-7.1 7.33-1.47 18.64-3.03 26.91-4.17l2.73-.38c14.38-2 29.67-9.21 29.67-18.62 0-16-20.51-18.39-32.74-18.39-13.87 0-23.64 3.57-27.53 10.05-3.49 6.46-3.73 7.97-4.62 13.6l-.62 4.43h-38.1l.68-5.61c1.35-11.14 3.41-19.03 6.48-24.83 10.54-20.39 31.77-30.75 63.08-30.75 26.11 0 44.63 8.23 53.26 15.94 5.31 4.6 9.1 9.84 11.89 16.46 5.84 12.36 6.32 20.63 6.32 29.4v86.43c0 8.07.78 14.97 2.31 20.5l1.76 6.35h-38.91l-.7-4.19c-.5-2.96-.67-19.75-.88-26.23-8.99 23.61-28.27 33.18-52.21 33.18zm50.53-93.72c-7.97 6.11-20.47 9.6-38.62 13.23-31.27 5.78-36.54 13.06-36.54 27.22 0 12.5 10.63 20.26 27.75 20.26 33.23 0 47.41-15.48 47.41-51.77v-8.94zM723.57 64.19C688.46 64.19 660 35.73 660 .62c0 35.11-28.46 63.57-63.57 63.57 35.11 0 63.57 28.46 63.57 63.57 0-35.11 28.46-63.57 63.57-63.57Z'></path>
                  </g>
                </svg>
              </Link>
       </div>
            <div className='flex items-center gap-5 whitespace-nowrap my-3 xs:my-0'>
              <Link href=''>What's New</Link>
              <Link href=''> Explore </Link>
              <Link href=''>Pricing</Link>
              <Link href=''>Help</Link>
         </div>
        </div>

        <ul className='flex items-center gap-5 text-[0.90rem]'>
          <Link href=''>
            <li>Terms</li>
          </Link>
          <Link href=''>
            <li>Privacy Policy</li>
          </Link>
          <Link href=''>
            <li>Security</li>
          </Link>
        </ul>
      </div>

      {/* right footer icons */}
      <div className=''>
        <ul className='flex items-center gap-6'>
            <Link href='support@lu.ma'>
            <li>
                <Image src={mail} alt='footer icon' className='w-[1.2rem]' />{' '}
            </li>
          </Link>
            <Link href='https://lu.ma/ios'>
            <li>
              <Image src={app} alt='footer icon' className='w-[1.2rem]' />
            </li>
          </Link>
            <Link href='https://twitter.com/LumaHQ'>
            <li>
                <Image src={tweet} alt='footer icon' className='w-[1.2rem]' />
            </li>
          </Link>
            <Link href='https://www.instagram.com/luma_hq/'>
            <li>
                <Image src={inst} alt='footer icon' className='w-[1.2rem]' />
            </li>
          </Link>
        </ul>
      </div>
      </footer>
      </div>
  );
};
export default Footer;

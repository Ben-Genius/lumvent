import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import mail from '../public/images/mail.svg';
import app from '../public/images/appstore.svg';
import tweet from '../public/images/twitter.svg';
import inst from '../public/images/instagram.svg';

const Footer = () => {
  return (
    <div className='m-0 w-full bg-[#fff5f5] sticky top-[100vh]'>
      <div className='max-w-7xl mx-auto bg-[#fff5f5]'>
        <hr />
        <footer className='flex flex-col md:flex-row justify-between pt-4 px-4'>

          {/* Left Footer Section */}
          <div className='flex flex-col md:flex-row justify-between'>
            <div className='flex justify-center md:justify-start mb-4 md:mb-0'>
              <Link href='/'>
                {/* SVG and other content here */}
              </Link>
            </div>
            <div className='flex flex-wrap gap-5 justify-center md:justify-start text-[0.90rem]'>
              {/* Links */}
              <Link href='/release'>What's New</Link>
              <Link href='https://lu.ma/explore'>Explore</Link>
              <Link href='https://lu.ma/pricing'>Pricing</Link>
              <Link href='https://help.lu.ma/'>Help</Link>
            </div>
            <ul className='flex gap-5 justify-center md:justify-start text-[0.90rem] mt-4 md:mt-0'>
              <Link href='https://lu.ma/terms'>
                <li>Terms</li>
              </Link>
              <Link href='https://lu.ma/privacy-policy'>
                <li>Privacy Policy</li>
              </Link>
              <Link href='https://lu.ma/security'>
                <li>Security</li>
              </Link>
            </ul>
          </div>

          {/* Right Footer Icons */}
          <div className='flex justify-center md:justify-end mt-4 md:mt-0'>
            <ul className='flex items-center gap-6'>
              {/* Icons */}
              <Link href='mailto:support@lu.ma'>
                <li>
                  <Image src={mail} alt='Email' width={24} height={24} />
                </li>
              </Link>
              <Link href='https://lu.ma/ios'>
                <li>
                  <Image src={app} alt='App Store' width={24} height={24} />
                </li>
              </Link>
              <Link href='https://twitter.com/LumaHQ'>
                <li>
                  <Image src={tweet} alt='Twitter' width={24} height={24} />
                </li>
              </Link>
              <Link href='https://www.instagram.com/luma_hq/'>
                <li>
                  <Image src={inst} alt='Instagram' width={24} height={24} />
                </li>
              </Link>
            </ul>
          </div>
        </footer>
      </div>
   </div>
  );
};

export default Footer;

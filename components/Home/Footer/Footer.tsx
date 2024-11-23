import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FaHouse } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='pt-20 pb-12 bg-black'>
        <div className="w-[80%] mx-auto grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b-[1.5px] border-white border-opacity-20">
            {/* 1st footer part */}
        <div>
            <div className="flex items-center space-x-2">
                <div className="md:w-10 md:h-10 w-7 h-7 rounded-full bg-rose-700 text-white flex items-center justify-center flex-col">
                    <FaHouse/>
                </div>
                <h1 className='text-white font-bold text-sm sm:text-base md:text-xl'>iHomes</h1>
            </div>
            <p className="text-gray-300 mt-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, omnis, quibusdam magnam non libero, modi quam nihil!</p>
            <p className='text-gray-300 mt-4 font-semibold'>example@company.com</p>
            <p className='text-gray-300 mt-4 font-semibold'>+234(0) 812 345 678</p>
            {/* social Links */}
            <div className="flex items-center space-x-4 mt-6">
                <FaFacebookF className='w-6 h-6 text-blue-600' />
                <FaTwitter className='w-6 h-6 text-sky-500' />
                <FaYoutube className='w-6 h-6 text-red-700' />
                <FaInstagram className='w-6 h-6 text-pink-600' />
            </div>
        </div>
        {/* 2nd footer part */}
        <div className="md:mx-auto">
            <h1 className='footer__heading'>Popular Search</h1>
            <p className='footer__link'>Apartment For Sale</p>
            <p className='footer__link'>Apartment Low to High</p>
            <p className='footer__link'>Offices For Buy</p>
            <p className='footer__link'>Offices For Sale</p>
        </div>
        {/* 3rd footer part */}
        <div className="lg:mx-auto">
            <h1 className='footer__heading'>Quick Link</h1>
            <p className='footer__link'>Term of Usee</p>
            <p className='footer__link'>Privacy Policy</p>
            <p className='footer__link'>Pricing Plans</p>
            <p className='footer__link'>Contact Support</p>
            <p className='footer__link'>Careers</p>
            <p className='footer__link'>FAQs</p>
        </div>
        {/* 4th part */}
        <div className="md:mx-auto">
            <h1 className='footer__heading'>Discover</h1>
            <p className='footer__link'>Los Angeles</p>
            <p className='footer__link'>chicago</p>
            <p className='footer__link'>Taiwan</p>
            <p className='footer__link'>Abuja</p>
            <p className='footer__link'>Lagos</p>
            <p className='footer__link'>Portharcourt</p>
        </div>
        </div>
        <p className='text-center mt-4 text-base text-white opacity-70'>
            &#169; 2024 iot engineering. All rights reserved
        </p>
    </div>
  )
}

export default Footer
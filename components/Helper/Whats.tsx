import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const Whats = () => {
  return (
    <div>
        <div
        style={{
          position: 'fixed',
          bottom: '150px',
          right: '10px',
          zIndex: '1000',
        }}
      >
        <a
          href="https://wa.me/+2348134284100"
          target="_blank"
          rel="noopener noreferrer"
        >
            <FaWhatsapp data-aos="zoom-in" data-aos-delay="450" className='w-[60px] h-[60px] text-[#25D366]'/>
        </a>
      </div>
    </div>
  )
}

export default Whats
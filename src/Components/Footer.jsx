import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div className='bg text-center text-light p-3'> 
      <h4>Connect with us</h4>
      <div className='d-flex justify-content-center align-items-center'>
        <IoLogoWhatsapp className='fs-4 me-3' />
        <FaSquareInstagram className='fs-4 me-3'/>
        <FaFacebook className='fs-4 me-3' />
      </div>
    </div>
  )
}

export default Footer

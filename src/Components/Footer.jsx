import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div
      className="text-center text-light p-3"
      style={{ backgroundColor: "oklch(37.9% 0.146 265.522)" }}
    >
      <h4>Connect with us</h4>
      <div className="d-flex justify-content-center align-items-center">
        <a href="https://web.whatsapp.com/"><IoLogoWhatsapp className="fs-4 me-3" /></a>
        <a href="https://www.instagram.com/"><FaSquareInstagram className="fs-4 me-3" /></a>
       <a href="https://www.facebook.com/"> <FaFacebook className="fs-4 me-3" /></a>
      </div>
    </div>
  );
}

export default Footer;

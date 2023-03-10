import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import Link from 'next/link';

export default function Social() {
  return (
      <ul className="social-links">
        <li><Link href="https://www.facebook.com/BestCarProvider" target="_blank"><FaFacebookF size={24} /></Link></li>
        <li><Link href="" target="_blank"><FaTwitter size={24} /></Link></li>
        <li><Link href="https://www.instagram.com/bestcarprovider/" target="_blank"><FaInstagram size={24} /></Link></li>
        <li><Link href="https://wa.me/31634025584" target="_blank"><FaWhatsapp size={24} /></Link></li>
        <li><Link href="https://goo.gl/maps/eZ83HqiCWZYMjckz6" target="_blank"><MdLocationPin size={24} /></Link></li>
      </ul>
  )
}

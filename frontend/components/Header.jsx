import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FiUser, FiUserX } from "react-icons/fi";
import { MdOutlineLightMode, MdOutlineModeNight } from "react-icons/md";
import { useSelector } from 'react-redux';
import { setLogout, setIsLightMode } from '@/state';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {

  const [isMobile, setIsMobile] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const token = useSelector(state => state.token);
  const isLightMode = useSelector(state => state.isLightMode);
  const dispatch = useDispatch();

  function handleMenuClick() {
    setIsMobile(!isMobile)
  }
  useEffect(() => {
    const html = document.documentElement;
    html.className = isLightMode ? "light" : "";
  }, [isLightMode])

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const header = document.querySelector(".header");
    header.classList.toggle("sticky", scrollY > 480);
  }, [scrollY]);

  return (
    <div className='header'>
      <div className="container">
        <nav>
          <div className="nav-menu">
            <div className='logo'>
              <Link href="/"><Image src="/assets/Logo.png" width={72} height={72} alt="BCP Logo" /></Link>
            </div>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/over-ons">Over ons</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <button onClick={() => dispatch(setIsLightMode())}>{isLightMode ? <MdOutlineModeNight size={24} /> : <MdOutlineLightMode size={24} />}</button>
          <div className="user">
            {token ? <Link className="log-out" onClick={() => dispatch(setLogout())} href="/"><FiUserX/></Link> : <Link href="/auth/login"><FiUser/></Link>}
          </div>
          <div className="mob-nav">
            <button className="menu-icon" onClick={handleMenuClick}>
              {isMobile ? <AiOutlineClose/> : <AiOutlineMenu/>}
            </button>
            <ul className={isMobile ? "active" : ""} onClick={handleMenuClick}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/over-ons">Over ons</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <div className="user">
                {token ? <Link className="log-out" onClick={() => dispatch(setLogout())} href="/"><FiUserX/></Link> : <Link href="/auth/login"><FiUser/></Link>}
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header
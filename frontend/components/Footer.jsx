import React from 'react';
import Social from './Social';
import Link from 'next/link';

const Footer = () => {

  const year = new Date();

  return (
    <div className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="details">
            <div className="opening-hours">
              <h3>Openingstijden</h3>
              <p>Maandag t/m vrijdag: 08.00 tot 17.30 uur</p>
            </div>
            <div className="quick-links">
              <h3>Links</h3>
              <div className="links">
                <Link href="/">Home</Link>
                <Link href="/over-ons">Over ons</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>
            <div className="info">
              <h3>Best Car Provider</h3>
              <address><Link href="https://goo.gl/maps/Yu7N8EDi739BMpPK6" target="_blank"><span className="street-address">Hesselinks Es 7-3</span><br /><span className="postal-code">7271 LB </span><span className="municipality">Borculo</span></Link></address>
              <Social />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="copyrights">Copyright &copy; {year.getFullYear()}. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Footer.scss';
import logo from '../../img/LOGO.svg'
import facebook from '../../img/facebook.svg'
import instagram from '../../img/instagram.svg'
import twitter from '../../img/twiter.svg'
import youtube from '../../img/youtube.svg'

function Footer() {
    return (
        <footer className="footer">
            <img 
                className='footer__logo-mobile'
                src={logo}
                alt='logo'
            />
            <div className='footer__links'>
                <a className='footer__link' href='#'>Privacy Policy</a>
                <a className='footer__link' href='#'>Terms & Conditions</a>
                <a className='footer__link' href='#'>Cookie Policy</a>
            </div>
            <div className='footer__main'>
                <img 
                    className='footer__logo'
                    src={logo}
                    alt='logo'
                />
                <span className='footer__copyright'>©2022 All rights reserved. Powered by Atla</span>
            </div>
            <div className='footer__social'>
                <a className='footer__link' href='#'>
                    <img 
                        src={facebook}
                        alt='facebook'
                    />
                </a>
                <a className='footer__link' href='#'>
                    <img 
                        src={twitter}
                        alt='twitter'
                    />
                </a>
                <a className='footer__link' href='#'>
                    <img 
                        src={youtube}
                        alt='youtube'
                    />
                </a>
                <a className='footer__link' href='#'>
                    <img 
                        src={instagram}
                        alt='instagram'
                    />
                </a>
            </div>
            <span className='footer__copyright-mobile'>©2022 All rights reserved. Powered by Atla</span>
        </footer>
    );
}

export default Footer;
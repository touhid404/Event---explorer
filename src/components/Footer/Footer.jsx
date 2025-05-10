import React from 'react';
import { NavLink } from 'react-router'; // Use 'react-router-dom' not 'react-router'
import { FaGithub, FaYoutube, FaFacebook } from 'react-icons/fa'; // Add your desired icons

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-black text-white p-10 mt-6">
                <nav className="grid grid-flow-col gap-4">
                    <NavLink to='/' className='ml-4'>HOME</NavLink>
                    <NavLink to='/profile' className='ml-4'>PROFILE</NavLink>
                    <NavLink to='/feedback' className='ml-4'>FEEDBACK</NavLink>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4 text-xl">
                        <a
                            href="https://github.com/touhid404" 
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://youtube.com/@riyadhtouhid" // Optional
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="YouTube"
                        >
                            <FaYoutube />
                        </a>
                        <a
                            href="https://facebook.com/riyadhwhy"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                        >
                            <FaFacebook />
                        </a>
                    </div>
                </nav>
                <aside>
                    <p>
                        Copyright © {new Date().getFullYear()} - All right reserved
                        by EVENT EXPLORER LTD
                    </p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;

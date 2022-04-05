import React from 'react';

// style
import './footer.scss';

// icon
import {BsYoutube} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';
import {AiFillInstagram,AiOutlineLine} from 'react-icons/ai';
const Footer = () => {
    return (
        <section>
            <div className='footer-container'>
                <div className='footer-title'>
                    <h2>About</h2>
                    <div className='footer-title-line'></div>
                    <ul>
                        <li>History</li>
                        <li>Our Team</li>
                        <li>Mission Statement</li>
                        <li>Terms & Condition</li>
                        <li>Privacy Policy</li>
                    </ul> 
                </div>
                <div className='footer-title'>
                    <h2>What we do</h2>
                    <div className='footer-title-line2'></div>
                    <ul>
                        <li>Newsand stories</li>
                        <li>Publications</li>
                        <li>Take action</li>
                        <li>Recomendations</li>
                        <li>Help</li>
                    </ul> 
                </div>
                <div className='footer-social-media'>
                    <h2>Sign Up To Receive</h2>
                    <h2><AiOutlineLine /> Our Newsletter</h2>
                    <input />
                    <div className='footer-social'>
                        <p>Follow us!</p>
                        <div>
                            <FaFacebookF />
                        </div>
                        <div>
                            <AiFillInstagram />
                        </div>
                        <div>
                            <BsYoutube />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
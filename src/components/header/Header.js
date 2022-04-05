import React from 'react';

// components
import Slider from './HeaderSlider';
// style
import './header.scss';


const Header = () => {
    return (
        <section id=''>
            <div className='header-container'>
                <div className='header-body'>
                    <div className='header-left-bar'>
                        <h1>UI<span className='text-violet'>.</span></h1>
                        <h2 className='text-light'>BEGINNER's</h2>
                    </div>
                    <div className="header-slider">
                        <Slider  />
                    </div>
                    <div className='header-right-bar'>
                        <p className='text-bold'>START GUIDE FOR BEFINNER DESIGNER</p>
                        <p className='text-light'> The href attribute requires a valid value to be accessible. Provide a valid </p>
                        <div className='header-btn'>
                            <a href='#' className='btn violet-bg'>LET's START</a>
                            <a href='#' className='btn btn-light'>READ MORE</a>
                        </div>
                    </div>
                </div>
                <div className='header-line'>
                    <div className='header-line-container'>
                        <article>
                            <h1 className='text-light'><span className='text-violet'>+</span>150</h1>
                            <div>
                                <h2 className='text-light'>HAPPY</h2>
                                <h2 className='text-bold'>STUDENT</h2>
                            </div>
                        </article>
                        <article>
                            <h1 className='text-light'><span className='text-violet'>+</span>50</h1>
                            <div>
                                <h2 className='text-light'>CERTIFIED</h2>
                                <h2 className='text-bold'>COURSES</h2>
                            </div>
                        </article>
                        <article>
                            <h1 className='text-light'><span className='text-violet'>+</span>1000</h1>
                            <div>
                                <h2 className='text-light'>AWARDS</h2>
                                <h2 className='text-bold'>RECEIVED</h2>
                            </div>
                        </article>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;
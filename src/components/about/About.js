import React from 'react';

// style
import './about.scss';
// image
import avatar from '../../assets/image/avatar2.png';
// icon
import {FaSquareFull} from 'react-icons/fa';
const About = () => {
    return (
        <section id='about'>
            <div className='about-container'>
                <div className='about-text-bar'>
                    <h1>About <span className='text-light text-violet'>us.</span></h1>
                    <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptates ipsum necessitatibus natus sequi enim quaerat provident iure dolores hic.</p>
                    <ul>
                        <li><span className='text-violet'><FaSquareFull /></span>LOREM IPSUM DOLOR.</li>
                        <li><span className='text-violet'><FaSquareFull /></span>LOREM IPSUM DOLOR.</li>
                        <li><span className='text-violet'><FaSquareFull /></span>LOREM IPSUM DOLOR.</li>
                        <li><span className='text-violet'><FaSquareFull /></span>LOREM IPSUM DOLOR.</li>
                    </ul>
                    <button href='#about' className='btn'>READ MORE</button>
                </div>
                <div className='about-image-bar'>
                    <div className='about-image'>
                        <img src={avatar} alt="avatar"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
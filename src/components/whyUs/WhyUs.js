import React from 'react';

// style
import './whyus.scss';

// image
import picture from '../../assets/image/avatar3.png';

const WhyUs = () => {
    return (
        <section id='whyus'>
            <div className='whyuse-container'>
                <div className='whyus-image-bar'>
                    <div>
                        <img src={picture} alt='avatar' />
                    </div>
                </div>
                <div className='whyus-text-bar'>
                    <h1>Why <span className='text-violet'>us.</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ab soluta cumque aspernatur ea atque 
                    ad laboriosam quo, similique porro, illo sint. Cum recusandae consectetur incidunt tenetur excepturi inventore
                    illum ducimus voluptate porro? Saepe, necessitatibus, explicabo, magni iure optio consequuntur natus dolorem fugiat
                    earum qui itaque error odio blanditiis omnis!</p>
                    <button className='btn'>READ MORE</button>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
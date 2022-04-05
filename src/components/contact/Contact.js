import React from 'react';

// style
import './contact.scss';

// image
import picture from '../../assets/image/contact.png';
const Contact = () => {
    return (
        <section id='contact'>
            <div className='contact-container'>
                <div className='contact-image'>
                    <img src={picture} alt="harkhari" />
                </div>
                <div>
                    <div className='contact-title'>
                        <h1>SUBSCRIBE</h1>
                        <h1 className='text-violet text-light'>to our newletter</h1>
                        <p>Expected an assignment or function call and instead saw an expression suscipit omnis quo vero maxime vel?</p>
                    </div>
                    <div className='contact-input'>
                        <form className='contact-form'>
                            <input type="text" placeholder='Name'/>
                            <input type="email" placeholder='E-Mail'/>
                            <textarea placeholder='Text ...' />
                            <button className='btn'>SEND MESSAGE</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
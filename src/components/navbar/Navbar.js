import React,{useState} from 'react';
// styles
import './navbar.scss';
// icon 
import {HiOutlineMenuAlt1} from 'react-icons/hi';
import {VscChromeClose} from 'react-icons/vsc';

const Navbar = () => {
    const [active , setActive] = useState();
    const [toggle , setToggle] = useState(false)
    const handler = () => {
        if(toggle) {
            setToggle(false)
        }else {
            setToggle(true)
        }
    }
    return ( 
        <section>
            <div className='navbar-container'>
                <div className='navbar-logo'>
                    <div className='navbar-square'></div>
                    <p>YOUR LOGO</p>
                </div>
                <div>
                    { toggle ? 
                    <div  className='navbar-hamburger'>
                        <VscChromeClose className='navbar-icon navbar-close' onClick={handler}/>
                        <ul className='navbar-hamburger-list'>
                            <a href='#'><li onClick={handler}>HOME</li></a>
                            <a href='#course' onClick={handler}><li>COURSE</li></a>
                            <a href='#about' onClick={handler}><li>ABOUT</li></a>
                            <a href='#whyme' onClick={handler}><li>WHY US</li></a>
                            <a href='#comment' onClick={handler}><li>USER COMMENT</li></a>
                            <a href='#contact' onClick={handler}><li>CONTACT US</li></a>
                        </ul>
                    </div>
                        :
                        <div className='navbar-hamburger'>
                            <HiOutlineMenuAlt1 className='navbar-icon' onClick={handler}/>
                        </div>
                    }
                    <ul className='navbar-list'>
                        <a href='#'><li onClick={() => setActive("#")} className={active === '#' ? 'navbar-active' : ''}>HOME<div></div></li></a>
                        <a href='#course'><li onClick={() => setActive("#course")} className={active === '#course' ? 'navbar-active' : ''}>COURSE<div></div></li></a>
                        <a href='#about'><li onClick={() => setActive("#about")} className={active === '#about' ? 'navbar-active' : ''}>ABOUT<div></div></li></a>
                        <a href='#whyus'><li onClick={() => setActive("#whyus")} className={active === '#whyus' ? 'navbar-active' : ''}>WHY US<div></div></li></a>
                        <a href='#comment'><li onClick={() => setActive("#user-comment")} className={active === '#user-comment' ? 'navbar-active' : ''}>USER COMMENT<div></div></li></a>
                        <a href='#contact'><li onClick={() => setActive("#contact")} className={active === '#contact' ? 'navbar-active' : ''}>CONTACT US<div></div></li></a>
                    </ul>
                </div>
                <div>
                    <a href="#signUp" className='btn btn-white'>Sign In</a>
                </div>
            </div>
        </section>
    );
};

export default Navbar;
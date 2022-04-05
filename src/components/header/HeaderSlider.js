import React from 'react';

// style
import './header.scss';

// image
import avatar from '../../assets/image/avatar.png';

// icon
import {BsArrowLeft,BsArrowRight} from 'react-icons/bs';
const HeaderSlider = () => {
    return (
        <div className='header-slide-container'>
                <BsArrowLeft className='header-arrow' />
            <div className='header-slide-avatar'>
                <img src={avatar} alt="avatar"/>
            </div>
                <BsArrowRight className='header-arrow' />
        </div>
    );
};

export default HeaderSlider;
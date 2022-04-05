import React from 'react';

// components
import CourseCard from './CourseCard';

// style
import './course.scss';

// icon
import {BsArrowDown,BsArrowRight} from 'react-icons/bs';
import {FaSquareFull} from 'react-icons/fa';
const Course = () => {
    return (
        <section id='course'>
            <div className='course-container'>

                <div className='course-topbar'>
                    <h1>ACCEPT</h1>
                    <h1 className='text-light'>NEW</h1>
                    <h1>CHALLENGES</h1>
                    <BsArrowDown className='course-arrowdown' />
                    <div className='course-title'>
                        <div className='course-title-item'>
                            <h2 className='text-light'><span className='text-bold'>FIND</span>Your Course.</h2>
                        </div>
                        <div className='course-edition'>
                            <p><span><FaSquareFull /></span> EDITION</p>
                            <h2>2022</h2>
                        </div>
                    </div>
                </div>
                <div className='course-cards'>
                    <CourseCard num="01"/>
                    <CourseCard num="02"/>
                    <CourseCard num="03"/>
                    <CourseCard num="04"/>
                </div>
            </div>
            <h4 className='more-course-btn'>MORE COURSES<span> <BsArrowRight /></span></h4>
        </section>
    );
};

export default Course;
import React from 'react';

// style
import './course.scss';


const CourseCard = ({num}) => {
    return (
        <div className='course-card-container'>
            <h1>Course <span className='text-violet'>{num}</span></h1>
            <div className='violet-bg'></div>
            <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, </p>
            <button href='#' className='btn'>READ MORE</button>
        </div>
    );
};

export default CourseCard;
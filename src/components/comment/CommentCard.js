import React from 'react';

// style
import './comment.scss';

// icon
import {AiFillStar,AiOutlineStar} from 'react-icons/ai';
const CommentCard = ({picture,name,stars,comment}) => {

        let star = Number(stars)
        let outlineStar = 5 - star
        let fillStars = []
        let filloutStars = []
        while (star > 0) {
                const xxx = <AiFillStar />
                star= star - 1;
                fillStars.push(xxx)
            }
            
            while (outlineStar > 0) {
                const xxxx = <AiOutlineStar />
                outlineStar = outlineStar - 1;
                filloutStars.push(xxxx)
            }
            const key1=[1,2,3,4,5]
            const key2=[6,7,8,9,10]
    return (

        <div>
            <div className='comment-card-image'>
                <img src={picture} alt="comment" />
                <h3>{name}</h3>
            </div>
            <div className='comment-card-stars'>
                { fillStars.map((star , i) => <span key={key1[i]}>{star}</span> ) }
                { filloutStars.map((star , j) => <span key={key2[j]}>{star}</span> ) }
            </div>
            <div className='comment-card-text'>
                <p>{comment}</p>
            </div>
        </div>
    );
};

export default CommentCard;
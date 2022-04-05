import React,{useReducer} from 'react';
// components
import CommentCard from './CommentCard';

// styles
import './comment.scss';

// icon
import {BsArrowLeft,BsArrowRight} from 'react-icons/bs';
// image
import picture1 from '../../assets/image/comment.png';
import picture2 from '../../assets/image/comment2.png';
import picture3 from '../../assets/image/comment3.png';
import styles from 'styled-components';

const initialState = {
    slide1:0,
    slide2:1,
    slide3:2,
}
const reducer = (state,action) => {
    switch(action.type) {
        case "PREV":
            if(state.slide1 === 0) {
                return {
                    slide1:2,
                    slide2:0,
                    slide3:1
                }
            }
            if(state.slide1 === 1){
                return {
                    slide1:0,
                    slide2:1,
                    slide3:2,
                }
            }
            if(state.slide1 === 2) {
                return {
                    slide1:1,
                    slide2:2,
                    slide3:0
                }
            }
            else return initialState
            
        case "NEXT":
            if(state.slide1 === 0) {
                return {
                    slide1:1,
                    slide2:2,
                    slide3:0
                }
            }
            if(state.slide1 === 1){
                return {
                    slide1:2,
                    slide2:0,
                    slide3:1,
                }
            }
            if(state.slide1 === 2) {
                return {
                    slide1:0,
                    slide2:1,
                    slide3:2
                }
            }
            else return initialState
        default:
            return initialState
    }
}

const Comment = () => {

    const [slider , dispatch] = useReducer(reducer , initialState)
    const Div =  styles.div`
        div {
            &:nth-child(1) {
                order: ${slider.slide1};
            }
            &:nth-child(2) {
                order: ${slider.slide2};
            }
            &:nth-child(3) {
                order: ${slider.slide3};
            }
        }
    `
    return (
        <section id='comment'>
            <div className='comment-container'>
                <div className='comment-title'>
                    <h1>WHAT</h1>
                    <h2 className='text-violet'>Users think.</h2>
                </div>
                <Div className='comment-main-container'>
                    
                    <div  className={slider.slide1 === 1 ? "comment-card-container active": "comment-card-container"}>
                        <CommentCard picture={picture1} name="LOURA SMITH" stars="3" comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat natus distinctio culpa dignissimos et suscipit omnis quo vero maxime vel?" />
                    </div>
                    <div  className={slider.slide2 === 1 ? "comment-card-container active": "comment-card-container"}>
                        <CommentCard picture={picture2} name="JHON SMITH" stars="5" comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat natus distinctio culpa dignissimos et suscipit omnis quo vero maxime vel?" />
                    </div>
                    <div className={slider.slide3 === 1 ? "comment-card-container active": "comment-card-container"}>
                        <CommentCard picture={picture3} name="SARA SMITH" stars="4" comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat natus distinctio culpa dignissimos et suscipit omnis quo vero maxime vel?" />
                    </div>
                </Div>
                <div className='comment-arrow'>
                    <BsArrowLeft onClick={() => {dispatch({ type:"PREV" })}} />
                    <BsArrowRight onClick={() => {dispatch({ type:"NEXT" })}} />
                </div>
            </div>
        </section>
    );
};

export default Comment;
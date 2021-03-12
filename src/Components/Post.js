import React from 'react'
import './Post.css'
import addNotification from 'react-push-notification';
import db from '../firebase'
import DeleteIcon from '@material-ui/icons/Delete';
import { Player } from 'video-react';
import "../../node_modules/video-react/dist/video-react.css";
// import React, { useState } from 'react'

const Post = ({ key, id, image, collection, username, timestamp, message }) => {
    const handleClick = () => {
        let tempRef = db.database().ref(collection+'/'+id);
        tempRef.remove();

        addNotification({
            title: 'Warning',
            subtitle: 'You have deleted a post',
            // message: 'This is a very long message',
            theme: 'red',
        });
    }
    // console.log(image.split('.'))
    const ext = image.split('.')[image.split('.').length - 1].slice(0,3);

    return (
        <div className='post'>
            <div className="post__image">
                {
                    ext == "mp4" ? (
                        <Player>
                            <source src={image} />
                        </Player>
                    ):(
                        <img src={image}/>
                    )
                }
                
            </div>
            <div className="post__top">
                <div className="post__topInfo">
                    <h2>{username}</h2>
                   {/* <p>{`${new Date(timestamp).getHours()}:${new Date(timestamp).getMinutes()}:${new Date(timestamp).getSeconds()} ${new Date(timestamp).getDate()}/${new Date(timestamp).getMonth()+1}/${new Date(timestamp).getFullYear()}`}</p> */}
                   <p>{timestamp}</p>
                </div>
            </div>
            <div className="post__bottom">
                <blockquote>{ message }</blockquote>
            </div>
            {/* {
                imgName ? (
                    <div className="post__image">
                        <img src={'sdf'} />
                    </div>
                ) : (
                        console.log('DEBUG >>> no image here')
                    )
            } */}
            <div className="post__options">
                <button onClick = {handleClick} type="button" className="btn btn-light">
                    <div className="post__option">
                        <DeleteIcon/>
                        <p>Delete</p>
                    </div>
                </button>
                {/* <div className="post__option">
                    <ChatBubbleOutlineIcon />
                    <p>Answer</p>
                </div> */}
            </div>
        </div>
            
        
    )
}

export default Post

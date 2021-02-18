import React from 'react'
import './Post.css'
import addNotification from 'react-push-notification';
import db from '../firebase'
import DeleteIcon from '@material-ui/icons/Delete';
// import firebase from 'firebase';
// import { Avatar } from '@material-ui/core'
// import ThumbUpIcon from '@material-ui/icons/ThumbUp';
// import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
// import NearMeIcon from '@material-ui/icons/NearMe';
// import AccountCirleIcon from '@material-ui/icons/AccountCircle';
// import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';

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

            // native: true  when using native, your OS will handle theming.
        });
    }

    return (
        <div className='post'>
            <div className="post__image">
                {/* { */}
                    {/* type=="video/mp4" ? ( */}
                    {/* <video width="800" height="400">
                        <source src={image} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video> */}
                    {/* ):( */}
                        <img src={image}/>
                    {/* )
                } */}
            </div>
            <div className="post__top">
                <div className="post__topInfo">
                    <h2>{username}</h2>
                   {/* <p>{`${new Date(timestamp).getHours()}:${new Date(timestamp).getMinutes()}:${new Date(timestamp).getSeconds()} ${new Date(timestamp).getDate()}/${new Date(timestamp).getMonth()+1}/${new Date(timestamp).getFullYear()}`}</p> */}
                   <p>{timestamp}</p>
                </div>
            </div>

            <div className="post__bottom">
                <p>{ message }</p>
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
                </div>
                <div className="post__option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCirleIcon />
                    <ExpandMoreOutlined />
                </div> */}
            </div>
        </div>
            
        
    )
}

export default Post

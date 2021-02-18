import React, { useState, useEffect } from 'react'
import './AboutUs.css'
import firebase from 'firebase';
import db from '../firebase'
// import { Avatar } from '@material-ui/core'
// import ThumbUpIcon from '@material-ui/icons/ThumbUp';
// import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
// import NearMeIcon from '@material-ui/icons/NearMe';
// import AccountCirleIcon from '@material-ui/icons/AccountCircle';
// import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';
// import addNotification from 'react-push-notification';

// import React, { useState } from 'react'

const AboutUs = () => {
    const [description, setDescription ] = useState('');
    // const handleClick = () => {
    //     let tempRef = db.database().ref(collection+'/'+id);
    //     tempRef.remove();

    //     addNotification({
    //         title: 'Warning',
    //         subtitle: 'You have deleted a post',
    //         // message: 'This is a very long message',
    //         theme: 'red',

    //         // native: true  when using native, your OS will handle theming.
    //     });
    // }
    useEffect(()=>{
        const getAboutUs = db.database().ref('AboutUs');
        getAboutUs.on('value',(snapshot) => {
            const data = snapshot.val();
            // console.log(snapshot.val().description)
            setDescription(data.description);
        })
        // setDescription()
    },[]);

    return (
        <div className='about'>
            <div className="about__image">
            </div>
            <div className="about__top">
                <div className="about__topInfo">
                    <h1 className="text-center">About Us</h1>
                   {/* <p>{`${new Date(timestamp).getHours()}:${new Date(timestamp).getMinutes()}:${new Date(timestamp).getSeconds()} ${new Date(timestamp).getDate()}/${new Date(timestamp).getMonth()+1}/${new Date(timestamp).getFullYear()}`}</p>
                   <p>{timestamp}</p> */}
                </div>
            </div>

            <div className="about__bottom">
                <p>{ description }</p>
            </div>
        </div>
            
        
    )
}

export default AboutUs

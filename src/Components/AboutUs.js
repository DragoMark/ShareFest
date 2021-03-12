import React, { useState, useEffect } from 'react'
import './AboutUs.css'
// import firebase from 'firebase';
import db from '../firebase'

const AboutUs = () => {
    const [description, setDescription ] = useState('');

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

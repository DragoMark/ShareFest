import React, { useState, useEffect } from 'react'
import './TnC.css'
import db from '../firebase'
import firebase from 'firebase';

// import React, { useState } from 'react'

const TnC = () => {
    const [description, setDescription ] = useState('');

    useEffect(()=>{
        const getTnC = db.database().ref('TermsandConditions');
        getTnC.on('value',(snapshot) => {
            const data = snapshot.val();
            // console.log(snapshot.val().description)
            setDescription(data.description);
        })
        // setDescription()
    },[]);

    return (
        <div className='tnc'>
            <div className="tnc__top">
                <div className="tnc__topInfo">
                    <h1>Terms & Conditions</h1>
                   {/* <p>{`${new Date(timestamp).getHours()}:${new Date(timestamp).getMinutes()}:${new Date(timestamp).getSeconds()} ${new Date(timestamp).getDate()}/${new Date(timestamp).getMonth()+1}/${new Date(timestamp).getFullYear()}`}</p>
                   <p>{timestamp}</p> */}
                </div>
            </div>

            <div className="tnc__bottom">
                <p>{ description }</p>
            </div>
        </div>
            
        
    )
}

export default TnC

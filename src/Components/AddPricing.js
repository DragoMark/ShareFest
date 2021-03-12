import React, { useState, useEffect } from 'react'
import './Add.css'
import db from '../firebase';
import "firebase/database";
import addNotification from 'react-push-notification';


const AddPricing = () => {
    const [description, setDescription ] = useState('');

    //Description value change ( visual )
    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    //Display current date
    useEffect(()=>{
        const getAboutUs = db.database().ref('Pricing');
        getAboutUs.on('value',(snapshot) => {
            const data = snapshot.val();
            // console.log(snapshot.val().description)
            setDescription(data.description);
        })
        // setDescription()
    },[]);

    //Handles data submit into Realtime Database
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(e.target[0].value)
        const postList = db.database().ref('Pricing');
        postList.set({
            description: e.target[0].value,
        }) 

        setDescription(e.target[0].value);

        addNotification({
            title: 'Success',
            subtitle: 'You have updated Pricing successfully',
            // message: 'This is a very long message',
            theme: 'light',
            backgroundTop:'green',
            backgroundBottom:'green'
        });
    }

    return (
        <div className='add'>
            <div className="add__top">
                    <div className="contact-clean">
                        <form method="post" onSubmit={handleSubmit}>
                            <h2 className="text-center">Pricing</h2>
                            <div className="form-group">
                                <textarea onChange={handleDescription} value={description} className="form-control" name="description" placeholder="Message" rows="14"></textarea>
                            </div>
                            <div className="form-group button-submit">
                                <button  className="btn btn-danger" type="submit">Post </button>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
    )
}

export default AddPricing;

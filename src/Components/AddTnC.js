import React, { useState, useEffect } from 'react'
import './Add.css'
import addNotification from 'react-push-notification';
import "firebase/database";
import db from '../firebase';


const AddTnC = () => {
    const [description, setDescription ] = useState('');

    //Description value change ( visual )
    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    //Display current date
    useEffect(()=>{
        const getTnC = db.database().ref('TermsandConditions');
        getTnC.on('value',(snapshot) => {
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
        const postList = db.database().ref('TermsandConditions');
        postList.set({
            description: e.target[0].value,
        }) 


        
        // setTitle('');
        setDescription(e.target[0].value);
        // setFile('');

        addNotification({
            title: 'Success',
            subtitle: 'You have updated TnC successfully',
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
                            <h2 className="text-center">Terms & Conditions</h2>
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

export default AddTnC;

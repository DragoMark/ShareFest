import React, { useState } from 'react'
import { Avatar } from '@material-ui/core'
import './MessageSender.css'
import VideocamIcon from '@material-ui/icons/Videocam';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
// import { useStateValue } from '../StateProvider';
import firebase from 'firebase';
import db from '../firebase';

const MessageSender = ( {collection} ) => {
    const [input, setInput ] = useState('');
    const [imageUrl, setImageUrl ] = useState('');
    // const [image, setImage ] = useState(null);
    // const [{ user }, dispatch] = useStateValue();

    const handleSubmit = async (e) => {
        e.preventDefault();

        db.collection(collection)
        .add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            // profilePic: user.photoURL,
            // username: user.displayName,
            image:imageUrl
        })

        setImageUrl('');
        setInput('');
    }

    return (
        <div className='messageSender'>
            <div className="messageSender__top">
                {/* <Avatar src={user.photoURL} /> */}
                <form>
                    <input 
                        type="text" 
                        className='messageSender__input' 
                        placeholder={`Enter text`}
                        value={input} 
                        onChange={(e) => setInput(e.target.value)}/>

                    <input 
                        value={imageUrl} 
                        placeholder="Image URL (if any)"
                        className='messageSender__fileSelector' 
                        onChange={e => setImageUrl(e.target.value)}     
                    />
                    <button 
                    onClick={handleSubmit} 
                    type='submit'>Hidden Submit</button>
                </form>
            </div>
        </div>
    )
}

export default MessageSender;



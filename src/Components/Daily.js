import React, { useEffect, useState } from 'react'
import './Learn.css';
// import MessageSender from './MessageSender';
import Post from './Post'
import db from '../firebase'

function Daily (){
    const [profilePic, setProfilePic] = useState('')
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.database().ref('Daily updates')
        // .orderByChild('timestamp')
        .on('value',(snapshot) =>{
            let docs = []
            snapshot.forEach(child => {
                docs.push(child)
            })
            setPosts(docs.map(doc => ({ id:doc.key, data:doc.val() })))
            // console.log(docs);
            // console.log((posts))
            // console.log(snapshot);
            // console.log(snapshot.val())
        })
    },[])

    return (
        <div className='feed' >
            {/* <MessageSender collection='guide'/> */}
            {   
                posts.map((post) => (
                    <Post
                        key={post.id}
                        id={post.id}
                        collection='Daily updates'
                        // profilePic={post.data.profilePic}
                        message={post.data.description}
                        timestamp={post.data.timestamp}
                        image={post.data.media}
                        username={post.data.title}
                    />
                ))    
            }

        </div>
    )
}

export default Daily;
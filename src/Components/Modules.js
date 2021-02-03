import React, { useEffect, useState } from 'react'
import './Learn.css';
// import MessageSender from './MessageSender';
import Post from './Post'
import db from '../firebase'
import "firebase/database";


function Modules ({ module }){
    const [posts, setPosts] = useState([])

    useEffect(() => {
        // console.log('Learn/'+module)
        let modules = db.database().ref('Learn/'+module)
        .on('value',(snapshot) =>{
            let docs = []
            snapshot.forEach(child => {
                docs.push(child)
            })
            setPosts(docs.map(doc => ({ id:doc.key, data:doc.val() })))
            // docs.map(doc => (console.log(doc.key)))
            console.log((posts))
            console.log(snapshot);
            console.log(snapshot.val())
        })
    },[])


    return (
        <div className='feed' >
            {   
                posts.map((post) => (
                    
                    <Post
                        key={post.id}
                        id={post.id}
                        collection={'Learn/'+ module}
                        // profilePic={post.data.profilePic}
                        message={post.data.description}
                        timestamp={post.data.timestamp}
                        // image={post.data.image}
                        username={post.data.title}
                    />
                ))    
            }
        </div>
    )
}

export default Modules;
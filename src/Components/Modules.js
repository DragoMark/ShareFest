import React, { useEffect, useState } from 'react'
import './Learn.css';
// import MessageSender from './MessageSender';
import Post from './Post'
import db from '../firebase'
import "firebase/database";


function Learn (){
    // const [profilePic, setProfilePic] = useState('')
    const [posts, setPosts] = useState([])

    useEffect(() => {
        // db.collection('posts')
        // .orderBy('timestamp','desc')
        // .onSnapshot(snapshot => {
        //     setPosts(snapshot.docs.map(doc => ({ id:doc.id, data:doc.data() })))
        // })
        // });
        // console.log(posts);
        let modules = db.database().ref('Learn')
        .on('value',(snapshot) =>{
            let docs = []
            snapshot.forEach(child => {
                docs.push(child)
            })
            setPosts(docs.map(doc => ({ id:doc.key, data:doc.key })))
            docs.map(doc => (console.log(doc.key)))
            console.log((posts))
            console.log(snapshot);
            console.log(snapshot.val())
        })
        // db.database().ref('Learn')
        // // .orderByChild('timestamp')
        // .on('value',(snapshot) =>{
        //     let docs = []
        //     snapshot.forEach(child => {
        //         docs.push(child)
        //     })
        //     setPosts(docs.map(doc => ({ id:doc.key, data:doc.val() })))
        //     console.log(docs);
        //     console.log((posts))
        //     console.log(snapshot);
        //     console.log(snapshot.val())
        // })
    },[])


    return (
        <div className='feed' >
            {/* <MessageSender collection='posts'/> */}
            {   
                <Router>
                posts.map(post => (
                    <Route path={`/learn/${post.id}`} component={Modules} /> 
                ))    
                </Router> 
            }

        </div>
    )
}

export default Learn;
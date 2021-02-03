import React, { useEffect, useState } from 'react'
import './Learn.css';
import MessageSender from './MessageSender';
import Post from './Post'
import db from '../firebase'

function Feed3 (){
    const [profilePic, setProfilePic] = useState('')
    const [posts, setPosts] = useState([])

    // const syncFeed = () => {
    //     axios.get('/retrieve/posts')
    //     .then((res) => {
    //         console.log(res.data)
    //         setPostsData(res.data)
    //     })
    // }

    useEffect(() => {
        db.collection('career')
        .orderBy('timestamp','desc')
        .onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({ id:doc.id, data:doc.data() })))
        })
        // });
    },[])


    // useEffect(() => {
    //     syncFeed()
    // },[])

    return (
        <div className='feed' >
            <MessageSender collection='career'/>
            {/* <Post
                profilePic={'https://chaospin.com/wp-content/uploads/2020/06/haikyuu-season-5-release-date-1-1280x720.jpg'}
                message={'this workss'}
                timestamp={'time thingie'}
                image={'https://cdn.videotapenews.com/wp-content/uploads/2020/10/Haikyuu.jpg'}
                username={'blehh'}
            />
            <Post
                profilePic={'https://chaospin.com/wp-content/uploads/2020/06/haikyuu-season-5-release-date-1-1280x720.jpg'}
                message={'this workss'}
                timestamp={'time thingie'}
                username={'blehh'}
            /> */}
            {   
                posts.map((post) => (
                    <Post
                        key={post.data.id}
                        profilePic={post.data.profilePic}
                        message={post.data.message}
                        timestamp={post.data.timestamp}
                        image={post.data.image}
                        username={post.data.username}
                    />
                ))    
            }

        </div>
    )
}

export default Feed3
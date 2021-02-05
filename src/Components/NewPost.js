import React, { useState } from 'react'
import './NewPost.css'
// import { useStateValue } from '../StateProvider';
import firebase from 'firebase';
import db from '../firebase';
import ProgressBar from './ProgressBar';
import useStorage from '../hooks/useStorage';
import HelpIcon from '@material-ui/icons/Help';
import "firebase/database";
import './NewPost.css'
import addNotification from 'react-push-notification';

const NewPost = () => {
    const [title, setTitle ] = useState('');
    const [file, setFile ] = useState(null);
    const [url, setUrl ] = useState(null);
    const [error, setError ] = useState(null);
    const [description, setDescription ] = useState('');
    const [modules, setModules] = useState([]);
    // let preset = ['Modules 10','Modules 9','Modules 8','Modules 7','Modules 6','Modules 5','Modules 4','Modules 3','Modules 2']
    // const [module, setModule] = useState('');
    // const [imageUrl, setImageUrl ] = useState('');
    // const [image, setImage ] = useState('');
    // const [{ user }, dispatch] = useStateValue();

    //Title value change ( visual )
    const handleTitle = (e) => {
        setTitle(e.target.value)

    }

    //Description value change ( visual )
    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    //File Storage 
    const handleFile = (e) => {
        const file = e.target.files[0];

        if(file)
        {
            setFile(file);
        }
        else 
        {
            setFile(null);
            setError('Please don\'t be a dickhead')
        }
        
        // const storage = db.storage().ref();
        // const fileRef = storage.child(file.name)
        // fileRef.put(file).then(() => {
        //     // alert("file uploaded")
        // })
    }

    //Handles data submit into Realtime Database
    const handleSubmit = async (e) => {
        e.preventDefault();

        const postList = db.database().ref(e.target[1].value);
        const newPost = postList.push();
        newPost.set({
            description: e.target[2].value,
            timestamp: firebase.database.ServerValue.TIMESTAMP,
            title: e.target[0].value,
            url: url
            // image:imageUrl
        }) 


        console.log(url)
        setTitle('');
        setDescription('');

        addNotification({
            title: 'Success',
            subtitle: 'You have posted successfully',
            // message: 'This is a very long message',
            theme: 'light',
        });
    }

    return (
        <div className='messageSender'>
            <div className="messageSender__top">
                    <div className="contact-clean">
                        <form method="post" onSubmit={handleSubmit}>
                            <h2 className="text-center">New Post</h2>
                            <div className="form-group">
                                <input onChange={handleTitle} value={title} className="form-control" type="text" name="title" placeholder="Title" required/>
                            </div>
                            <div className="form-group">
                                <select className="form-control" required>
                                    <option value="" selected>Please select one</option>
                                    <option value="Learn">Learn</option>
                                    <option value="Daily updates">Daily Updates</option>
                                </select>
                            </div>
                            
                            <div className="form-group">
                                <textarea onChange={handleDescription} value={description} className="form-control" name="description" placeholder="Message" rows="14"></textarea>
                            </div>
                            <div className="form-group">
                                <input onChange={handleFile} className="form-control" type="file" name="file" placeholder="File" />
                            </div>
                            <div className="output">
                                { error && <div className="error">{ error }</div>}
                                { file && <div>{ file.name }</div>}
                                { file && <ProgressBar file = {file} setFile={setFile} setUrl={setUrl}/>}
                            </div>
                            <div className="form-group">
                                <button  className="btn btn-primary" type="submit">Post </button>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
    )
}

export default NewPost;



// import React, { useState } from 'react'
// import './NewPost.css'
// // import { useStateValue } from '../StateProvider';
// import firebase from 'firebase';
// import db from '../firebase';
// import ProgressBar from './ProgressBar';
// import useStorage from '../hooks/useStorage';
// import HelpIcon from '@material-ui/icons/Help';
// import "firebase/database";
// import './NewPost.css'
// import addNotification from 'react-push-notification';

// const NewPost = () => {
//     const [title, setTitle ] = useState('');
//     const [file, setFile ] = useState(null);
//     const [url, setUrl ] = useState(null);
//     const [error, setError ] = useState(null);
//     const [description, setDescription ] = useState('');
//     const [modules, setModules] = useState([]);
//     // let preset = ['Modules 10','Modules 9','Modules 8','Modules 7','Modules 6','Modules 5','Modules 4','Modules 3','Modules 2']
//     // const [module, setModule] = useState('');
//     // const [imageUrl, setImageUrl ] = useState('');
//     // const [image, setImage ] = useState('');
//     // const [{ user }, dispatch] = useStateValue();

//     // Handles modules appearance 
//     // const handleSelection = (e) => {
//     //     module = document.getElementById('modules');
//     //     if(e.target.value == "Learn")
//     //     {
//     //         module.classList.remove('disappear')
//     //     }
//     //     else
//     //     {
//     //         module.classList.add('disappear')
//     //     }
//     // }

//     //Title value change ( visual )
//     const handleTitle = (e) => {
//         setTitle(e.target.value)

//     }

//     //Description value change ( visual )
//     const handleDescription = (e) => {
//         setDescription(e.target.value)
//     }

//     //File Storage 
//     const handleFile = (e) => {
//         const file = e.target.files[0];

//         if(file)
//         {
//             setFile(file);
//         }
//         else 
//         {
//             setFile(null);
//             setError('Please don\'t be a dickhead')
//         }
        
//         // const storage = db.storage().ref();
//         // const fileRef = storage.child(file.name)
//         // fileRef.put(file).then(() => {
//         //     // alert("file uploaded")
//         // })
//     }

//     //Handles data submit into Realtime Database
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         // if(e.target[1].value == "Learn")
//         // {
//         //     // const postList = db.database().ref(e.target[1].value + '/'+ e.target[2].value);
//         //     const postList = db.database().ref(e.target[1].value);
//         //     const newPost = postList.push();
//         //     newPost.set({
//         //         description: e.target[2].value,
//         //         timestamp: firebase.database.ServerValue.TIMESTAMP,
//         //         title: e.target[0].value,
//         //         url: url
//         //         // image:imageUrl
//         //     }) 
//         // }    
//         // else
//         // {
//         const postList = db.database().ref(e.target[1].value);
//         const newPost = postList.push();
//         newPost.set({
//             description: e.target[2].value,
//             timestamp: firebase.database.ServerValue.TIMESTAMP,
//             title: e.target[0].value,
//             url: url
//             // image:imageUrl
//         }) 
//         // } 

//         console.log(url)
//         setTitle('');
//         setDescription('');

//         addNotification({
//             title: 'Success',
//             subtitle: 'You have posted successfully',
//             // message: 'This is a very long message',
//             theme: 'light',
//         });
//     }

//     //Adds a module to the module button
//     // const addModule = () => {
//     //     // console.log(modules)
//     //     if(modules.length == 0) {
//     //         setModules(['Module 1'])
//     //     }
//     //     else{
//     //         setModules((prev) => [...prev, "Module " + (Number(prev[prev.length - 1].slice(-1)) + 1)])
//     //     }
//     // }

//     return (
//         <div className='messageSender'>
//             <div className="messageSender__top">
//                     <div className="contact-clean">
//                         <form method="post" onSubmit={handleSubmit}>
//                             <h2 className="text-center">New Post</h2>
//                             <div className="form-group">
//                                 <input onChange={handleTitle} value={title} className="form-control" type="text" name="title" placeholder="Title" required/>
//                             </div>
//                             <div className="form-group">
//                                 <select className="form-control" onChange={handleSelection} required>
//                                     <option value="" selected>Please select one</option>
//                                     <option value="Learn">Learn</option>
//                                     <option value="Daily updates">Daily Updates</option>
//                                 </select>
//                             </div>
//                             <div className="form-group disappear" id="modules">
//                                 <select className="form-control">
//                                     <option selected>Please select one</option>
//                                     {
//                                         modules.map((module) => (
//                                             <option value={module}>{module}</option>
//                                         ))
//                                     } 
//                                 </select>
//                                 {/* <div className="addIcon">
//                                     <button type="button" className="btn btn-light" onClick={addModule}>
//                                         <HelpIcon />
//                                         <p> Add Module</p>
//                                     </button>
//                                 </div> */}
//                             </div>
                            
//                             <div className="form-group">
//                                 <textarea onChange={handleDescription} value={description} className="form-control" name="description" placeholder="Message" rows="14"></textarea>
//                             </div>
//                             <div className="form-group">
//                                 <input onChange={handleFile} className="form-control" type="file" name="file" placeholder="File" />
//                             </div>
//                             <div className="output">
//                                 { error && <div className="error">{ error }</div>}
//                                 { file && <div>{ file.name }</div>}
//                                 { file && <ProgressBar file = {file} setFile={setFile} setUrl={setUrl}/>}
//                             </div>
//                             <div className="form-group">
//                                 <button  className="btn btn-primary" type="submit">Post </button>
//                             </div>
//                         </form>
//                     </div>
//             </div>
//         </div>
//     )
// }

// export default NewPost;
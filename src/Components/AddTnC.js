import React, { useState, useEffect } from 'react'
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

const AddTnC = () => {
    const [title, setTitle ] = useState('');
    const [file, setFile ] = useState(null);
    const [url, setUrl ] = useState(null);
    const [error, setError ] = useState(null);
    const [description, setDescription ] = useState('');
    const [modules, setModules] = useState([]);
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];
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
        // const newPost = postList.push();
        // const date = `${monthNames[new Date().getMonth()]} ${new Date().getDate()}, ${new Date().getFullYear()}`;
        // console.log(date);
        // console.log(typeof(date));
        postList.set({
            description: e.target[0].value,
            // timestamp:date,
            // title: e.target[0].value,
            // media: url
            // image:imageUrl
        }) 


        
        // setTitle('');
        setDescription(e.target[0].value);
        // setFile('');

        addNotification({
            title: 'Success',
            subtitle: 'You have posted successfully',
            // message: 'This is a very long message',
            theme: 'light',
        });
    }

    return (
        // <div className="testing">
        <div className='messageSender'>
            <div className="messageSender__top">
                    <div className="contact-clean">
                        <form method="post" onSubmit={handleSubmit}>
                            <h2 className="text-center">Terms & Conditions</h2>
                            {/* <div className="form-group">
                                <input onChange={handleTitle} value={title} className="form-control" type="text" name="title" placeholder="Title" required/>
                            </div> */}
                            {/* <div className="form-group">
                                <select className="form-control" required>
                                    <option value="" selected>Please select one</option>
                                    <option value="Learn">Learn</option>
                                    <option value="Daily updates">Daily Updates</option>
                                </select>
                            </div> */}
                            
                            <div className="form-group">
                                <textarea onChange={handleDescription} value={description} className="form-control" name="description" placeholder="Message" rows="14"></textarea>
                            </div>
                            {/* <div className="form-group">
                                <input onChange={handleFile} className="form-control" type="file" name="file" placeholder="File" />
                            </div>
                            <div className="output">
                                { error && <div className="error">{ error }</div>}
                                { file && <div>{ `Loading ${file.name}...` }</div>}
                                { file && <div>Please Wait<br/><ProgressBar file = {file} setFile={setFile} setUrl={setUrl}/></div>}
                            </div> */}
                            <div className="form-group">
                                <button  className="btn btn-primary" type="submit">Post </button>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
        // </div>
    )
}

export default AddTnC;

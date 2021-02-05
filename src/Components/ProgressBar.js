import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import './ProgressBar.css'

const ProgressBar = ({ file, setFile, setUrl }) => {
    const { url, progress } = useStorage(file);
    console.log(progress, url);

    useEffect(() => {
        if(url)
        {
            setFile(null);
            setUrl(url);
        }
    }, [url, setFile])
    return (
        <div className="progressBar" style={{ width: progress + '%'}}></div>
    )
}

export default ProgressBar;
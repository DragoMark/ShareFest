//Header__center change the icons
import React from 'react';
import './Header.css';
import logo from '../assets/share-fest-logo-new.png';
import { Link } from 'react-router-dom';
// import { useStateValue } from '../StateProvider'

const Header = () => {

    // const [{ user }, dispatch] = useStateValue();
    // const logo = require('../assets/share-fest-logo.jpg');
    return (
        <div className = 'header'>
            <div className="header__left">
                {/* <Link to='/'> */}
                    <img src={logo} alt="Crack Logo"/>
                {/* </Link> */}
            </div>

            <div className="header__right">
                <div className="header__info">
                    {/* <Avatar src={user.photoURL}/> */}
                    {/* <h4>{user.displayName}</h4> */}
                    <h4>Admin</h4>
                </div>
            </div>
        </div>

        
    )
}

export default Header;
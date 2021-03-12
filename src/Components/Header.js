//Header__center change the icons
import React from 'react';
import './Header.css';
import logo from '../assets/share-fest-logo-new.png';
import { Link } from 'react-router-dom';
// import { useStateValue } from '../StateProvider'

const Header = () => {
    // const [{ user }, dispatch] = useStateValue();
    return (
        <div className = 'header'>
            <div className="header__left">
                <img src={logo} alt="Crack Logo"/>
                <h4>ShareFest Admin</h4>
            </div>
            <div className="header__right">
                <div className="header__info">
                    {/* <Avatar src={user.photoURL}/> */}
                    {/* <h4>{user.displayName}</h4> */}
                    
                </div>
            </div>
        </div>

        
    )
}

export default Header;
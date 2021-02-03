//Header__center change the icons

import React from 'react';
import './Header.css';
import logo from '../assets/logo1.png';
// import { useStateValue } from '../StateProvider'

const Header = () => {

    // const [{ user }, dispatch] = useStateValue();

    return (
        <div className = 'header'>
            <div className="header__left">
                <img src={logo} alt="Crack Logo"/>
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
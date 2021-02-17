// change icons and names
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Link } from 'react-router-dom';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import { useStateValue } from '../StateProvider';

import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import HelpIcon from '@material-ui/icons/Help';
import PeopleIcon from '@material-ui/icons/People';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
// import DropdownButton from 'react-bootstrap/DropdownButton';


const Sidebar = () => {
    const [{ user }, dispatch] = useStateValue()
    return (
        <div className='sidebar'>
            <Link to='/dash'>
                <SidebarRow Icon={PeopleIcon} title='Dashboard' />
            </Link>

            <Link to="/users">
                <SidebarRow Icon={PeopleIcon} title='Users' />
            </Link>

            <Link to="/new-post">
                <SidebarRow Icon={PeopleIcon} title='Post' />
            </Link>

            <Link to='/add-about-us'>
                <SidebarRow Icon={PeopleIcon} title='AddAboutUs' />
            </Link>

            <Link to='/add-TnC'>
                <SidebarRow Icon={PeopleIcon} title='AddTnC' />
            </Link>

            <Dropdown>
                <Dropdown.Toggle>
                    <SidebarRow Icon={VideoLibraryIcon} title='Content' />
                </Dropdown.Toggle>
                
                <Dropdown.Menu>
                    <Dropdown.Item href="/learn">
                        <SidebarRow Icon={HelpIcon} title='Learn' />
                    </Dropdown.Item>
                    <Dropdown.Item href="/daily">
                        <SidebarRow Icon={EmojiFlagsIcon} title='Daily Updates' />
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default Sidebar;
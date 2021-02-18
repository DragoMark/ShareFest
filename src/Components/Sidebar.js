// change icons and names
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Link } from 'react-router-dom';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import { useStateValue } from '../StateProvider';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import PostAddIcon from '@material-ui/icons/PostAdd';
import AddBoxIcon from '@material-ui/icons/AddBox';
import CollectionsIcon from '@material-ui/icons/Collections';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SchoolIcon from '@material-ui/icons/School';

// import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
// import HelpIcon from '@material-ui/icons/Help';
// import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
// import DropdownButton from 'react-bootstrap/DropdownButton';


const Sidebar = () => {
    const [{ user }, dispatch] = useStateValue()
    return (
        <div className='sidebar'>
            <Link to='/dash'>
                <SidebarRow Icon={DashboardIcon} title='Dashboard' />
                {/* <SidebarRow title='Dashboard' /> */}
            </Link>

            <Link to="/users">
                <SidebarRow Icon={PeopleIcon} title='Users' />
                {/* <SidebarRow title='Users' /> */}
            </Link>

            <Link to="/new-post">
                <SidebarRow Icon={PostAddIcon} title='Post' />
                {/* <SidebarRow title='Post' /> */}
            </Link>

            <Link to='/add-about-us'>
                <SidebarRow Icon={AddBoxIcon} title='AddAboutUs' />
                {/* <SidebarRow title='Modify AboutUs' /> */}
            </Link>

            <Link to='/add-TnC'>
                <SidebarRow Icon={AddBoxIcon} title='AddTnC' />
                {/* <SidebarRow title='Modify Tnc' /> */}
            </Link>

            <Dropdown>
                <Dropdown.Toggle>
                    <SidebarRow Icon={CollectionsIcon} title='Content' />
                    {/* <SidebarRow title='Content' /> */}
                </Dropdown.Toggle>
                
                <Dropdown.Menu>
                    <Dropdown.Item href="/learn">
                        <SidebarRow Icon={MenuBookIcon} title='Learn' />
                        {/* <SidebarRow title='Learn' /> */}
                    </Dropdown.Item>
                    <Dropdown.Item href="/daily">
                        <SidebarRow Icon={SchoolIcon} title='Daily Updates' />
                        {/* <SidebarRow title='Daily Updates' /> */}
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default Sidebar;
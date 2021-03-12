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
import CollectionsIcon from '@material-ui/icons/Collections';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SchoolIcon from '@material-ui/icons/School';
import InfoIcon from '@material-ui/icons/Info';
import PersonIcon from '@material-ui/icons/Person';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PaymentIcon from '@material-ui/icons/Payment';
import MobileScreenShareIcon from '@material-ui/icons/MobileScreenShare';
// import AddBoxIcon from '@material-ui/icons/AddBox';


const Sidebar = () => {
    const [{ user }, dispatch] = useStateValue()
    return (
        <div className='side-bar'>
            <Link to='/dash'>
                <SidebarRow Icon={DashboardIcon} title='Dashboard' />
            </Link>

            <Link to="/users">
                <SidebarRow Icon={PeopleIcon} title='Users' />
            </Link>

            <Link to="/new-post">
                <SidebarRow Icon={PostAddIcon} title='New Post' />
            </Link>

            <Link to='/add-about-us'>
                <SidebarRow Icon={PersonIcon} title='About Us' />
            </Link>

            <Link to='/add-TnC'>
                <SidebarRow Icon={InfoIcon} title='Terms & Conditions' />
            </Link>

            <Link to='/add-Pricing'>
                <SidebarRow Icon={InfoIcon} title='Pricing' />
            </Link>

            {/* <Dropdown>
                <Dropdown.Toggle class="btn">
                    <SidebarRow Icon={AssignmentIcon} title='Content' />
                </Dropdown.Toggle>
                
                <Dropdown.Menu>
                    <Dropdown.Item href="/learn">
                        <SidebarRow Icon={MenuBookIcon} title='Learn' />
                    </Dropdown.Item>
                    <Dropdown.Item href="/daily">
                        <SidebarRow Icon={SchoolIcon} title='Daily Updates' />
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown> */}
            <div class="dropdown">
                <button class="btn content-btn" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <SidebarRow Icon={AssignmentIcon} title='Content' />
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="/learn">
                        <SidebarRow Icon={MenuBookIcon} title='Learn' />
                    </a>
                    <a class="dropdown-item" href="/daily">
                        <SidebarRow Icon={SchoolIcon} title='Daily Updates' />
                    </a>
                </div>
            </div>
            <SidebarRow Icon={MobileScreenShareIcon} title='Referrals' />
            <SidebarRow Icon={PaymentIcon} title='Payment' />
        </div>
    )
}

export default Sidebar;
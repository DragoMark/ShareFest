import React from "react";
import './Footer.css';
import { Link } from 'react-router-dom';
// import SidebarRow from './SidebarRow'

const Footer = () => {
  return (
        <div className="footer-dark">
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 item text-center">
                            <Link to='/about-us'>
                                <h3>About Us</h3>
                            </Link>
                            {/* <ul>
                                <li><a href="#">Web design</a></li>
                                <li><a href="#">Development</a></li>
                                <li><a href="#">Hosting</a></li>
                            </ul> */}
                        </div>
                        <div className="col-md-4 item text-center">
                            <Link to='/TnC'>
                                <h3>Terms & Conditions</h3>
                            </Link>
                            {/* <ul>
                                <li><a href="#">Company</a></li>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul> */}
                        </div>
                        <div className="col-md-4 item text-center">
                        <Link to='/'>
                                <h3>Share Fest</h3>
                            </Link>
                            {/* <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p> */}
                        </div>
                        {/* <div className="col item social"><a href="#"><i className="icon ion-social-facebook"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-snapchat"></i></a><a href="#"><i className="icon ion-social-instagram"></i></a></div> */}
                    </div>
                    <p className="copyright">Share Fest © 2021</p>
                </div>
            </footer>
        </div>
  );
}

export default Footer;
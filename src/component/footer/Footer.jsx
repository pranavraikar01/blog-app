import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
// import {
//     Bollywood,
//     Fitness,
//     Food,
//     Hollywood,
//     Technology,
//     Home,
// } from '../../pages';


const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div style={{ marginBottom: '12px' }}>
                            <Link to="/Home" className="nav-link">
                                <span className="roted">The</span>
                                <span className="normal">SIREN</span>
                            </Link>
                        </div>
                        <p className="text-justify">Our mission is to empower bloggers of all backgrounds and interests by providing them with the tools and features they need to craft compelling and visually stunning blog posts. We believe that everyone has a story to tell, and we're here to help you tell yours.</p>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Categories</h6>
                        <ul className="footer-links">
                            <li><Link to="/Home"></Link></li>
                            <li><Link to="/Bollywood">Bollywood</Link></li>
                            <li><Link to="/Hollywood">Hollywood</Link></li>
                            <li><Link to="/Technology">Technology</Link></li>
                            <li><Link to="/Fitness">Fitness</Link></li>
                            <li><Link to="/Food">Food</Link></li>
                        </ul>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul className="footer-links">
                            <li><Link to="https://ajay-dhangar.github.io/" target="_blank">About Us</Link></li>
                            <li><Link to="mailto:ajaydhangar49@gmail.com" target="_blank">Contact Us</Link></li>
                            <li><Link to="https://github.com/React-js-Mastery/blog-app/blob/main/CONTRIBUTING.md" target="_blank">Contribute</Link></li>
                            <li><Link to="https://github.com/React-js-Mastery/blog-app/blob/main/privacy-policy.md" target="_blank">Privacy Policy</Link></li>
                            <li><Link to="https://github.com/Ajay-Dhangar" target="_blank">Follow Me</Link></li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">Copyright &copy; 2023 All Rights Reserved by
                            <Link to="https://github.com/Ajay-Dhangar"> Ajay Dhangar</Link>.
                        </p>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                            <li><Link className="github" to="https://github.com/React-js-Mastery/blog-app" target="_blank"><i className="fa fa-github"></i></Link></li>
                            <li><Link className="twitter"  to="https://twitter.com/AJAYDHA27250016" target="_blank"><i className="fa fa-twitter"></i></Link></li>
                            <li><Link className="youtube-play" to="https://www.youtube.com/channel/UCRQBq8dfTEZfIMxmq-Ba9Tw" target="_blank"><i className="fa fa-youtube-play"></i></Link></li>
                            <li><Link className="linkedin" to="https://www.linkedin.com/in/ajay-dhangar/" target="_blank"><i className="fa fa-linkedin"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

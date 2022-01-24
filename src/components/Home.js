import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'
import Projects from './Projects'
import Service from './Service'
import Contact from './Contact'
import Footer from './Footer'
import img from '../Images/profile.jpg'

const Home = () => {
    return (
        <>
            <div className="home-section d-flex align-items-center mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-10 col-md-10 mx-auto offset-1 offset-md-1 ">
                            <div className="row">
                                <div className="col-md-6 pt-3 profile-img d-flex justify-content-center aign-items-center flex-column">
                                    <img src={img} alt="" />
                                </div>
                                <div className="col-md-6 col-12 pt-3 profile-text d-flex justify-content-center aign-items-center flex-column">
                                    <h1 className="hello">HI THERE!</h1>
                                    <div className="main">
                                        <div className="text">I'M</div>
                                        <ul className="option">
                                            <li><span>ASHISH</span></li>
                                            <li><span>A DEVELOPER</span></li>
                                            <li><span>A PROGRAMMER</span></li>
                                            <li><span>A FREELANCER</span></li>
                                        </ul>
                                    </div>
                                    <p className="info-text">I'M full stack web developer skilled in HTML, CSS,  JavaScript and MERN stack.I create clean, professional and fully functional website I am outgoing, dedicated, and open-minded.</p>

                                    <div className="buttons-grp">
                                        <Link className="link" to="/about">About Me</Link>
                                        <Link className="link mx-3" to="/contact">Contact Me</Link>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <About/>
            <Projects/>
            <Service/>
            <Contact/>
          <Footer/>
        </>
    )
}

export default Home

import React from 'react'
import {Link,useLocation} from "react-router-dom"

const Navbar = () => {

    let location = useLocation();



    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand " to="/"><i className="fas fa-podcast" style={{color: "#ff8100"}}></i> Ashish Mishra.</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/"? "active" :""}`} active aria-current="page" to="/">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about"? "active" :""}`} to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/projects"? "active" :""}`} to="/projects">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/services"? "active" :""}`} to="/services">Services</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className={`nav-link ${location.pathname === "/link"? "active" :""} dropdown-toggle`} to="/link" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Links
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" target="_blank" rel="noreferrer" href="https://github.com/3964ashishmishra">Github</Link></li>
                                    <li><Link className="dropdown-item" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ashish-mishra-3b4434205/">Linkedin</Link></li>
                                    
                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/contact"? "active" :""}`} to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-warning" type="submit"><i className="fas fa-search"></i></button>
                        </form>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default Navbar

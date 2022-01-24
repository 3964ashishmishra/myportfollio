import React from 'react'
import { Link } from 'react-router-dom'
import img from '../Images/profile.jpg'

const About = () => {

    const msgAlert = () =>{
		alert("Email Me For Resume..😉");
	}

    return (
        <>
            <div className="home-section d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-10 col-md-10 mx-auto ">

                            <div className="heading mt-5">
                                <h1 className="about-head">About <span>Us</span></h1>
                            </div>
                            <div className="row">

                                <div className="col-md-6 col-12 mt-4 about-text d-flex justify-content-center aign-items-center flex-column order-md-1 order-2 order-lg-2">
                                    <h1 className="about-me">About <span>Me</span></h1>
                                    <h6 className="about-content-1">HI THERE, I'M Ashish Mishra. I'M  full stack web developer skilled in HTML,CSS,JavaScript and MERN stack.I create clean, professional and fully functional website.</h6>

                                    <h6 className="about-content-1 mt-2">I am outgoing, dedicated, and open-minded. I get across to people and adjust to changes with ease. I believe that a person should work on developing their professional skills and learning new things all the time.</h6>

                                    <div className="buttons-grp mt-3 mb-5">
                                        <Link className="link" onClick={msgAlert} to="/about"><i className="fas fa-download mx-2"></i>Download CV</Link>
                                    </div>

                                </div>

                                <div className="col-md-6 col-12 mt-3  about-img d-flex justify-content-center aign-items-center flex-column order-lg-2 order-1">
                                    <img src={img} alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div class="skills">
                <p class="skl">MY SKILLS :</p>
                <p class="skl sklLine">_________</p>
                <div class="htmlProg ProgWidth">
                    <div class="p">
                        <p>html</p>
                        <p>95%</p>
                    </div>
                    <div class="pp">
                        <div class="skillDiv">
                            <span class="skillBar htmlBar"></span>
                        </div>
                    </div>
                </div>
                <div class="cssProg ProgWidth">
                    <div class="p">
                        <p>Css3</p>
                        <p>70%</p>
                    </div>
                    <div class="pp">
                        <div class="skillDiv">
                            <span class="skillBar cssBar"></span>
                        </div>
                    </div>
                </div>
                <div class="jsProg ProgWidth">
                    <div class="p">
                        <p>JavaScript</p>
                        <p>75%</p>
                    </div>
                    <div class="pp">
                        <div class="skillDiv">
                            <span class="skillBar jsBar"></span>
                        </div>
                    </div>
                </div>
                <div class="javaProg ProgWidth">
                    <div class="p">
                        <p>Java</p>
                        <p>85%</p>
                    </div>
                    <div class="pp">
                        <div class="skillDiv">
                            <span class="skillBar javaBar"></span>
                        </div>
                    </div>
                </div>
                <div class="c/c++Prog ProgWidth">
                    <div class="p">
                        <p>C/C++</p>
                        <p>80%</p>
                    </div>
                    <div class="pp">
                        <div class="skillDiv">
                            <span class="skillBar ccpBar"></span>
                        </div>
                    </div>
                </div>
                <div class="reactProg ProgWidth">
                    <div class="p">
                        <p>React</p>
                        <p>70%</p>
                    </div>
                    <div class="pp">
                        <div class="skillDiv">
                            <span class="skillBar reactBar"></span>
                        </div>
                    </div>
                </div>
                <div class="nodeProg ProgWidth">
                    <div class="p">
                        <p>Node.js</p>
                        <p>35%</p>
                    </div>
                    <div class="pp">
                        <div class="skillDiv">
                            <span class="skillBar nodeBar"></span>
                        </div>
                    </div>
                </div>
                <div class="sqlProg ProgWidth">
                    <div class="p">
                        <p>Sql</p>
                        <p>85%</p>
                    </div>
                    <div class="pp">
                        <div class="skillDiv">
                            <span class="skillBar sqlBar"></span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About

import React,{useState} from 'react'
// import { Link } from 'react-router-dom'
import Proj from './JSON'

const Projects = () => {

    const [items, setitems] = useState(Proj);

    const filteritem =(categitem) =>{

        const updateitems = Proj.filter((curElem)=>{
            return curElem.category === categitem;
        })

         setitems(updateitems);
    }



    return (
        <>

            <div className="home-section d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-12 col-md-12 mx-auto "> */}

                            <div className="heading mt-2">
                                <h1 className="about-head">Pro<span>jects</span></h1>

                                <div className="btn-grp d-flex justify-content-center align-items-center mt-5">
                                    <button className="btn-2"onClick={()=> setitems(Proj)}>All</button>
                                    <button className="btn-2" onClick={()=>filteritem("websites")}>Websites</button>
                                    <button className="btn-2" onClick={()=>filteritem("app")}>Apps</button>
                                    <button className="btn-2" onClick={()=>filteritem("frontend")}>Desgins</button>
                                </div>


                            </div>

                             
                             {
                                 items.map((elem)=>{

                                    const {image,name,github,link} = elem;
                                    return(
                                        <div class="container col-md-4 col-10 offset-1 offset-md-0 my-4">
                                        <div class="row">
                                            <div class="col-4 col-md-4 col-12 my-4 mx-2">
                                                <div class="card" style={{ "width": "18rem" }}>
                                                    <img src={image} class="card-img-top" alt="..." />
                                                    <div class="card-body">
                                                        <h5 class="card-title">{name}</h5>
        
                                                        <a href={link} target="_blank" rel="noreferrer" class="btn mr-2"><i class="fas fa-link"></i> Visit Site</a>
                                                        <a href={github} target="_blank" rel="noreferrer" class="btn "><i class="fab fa-github"></i> Github</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    )

                                 })
                             }
                          

                        </div>
                    </div>
                </div>



        </>
    )
}

export default Projects


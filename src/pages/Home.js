import React, { useState, useEffect, useContext } from "react";
import { UserContent, UserContext } from '../App.js'
import './Home.css';
import { Link } from "react-router-dom";

const Home = (props) => {

    const [count, setCount] = useState(100);
    // const [renderCount,setRenderCount] = useState(0);

    const StartCounting = () => {
        setTimeout(() => {
            setCount((items) => items + 1)
        }, 1000)
    }

    useEffect(() => {
        // StartCounting()
    }, [count])

    const { ThemeMode, SelectedTheme, DOB } = useContext(UserContext)
    return (<>

        <nav className={`navbar navbar-expand-lg border-bottom  ${SelectedTheme ? 'navbar-light bg-light' : 'navbar-dark bg-dark'} `} style={{transition: 'background 0.3s linear'}}>
            <div className="container">
                <a className="navbar-brand" href="#">App Name</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 me-3 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Small Projects
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link to="/Content-page" className="dropdown-item" href="#">Contact Us</Link></li>
                                <li><Link to="/e-store" className="dropdown-item" href="#">e-store</Link></li>
                                <li><Link to="/all-post" className="dropdown-item" href="#">Manage Post</Link></li>

                                <li><hr className="dropdown-divider" /></li>
                                <li><Link to="/food-blog" className="dropdown-item" href="#">Food Blog</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                           <Link to="/user-ragistration" className="nav-link">Registration</Link>
                        </li>
                    </ul>

                    {/*<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />*/}
                 
                    <div className="form-check form-switch d-none">
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={ThemeMode} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >{SelectedTheme ? 'Dark' : 'Light'}</label>
                    </div>

                    <div>
                    <input type="checkbox" className="checkbox" id="checkbox" onClick={ThemeMode}  />
                    <label htmlFor="checkbox" className="checkbox-label" >
                        <i className="fas fa-moon"></i>
                             <i className="fas fa-sun"></i>

                        <span className="ball"></span>
                    </label>
                    </div>
                    

                </div>
            </div>
        </nav>
        
        <div className="container mt-5 d-none">
            <h2>Hi {props.user}<br />Welcome to Our Testing Project</h2>

        </div>


    </>
    )
}

export default Home


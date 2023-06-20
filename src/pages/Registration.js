
import React, { useState } from "react";
const Registration = () => {
    const [userData, setUserData] = useState({
        name: "",
        mobile: "",
        email: "",
        password: ""
    })

    let name 
    let value
    const sendData = (event) => {
        
           name = event.target.name;
           value = event.target.value;
           setUserData({ ...userData , [name]:value})
    }

    const submitData = async(event) =>
    {
        event.preventDefault();
        const { name, mobile, email, password } = userData;
       const res =  fetch("https://userregistration-2a0bf-default-rtdb.firebaseio.com/userRegistration.json",{
            method : "POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                name, mobile, email, password
            }),

        })

        if(res)
        {
            alert('Data is Added...!');
            setUserData({
                name: "",
                mobile: "",
                email: "",
                password: ""
            })
        }
        else
        {
            alert('failed')
        }
    }
    return (<div>
            <section className="vh-100 shadow" style={{heihgt:'100vh'}}>
                <div className="container-fuild h-100">
                    <div className="row d-flex  h-100">
                        <div className="col-lg-12 col-xl-12">
                            <div className="card text-black" style={{backgroundColor:'transparent'}} >
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                            <form className="mx-1 mx-md-4" >

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">

                                                        <input type="text" id="form3Example1c" className="form-control" 
                                                        name="name"
                                                        value={userData.name}
                                                        onChange={sendData}
                                                        placeholder="Enter Your Name" />

                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="texr" id="form3Example4cd" className="form-control" 
                                                        name="mobile"
                                                        value={userData.mobile}
                                                        onChange={sendData}
                                                        placeholder="Enter Mobile No" />
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="email" id="form3Example3c" className="form-control" 
                                                        name="email"
                                                        value={userData.email}
                                                        onChange={sendData}
                                                        placeholder="Enter Your Email" />
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password" id="form3Example4c" className="form-control" 
                                                        name="password"
                                                        value={userData.password}
                                                        onChange={sendData}
                                                        placeholder="Enter Your Password" />

                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-end  mb-3 mb-lg-4">
                                                    <button type="submit" className="btn btn-primary btn-lg" onClick={submitData}>Register</button>
                                                </div>

                                            </form>

                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                className="img-fluid" alt="Sample image" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
         </div>)
}

export default Registration
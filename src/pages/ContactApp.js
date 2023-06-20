import React, { useState } from "react";
import './ContactApp.css';
const ContactApp = () => {


    const [userData , setUserData ] = useState({
        fname : "",
        lname : "",
        email : "",
        subject : "",
        massage : ""

    })
   
    let name , value ;
    const getData = (event)=>
    {
        name = event.target.name;
        value = event.target.value;
        setUserData({...userData,[name]:value})
    }

    const SubmitData = (event)=>
    {
           event.preventDefault();

           const { fname , lname , email , subject , massage } = userData;

           const res = fetch("https://userregistration-2a0bf-default-rtdb.firebaseio.com/contactData.json",
           {
               method:"POST",
               headers:{
                'Content-Type':'application/json'
               },
               body:JSON.stringify({
                 fname ,
                 lname,
                 email ,
                 subject,
                 massage
               })
           })

           if(res)
           {
            alert('your Request is sended...!')
           }
           else
           {
            alert("samething is wrong....!")
           }
    }


    return (<div style={{ heigt: "100vh" }}>

        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-lg-9">
                    <h1 className="mb-3">Contact Us</h1>
                    <form>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <label htmlFor="your-name" className="form-label">Your Name</label>
                                <input type="text" className="form-control" value={userData.fname}  name="fname" required onChange={getData}  />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="your-surname" className="form-label">Your Surname</label>
                                <input type="text" className="form-control" value={userData.lname}  name="lname" required onChange={getData}  />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="your-email" className="form-label">Your Email</label>
                                <input type="email" className="form-control" value={userData.email}  name="email" required onChange={getData}  />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="your-subject" className="form-label">Your Subject</label>
                                <input type="text" className="form-control" value={userData.subject}  name="subject" onChange={getData} />
                            </div>
                            <div className="col-12">
                                <label htmlFor="your-message" className="form-label">Your Message</label>
                                <textarea className="form-control" value={userData.massage} name="massage
                                
                                " rows="5" required onChange={getData} ></textarea>
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-md-6">
                                        <button  type="submit" className="btn btn-dark w-25 fw-bold" onClick={SubmitData} >Send</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        
        
    </div>)
}
export default ContactApp
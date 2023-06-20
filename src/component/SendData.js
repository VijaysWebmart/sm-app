import React,{useContext} from "react";
import {UserContext} from '../App.js'
const SendData = () =>
{
    const userBOD = "02/09/1997";
    const {getDOB} = useContext(UserContext);
    return (<div className="container mt-5">
                    <h2>Send Data To Parent</h2>
                    <button className="btn btn-primary " onClick={()=>getDOB(userBOD)}>Get User DOB</button>
            </div>)
}
export default SendData 
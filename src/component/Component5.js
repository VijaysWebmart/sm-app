import React, { useContext } from "react"
import { UserContext } from '../App.js';
const Component5 = () => {

    const { UserName,Email } = useContext(UserContext);
    return (<div>
                <h1>Component5</h1>
                <h2> USer Name Is : {UserName}</h2>
                <h2> Email Id Is : {Email}</h2>

                
            </div>)
}

export default Component5
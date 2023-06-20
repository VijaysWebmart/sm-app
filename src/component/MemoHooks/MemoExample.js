import React, { useState ,useMemo} from "react";
const MemoExample = () =>
{
    const [count , setCount ] = useState(0)
    const [btnStatus , setBtnStatus] = useState(false)
    const BigLoad = (num) =>
    {
        for(let i = 0 ; i<=1000000000 ;i++)
        {
           
        }
        return num
    }
   
    const increment = () =>
    {
        setCount(count + 1)
    }

    const bigvalue =  useMemo(()=>{
      return BigLoad(count)
    },[count])
    return (<div className="container mt-5">
                <h2>UseMemo Hooks In React</h2>
                <p>Usememo hooks is used for improving react application performce </p>
                <button className="btn btn-outline-dark" onClick={increment}>+</button>
                <p>Counter Value : {count}</p>
                <button className="mt-4 btn btn-dark" onClick={()=>setBtnStatus(!btnStatus)}>{btnStatus ? 'Thanks For Subscribe ' : 'Please Subscribe '}</button>
            </div>)
}

export default MemoExample
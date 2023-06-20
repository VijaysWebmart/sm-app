import React,{ useReducer} from "react";
const initialState = 0;
const reducer = (state , action) =>
{
    switch(action)
    {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        default :
            return state
    }
    
}
const ReducerHooks = () => {
 
    const [count , dispatch ] = useReducer(reducer,initialState);



    return (<div className="container mt-5 text-center">
        <h1>Reducer Hooks In React</h1>
        <div className="input-group mb-3 mx-auto mt-3 " style={{maxWidth:'300px'}}>
            <button className="btn btn-secondary" onClick={()=>dispatch('increment')}>Increment</button>
            <input type="text" className="form-control text-center" value={count} disabled readOnly />
            <button className="btn btn-secondary" onClick={()=>dispatch('decrement')}>Decrement</button>
            </div>
    </div>)
}

export default ReducerHooks
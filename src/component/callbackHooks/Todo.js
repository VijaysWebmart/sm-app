import React, { useState,useCallback, memo } from "react";
import ShowTodos from "./ShowTodos";
const Todo = () => {
    const [todo, setTodo] = useState([]);
    const [count, setCount] = useState(0)

    const increment = () =>
    {
        setCount(count + 1)
    }
    const addTodo = useCallback(()=>
    {
        setTodo((prev) => [...prev, ` New Entery`])
    },[todo])

   

    return (<div className="container mt-5 ">
        <h2 className="text-center my-4">Todo Component</h2>
        <ShowTodos todo={todo} addTodo={addTodo} />
        <p>Counter Value : {count}</p>
        <button onClick={()=>increment()}>Increment</button>
    </div>)
}

export default memo(Todo)
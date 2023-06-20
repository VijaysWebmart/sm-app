import React from "react";

const ShowTodos = ({ todo, addTodo }) => {

    console.log(`=================== /n New Entery Added /n ===================`)

    return (<div>


        <div className="row justify-content-end">
            <div className="col-md-4">
                <ul className="list-group mb-4">
                    <li className="list-group-item">An item</li>
                    {
                        todo.map((data, index) =>
                            <li className="list-group-item" key={index}>{index + data}</li>
                        )
                    }
                </ul>
            </div>
            <div className="col-md-4">
                <div className="form-group">

                    <div className="d-flex justify-content-end">
                        <button className="btn btn-dark " onClick={() => addTodo()}>Add Todo</button>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default ShowTodos 
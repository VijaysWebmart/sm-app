import React, { useState } from "react"
import { Data } from './Data'
import { Link } from "react-router-dom";
const HtmlBlocks = () => {
    const [items, setItems] = useState(Data);
    console.log(items)
    return (<div>
        <div className="container py-5 ">
            <h3 className="text-center mb-4">Html Blocks</h3>
            <div className="row">
                {
                    items.map((item) => {
                        return <div className="col-md-4 mb-4" >
                            <Link to={`/block/${item.id}`} >
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title text-center">{item.title}</h4>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    })
                }
            </div>
        </div>
    </div>)
}

export default HtmlBlocks 
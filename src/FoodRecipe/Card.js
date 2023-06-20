import React from "react";
const Card = ({ items }) => {
    return (<>
        {items.map((data) => <div className="col-md-4 mb-4">
            <div className="card shadow" style={{backgroundColor:'transparent'}}>
                <img src={data.img} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    
                    <p> {data.desc}</p>
                    <button className="btn btn-primary">Learn More</button>
                </div>
            </div>
        </div>
        )
        }
    </>
    )
}
export default Card
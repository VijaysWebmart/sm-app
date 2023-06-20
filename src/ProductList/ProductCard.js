const ProductCard = ({ item }) => {
    return (
        <div className="row">
            {
                item.map((item, index) =>
                    <div className="col-md-12 col-lg-4 mb-4 ">
                        <div className="card" key={index} style={{backgroundColor:'transparent'}}>
                            <div className="d-flex justify-content-between p-3">
                                <p className="lead mb-0">Today's Combo Offer</p>
                                <div
                                    className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                                    style={{ width: '35px', height: '35px' }}>
                                    <p className="text-white mb-0 small">x4</p>
                                </div>
                            </div>
                            <img src={item.image}
                                className="card-img-top product-img" alt="Laptop" />
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <p className="small"><a href="#!" className="text-muted">{item.category}</a></p>
                                    <p className="small text-danger"><s>$1099</s></p>
                                </div>

                                <div className="d-flex justify-content-between mb-3">
                                    <h5 className="mb-0 text-truncate">{item.title}</h5>
                                    <h5 className="text-dark mb-0">${item.price}</h5>
                                </div>

                                <div className="d-flex justify-content-between mb-2">
                                    <p className="text-muted mb-0">Available: <span className="fw-bold">6</span></p>
                                    <div className="ms-auto text-secondary">
                                        {
                                            item.rating.rate > 4 ? <div><i className="fa fa-star text-warning"></i> <i className="fas fa-star text-warning "></i>  <i className="fas fa-star text-warning"></i> <i className="fas fa-star text-warning"></i> <i className="fas fa-star-half-alt text-warning"></i> </div> :
                                                item.rating.rate > 3 ? <div><i className="fa fa-star text-warning"></i> <i className="fas fa-star text-warning "></i>  <i className="fas fa-star text-warning"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> </div> :
                                                    item.rating.rate > 2 ? <div><i className="fa fa-star text-warning"></i> <i className="fas fa-star text-warning "></i>  <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> </div> :
                                                        item.rating.rate > 1 ? <div><i className="fa fa-star text-warning"></i> <i className="fas fa-star "></i>  <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> </div> : ''
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default ProductCard
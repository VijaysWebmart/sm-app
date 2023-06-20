import React, { useEffect, useState } from "react";
import './ProductsList.css'
import { ProductData } from "./ApiData";
import ProductCard from './ProductCard'
import CatLogBtn from "./CatLogBtn";


const ProductsList = () => {

    const [item, setItem] = useState(ProductData);
    const categorys = [...new Set(ProductData.map((val) => val.category))]

    const filterItem = (curcat) => {
        const newItem = ProductData.filter((newItem) => {
            return newItem.category === curcat
        })

        setItem(newItem)
    }
    const allItems = () => {
        setItem(ProductData)
    }
    console.log(item)
    return (<div>

        <div class="row">
            <div className="col-md-3">
                <p>Product List</p>
            </div>

            <div className="col-md-9 pb-4 ps-4">
                <CatLogBtn filterItem={filterItem} allItems={allItems} data={ProductData} />
            </div>
        </div>
        <div className="row">
            <div className="col-md-3">
            </div>
            <div className="col-md-9">
                <section style={{  }}>
                    <div className="container py-5">

                        <ProductCard item={item} />


                    </div>
                </section>
            </div>
        </div>
    </div>


    )
}

export default ProductsList
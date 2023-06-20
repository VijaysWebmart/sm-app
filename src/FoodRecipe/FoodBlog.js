import React, { useEffect, useState } from "react";
import {Data} from './BlogData';
import Card from "./Card";
import FilterBtn from "./FilterBtn";

const FoodBlog = () => {

     const [items , setItems] = useState(Data)

     const setMenu = [...new Set(Data.map((menu)=>menu.category))]

     console.log("Availble Category...",setMenu)

     const FilterItems = (itemBy) =>
     {
         const filterMenu = Data.filter((data)=>data.category === itemBy)

         setItems(filterMenu)
     }
   
     
     console.log(Data)
  
    return (<div>
                <div className="text-center">
                    <h3>Food Blog app</h3>
                    <FilterBtn setMenu={setMenu} FilterItems={FilterItems} setItems={setItems} />
                </div>
                <div className="row p-5">
                    <Card  items={items} />
                </div>
            </div>)
}
export default FoodBlog
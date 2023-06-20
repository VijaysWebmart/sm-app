import React, { useEffect, useState } from "react";
import {Data} from './Data'
import { useParams } from "react-router-dom";
const Block = () =>
{

   const {id} = useParams();
   const [ blockItem , setBlockItem ] = useState([])
   
   useEffect(()=>
   {

     const [ selectBlock ] = Data.filter((data)=>data.id === id)
     setBlockItem(selectBlock)

   },[])
console.log("origanal Data " ,Data)
   console.log(blockItem)
    return (<div>
               <div className="container py-5">
                
                  <div className="row">
                     <div className="col-md-4 d-flex align-items-start">
                         <div className=" bg-secondary" style={{height:'350px',width:'350px'}} >
                         
                         </div>
                     </div>
                     <div className="col-md-8">
                        <div className="alert alert-dark mb-3">
                        <h3>HTML Code</h3>
                         <p></p>

                        </div>

                        <div className="alert alert-warning">
                           <h3 className="alert-title">Css Code</h3>
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error omnis aut facere nihil aliquid. Ex in quaerat deleniti repellendus laborum temporibus itaque? Adipisci, corrupti eum dolorum ex repellendus eligendi recusandae.
                           
                        </div>

                        <div className="alert alert-info">
                        <h3 className="alert-title">JavaScript Code</h3>
                       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error omnis aut facere nihil aliquid. Ex in quaerat deleniti repellendus laborum temporibus itaque? Adipisci, corrupti eum dolorum ex repellendus eligendi recusandae.
                        
                     </div>
                     </div>
                  </div>
               </div>
           </div>
           )
}

export default Block
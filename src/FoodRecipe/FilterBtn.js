import { Data } from "./BlogData"
const FilterBtn = ({ setMenu , FilterItems , setItems}) =>
{

    return (<div class="d-flex justify-content-center" style={{gap:'10px'}}>
                 <button className="btn btn-dark" onClick={()=>setItems(Data)} >All</button>
                {
                  setMenu.map((menus,id)=>
                  <button className="btn btn-dark" key={id} onClick={()=>FilterItems(menus)}> {menus} </button>
                  )
                }
             </div>)
}
export default FilterBtn
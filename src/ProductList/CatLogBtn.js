const CatLogBtn = ({filterItem , allItems , data}) =>
{
    const CatLog = [...new Set(data.map((val)=>val.category))]

    return (<div className="d-flex justify-content-start" style={{gap:'10px'}}>
              <button className="btn btn-outline-dark" onClick={allItems}> All</button>
              {
                CatLog.map((btnVal , id) =>  
                <button className="btn btn-outline-dark" key={id} onClick={()=>filterItem(btnVal)}> {btnVal} </button>
                 )}
           </div>
        )
}
export default CatLogBtn
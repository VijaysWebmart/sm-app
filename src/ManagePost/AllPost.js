import { Link } from "react-router-dom";
import { Data } from "./Data";
import React, { useEffect, useState } from "react";

const AllPost = () => {
  // const [post, setPost] = useState([]);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts").then((data) => data.json()).then((result) => setPost(result))

  // }, [])


const [currentPage, setCurrentPage] = useState(1);
const [recordsPerPage,setRecordsPerPage] = useState(10);
const lastIndex = currentPage * recordsPerPage;
const firstIndex = lastIndex - recordsPerPage;


const records = Data.slice(firstIndex, lastIndex)

const nPages = Math.ceil(Data.length / recordsPerPage);

console.log(`Post lenght. ${Data.length}  AND RecordsPerPage ${recordsPerPage}` )


const numbers = [...Array(nPages + 1).keys()].slice(1);

const prePage = () =>
{
     if(currentPage !== 1)
     {
      setCurrentPage(currentPage - 1)
     }
}

const cPage = (id)=>
{
  setCurrentPage(id)
}
const nextPage = ()=>
{
     if(currentPage !== nPages)
     {
       setCurrentPage(currentPage + 1)
     }
}

const selectNoPages = (e) =>
{
  setRecordsPerPage(e.target.value);
  setCurrentPage(1)
}
console.log(numbers)
return (
            <div class="container py-5">

                      <h4 className="text-center">All Post</h4>
                      <div className="form-group w-25 mb-4 ml-auto">
                         <select className="form-control" onChange={(e)=>selectNoPages(e)} defaultValue={10}>
                           <option value="5">5</option>
                           <option value="10" >10</option>
                           <option value="25">25</option>
                           <option value="50">50</option>
                           <option value="75">75</option>
                           <option value="100">100</option>
                         </select>
                      </div>
                      <table className="table table-dark">
                        <thead>
                          <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Body</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            records.map((data,index) =>
                              <tr>
                                <td>{data.id}</td>
                                <td>{data.title}</td>
                                <td>{data.body}</td>
                                <td><Link to={`/post/${data.id}`} className="btn btn-primary btn-sm" style={{ width: '100px' }}>Read More</Link></td>
                              </tr>)
                          }
                        </tbody>

                      </table>

                      <div className="d-flex justify-content-end">
                        <nav aria-label="Page navigation example bg-dark ">
                          <ul class="pagination " >
                            <li class="page-item"><a class="page-link" href="#" onClick={prePage}>Previous</a></li>
                            {
                              numbers.map((n, i) => {
                                return <li className={`page-item ${currentPage === n ? 'active' : ''}`} ><a class="page-link" href="#" key={i} onClick={()=>cPage(n)}>{n}</a></li>

                              })
                            }
                            <li class="page-item"><a class="page-link" href="#" onClick={nextPage}>Next</a></li>
                          </ul>
                        </nav>
                      </div>
            </div>

)


}

export default AllPost
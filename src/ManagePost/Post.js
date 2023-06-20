import React, { useEffect,useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
const Post = () =>
{
    const { id } = useParams();
    const [post ,setPost ] = useState([])
    useEffect(()=>
    {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((data)=>data.json()).then((result)=>setPost(result))
    },[])
    console.log(post)
    return (<div className="container py-5">
                <div className="d-flex justify-content-end ">
                   <Link to="/all-post" className="btn btn-dark">{`<< Back `}</Link>
                </div>
               <div className="row justify-content-center">
                 <div className="col-md-6">
                  <div className="alert alert-dark">
                     <h3>{post.title}</h3>
                     <span>{`Post ID : ${post.id}`}</span>
                     <hr />
                     <p>{post.body}</p>
                  </div>
                 </div>
               </div>
            </div>
            )
}

export default Post
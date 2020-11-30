import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post/Post'

function Posts({setCurrentId}){
    const posts = useSelector((state)=>state.posts)
    console.log(posts)
    return(
       !posts.length ? <h1>Loading...</h1> : (
           <div>
               {posts.map((post)=>(
                   <div key={post._id}>
                       <Post post={post} setCurrentId={setCurrentId} />
                   </div>
               ))}
           </div>
       )
    )
}
export default Posts
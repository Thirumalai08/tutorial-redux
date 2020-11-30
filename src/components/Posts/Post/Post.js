import React from 'react'
import { useDispatch } from 'react-redux'
import { deletePost } from '../../../actions/posts'

function Post({post,setCurrentId}){
    const dispatch = useDispatch()
    return(
        <div>
            <h2>{post.name}</h2>
            <h2>{post.price}</h2>
            <h2>{post.flavor}</h2>
            <button
            onClick={()=>dispatch(deletePost(post._id))}
            >
                Delete
            </button>
            <button
            onClick={()=>setCurrentId(post._id)}
            >Edit</button>
        </div>
    )
}
export default Post
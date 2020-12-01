import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { createPost,updatePost } from '../../actions/posts'
// for update operation
//import {useDispatch,useSelector} from 'react-redux'

function Form({currentId,setCurrentId}){
    const dispatch = useDispatch()
    const [postData,setPostData] = useState({
        name: '',
        price:'',
        flavor: '' 
    })
    // for geting the data to update operation for currentID
    const post = useSelector((state)=> currentId ? state.posts.find((p)=>p._id === currentId) : null)
    useEffect(()=>{
        if(post) setPostData(post)
    },[post])
    const handleSubmit = (event) => {
        event.preventDefault()
        if(currentId) {
            dispatch(updatePost(currentId,postData))
        } else {
        dispatch(createPost(postData))
        }
        clear()
    }
    const clear = () => {
        setCurrentId(null)
    }
    return(
        <div>
            <h1>Form</h1>
            <h3>{currentId ? 'Edit' : 'Create'}</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Cake Name" 
                value={postData.name}
                onChange={(e)=>setPostData({...postData,name:e.target.value})}
                />
                <input type="number" placeholder="Enter Price" 
                value={postData.price}
                onChange={(e)=>setPostData({...postData,price:e.target.value})}
                />
                <input type="text" placeholder="Enter Flavor Name" 
                value={postData.flavor}
                onChange={(e)=>setPostData({...postData,flavor:e.target.value})}
                />
                <button
                type="submit"
                >
                    submit
                </button>
            </form>
        </div>
    )
}
export default Form
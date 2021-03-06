import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Form from './components/Form/Form'
import Posts from './components/Posts/Posts'
import {getPosts} from './actions/posts'
function App(){
    const [currentId,setCurrentId] = useState(null)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getPosts())
    },[currentId,dispatch])
    return(
        <div>
            Hello World
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            <Posts setCurrentId={setCurrentId} />
        </div>
    )
}
export default App
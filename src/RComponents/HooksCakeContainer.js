import React from 'react'
import {useSelector,useDispatch} from 'react-redux' // close related to mapstatetoprops
import { buyCake } from '../redux'
function HooksCakeContainer(){
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch() // close related to mapdispatch to props
    return(
        <div>
            <h2>No. Of Cakes:{numOfCakes}</h2>
            <button
            onClick={()=>dispatch(buyCake())}
            >Buy Cakes</button>
        </div>
    )
}
export default HooksCakeContainer
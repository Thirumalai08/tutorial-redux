import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { buyIceCream } from '../redux'

function HooksIceCreamContainer(){
    const numOfIce = useSelector(state => state.icecream.numOfIce)
    const dispatch = useDispatch()
    return(
        <div>
            <h2>No. Of Cakes:{numOfIce}</h2>
            <button
            onClick={()=>dispatch(buyIceCream())}
            >Buy IceCream</button>
        </div>
    )
}
export default HooksIceCreamContainer
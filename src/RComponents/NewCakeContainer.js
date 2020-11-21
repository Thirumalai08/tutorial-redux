import React, { useState } from 'react'
import {connect} from 'react-redux'
import { buyCake } from '../redux/'

function NewCakeContainer(props){
    // state for cakes count buying
    const [number,setNumber] = useState(1)
    return(
        <div>
            <h2>Number of Cakes:{props.numOfCakes}</h2>
            <input type="text" value={number}
            onChange={event => setNumber(event.target.value)}
            />
            <button
            onClick={()=>props.buyCake(number)}
            >Buy {number} Cakes</button>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}
const mapDispatchToProps = dispatch => {
    return {
        buyCake: (number) => dispatch(buyCake(number)) //number from cake
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer)
import React from 'react'
import {connect} from 'react-redux'
import buyBook from '../redux/actions/buyBook'

 const Main = (props) => {
     console.log(props)
    return (
        <div>
            <p>we have x book</p>
            <button onClick={()=>{props.buy()}} >Buy Book</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return {
        buy: ()=>{dispatch(buyBook())}
    }
}
const mapStateToProps = (state) =>{
    return{
        book: state.book
    }

}


export default connect(mapStateToProps,mapDispatchToProps)(Main) 
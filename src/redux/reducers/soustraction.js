const rootReducer = (state={book:50},action) =>{
    if(action.type == 'BUY-BOOK'){
        return {
            ...state,
            book: state.book - 1 
        }
    }
    else
    return state

}


export default rootReducer
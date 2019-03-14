import * as actionTypes from '../actionTypes/index';

const initialState = {
  urls:[],
  index:0,
  plusDisable: false,
  negativeDisable: true
}

export default (state = initialState, action) => {
  switch (action.type) {
    // call the fetch action
    case actionTypes.FETCH_CATS: {
      return {
        ...state,
        urls: action.payload.data
      }
    }
    // function to call the increment 
    case actionTypes.INCREMENT:{
      let index = state.index
      if (index >= 4){
       return { 
         ...state,
         plusDisable: true
       }
      }
      index += 1;
      
      return {
        ...state,
        index,
        negativeDisable: false
      }
    }

    // function to call the 
    case actionTypes.DECREMENT:{
      let index = state.index;
      if (state.index <= 0) {
       return {
         ...state,
         negativeDisable: true
       }
      }
      index -= 1

      return {
        ...state,
        index,
        plusDisable: false
      }
    }

    default:
      return state
  }
}

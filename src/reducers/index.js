import * as actionTypes from '../actionTypes/index';

const initialState = {
  urls:[],
  index:0,
  plusDisable: false,
  negativeDisable: true
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CATS: {
      return {
        ...state,
        urls: action.payload.data
      }
    }
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

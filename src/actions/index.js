import * as actionTypes from '../actionTypes/index'

// FETCHING DATA FROM GIFHY API 
export const fetchCats = (limit) => dispatch => {
    // this api should be in a .dotenv file but I figure this would be easier plus I hardcoded the limit and search of 'cats' since that what the readme wanted.
    fetch('http://api.giphy.com/v1/gifs/search?api_key=vfGw3vTUutKgMVo54KqmmwC6fW70eat2&q=cats&limit=5')
    .then(res => res.json())
    .then(images =>
        dispatch({
            type:actionTypes.FETCH_CATS,
            payload: images
        }))
    .catch(err => console.error(err));
}

// INCREMENT INDEX 
export const incrementIndex = () => ({
    type:actionTypes.INCREMENT
})
// DECREMENT INDEX
export const decrementIndex = () => ({
    type:actionTypes.DECREMENT
})


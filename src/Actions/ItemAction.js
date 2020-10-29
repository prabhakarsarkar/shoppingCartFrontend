import axios from 'axios'
import { GET_ITEM, ADD_ITEM, DELETE_ITEM, ITEM_LOADING } from "./Type";

export const getItem = () => dispatch => {
    dispatch(setItemLoading());
    axios
        .get("/get")
        .then(res => dispatch({
            type: GET_ITEM,
            payload: res.data
        }))
}


export const addItem = item =>dispatch=> {
    // console.log(id);
    axios
        .post('/post', item)
        .then(res =>
            dispatch({
                type: ADD_ITEM,
                payload: res.data

            }))
}


export const deleteItem = id =>dispatch=> {
   axios.delete(`/delete/${id}`)
   .then(res=>
    dispatch({
        type:DELETE_ITEM,
        payload:id
    })
    )
    
}

export const setItemLoading = () => {
    return {
        type: ITEM_LOADING
    }
}
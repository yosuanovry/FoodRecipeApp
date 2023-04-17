import axios from "axios";

const url = `${process.env.REACT_APP_BASE_URL}`;


export const GetCategory = () => async (dispatch,getState) => {
    try{
        dispatch({type:"GET_CATEGORY_REQUEST"})
        const result = await axios.get(`${url}/category`)
        console.log(result)
        result.data.data && dispatch({type:"GET_CATEGORY_SUCCESS",payload:result.data.data})
    } catch(err){
        console.log(err)
        dispatch({type:"GET_CATEGORY_ERROR"})
    }
}
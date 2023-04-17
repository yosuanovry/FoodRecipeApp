import axios from "axios";

const url = `${process.env.REACT_APP_BASE_URL}`;


export const GetUserDataByEmail = (email) => async (dispatch,getState) => {
    try{
        dispatch({type:"GET_USERBYEMAIL_REQUEST"})
        const result = await axios.get(`${url}/users/${email}`)
        result.data.data && dispatch({type:"GET_USERBYEMAIL_SUCCESS",payload:result.data.data})
    } catch(err){
        console.log(err)
        dispatch({type:"GET_USERBYEMAIL_ERROR"})
    }
}

import axios from "axios";


const url = "https://puce-victorious-bandicoot.cyclic.app"

export const LoginUser = (data, navigate) => async (dispatch,getState) => {
    try{
        dispatch({type:"LOGIN_REQUEST"})
        const result = await axios.post(`${url}/auth/login`,data)
        console.log(result)
        result.data.data && dispatch({type:"LOGIN_SUCCESS",payload:result.data.data})
        navigate.navigate("Home")
    } catch(err){
        console.log(err)
        dispatch({type:"LOGIN_ERROR"})
    }
}

export const LogoutUser = (navigate) => {
    return(dispatch,getState) => {
        dispatch({type:"DELETE_STORE_TOKEN"})
        navigate.navigate("Login")
    }
}

export const RegisterUser = (data, navigate) => async (dispatch,getState) => {
    try{
        dispatch({type:"REGISTER_REQUEST"})
        const result = await axios.post(`${url}/auth/register/user`, data)
        console.log(result)
        result.data.data && dispatch({type:"REGISTER_SUCCESS",payload:result.data.data})
        navigate.navigate("Login")
    } catch(err){
        console.log(err)
        dispatch({type:"REGISTER_ERROR"})
    }
}
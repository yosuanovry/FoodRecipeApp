import axios from "axios";

const url = "https://puce-victorious-bandicoot.cyclic.app"


export const GetMenu = () => async (dispatch,getState) => {
    try{
        dispatch({type:"GET_MENU_REQUEST"})
        const result = await axios.get(`${url}/recipes`)
        console.log(result)
        result.data.data && dispatch({type:"GET_MENU_SUCCESS",payload:result.data.data})
    } catch(err){
        console.log(err)
        dispatch({type:"GET_MENU_ERROR"})
    }
}

export const GetMenuByUser = (token) => async (dispatch,getState) => {
    try{
        dispatch({type:"GET_MENU_BYUSER_REQUEST"})
        const result = await axios.get(`${url}/recipes/my-recipes`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(result)
        dispatch({type:"GET_MENU_BYUSER_SUCCESS",payload:result.data.data})
    } catch(err){
        console.log(err)
        dispatch({type:"GET_MENU_BYUSER_ERROR"})
    }
}

export const addMenu = (data,navigate) => async (dispatch)=> {
    try{
        dispatch({type:'ADD_MENU_PENDING'})
        const result = await axios.post(`${url}/recipes`,data,headers)
        const payload = result.data
        dispatch({type:'ADD_MENU_SUCCESS',payload})
        navigate.navigate("Home")
    } catch(err){
        dispatch({type:'ADD_MENU_ERROR',payload:err.response.data.message})
        console.log("addMenu error")
        console.log(err)
    }
}

export const deleteMenu = (id, token) => async (dispatch)=> {
    try{
        dispatch({type:'DELETE_MENU_REQUEST'})
        const result = await axios.delete(`${url}/recipes/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const menu = result.data
        dispatch({type:'DELETE_MENU_SUCCESS',payload:menu})
    } catch(err){
        dispatch({type:'DELETE_MENU_ERROR',payload:err.response.data.message})
        console.log("DELETEMenu error")
        console.log(err)
    }
}

export const GetMenuById = (id) => async (dispatch,getState) => {
    try{
        dispatch({type:"GET_MENU_BYID_REQUEST"})
        const result = await axios.get(`${url}/recipes/${id}`)
        console.log(result)
        dispatch({type:"GET_MENU_BYID_SUCCESS",payload:result.data.data})
    } catch(err){
        console.log(err)
        dispatch({type:"GET_MENU_BYID_ERROR"})
    }
}





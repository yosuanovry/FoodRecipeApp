import axios from "axios";

const url = `${process.env.REACT_APP_BASE_URL}`;


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

export const addMenu = (data, token, navigation) => async (dispatch) => {
    try {
      dispatch({type : 'ADD_MENU_REQUEST'})
      const result = await axios.post(`${url}/recipes`, data, {
          headers: {
              "Content-Type": "multipart/form-data",
              "Authorization" : `Bearer ${token}`
          }
      })
      dispatch({type: 'ADD_MENU_SUCCESS', payload: result.data.data})
      navigation.navigate("My Recipes")
    } catch (err) {
      console.log(err)
      dispatch({type: 'ADD_MENU_ERROR'})
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

export const editMenu = (id, data, token, navigation) => async (dispatch) => {
    try {
      dispatch({type : 'EDIT_MENU_REQUEST'})
      const result = await axios.put(`${url}/recipes/${id}`, data, {
          headers: {
              "Content-Type": "multipart/form-data",
              "Authorization" : `Bearer ${token}`
          }
      })
      dispatch({type: 'EDIT_MENU_SUCCESS', payload: result.data.data})
      navigation.navigate("My Recipes")
    } catch (err) {
      console.log(err)
      dispatch({type: 'EDIT_MENU_ERROR'})
    }
  }

  export const searchMenu = (search='') => async (dispatch) => {
    try {
      dispatch({type : 'SEARCH_MENU_REQUEST'})
      const result = await axios.get(`${url}/recipes?search=${search}`)
      const menu = result.data.data
      dispatch({
        type: 'SEARCH_MENU_SUCCESS', payload: menu} )
    } catch (error) {
      dispatch({
        type: 'SEARCH_MENU_ERROR',
        payload: error.message
      })
    }
  }


  





import axios from "axios";

const url = `${process.env.REACT_APP_BASE_URL}`;

export const editUser = (data, token, navigate) => async (dispatch) => {
    try {
      dispatch({type : 'EDIT_USER_REQUEST'})
      const result = await axios.put(`${url}/users/update-profile`, data, {
          headers: {
              "Content-Type": "multipart/form-data",
              "Authorization" : `Bearer ${token}`
          }
      })
      dispatch({type: 'EDIT_USER_SUCCESS', payload: result.data.data})
      navigate.navigate("Login")
      dispatch({type:"DELETE_STORE_TOKEN"})
    } catch (err) {
      console.log(err)
      dispatch({type: 'EDIT_USER_ERROR'})
    }
  }
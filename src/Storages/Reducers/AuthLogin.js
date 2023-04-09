const initialState = {
    data: null,
    isLoading:false,
    isError:false,
    isSuccess:true
}

const Auth_Login = (state = initialState, {type,payload}) => {
    switch(type){
        case "LOGIN_REQUEST":
            return {
                ...state,
                isLoading:true,
                isError:false,
                isSuccess:false
            }
        case "LOGIN_SUCCESS":
            return {
                ...state,
                data:payload,
                isLoading:false,
                isError:false,
                isSuccess:true
            }
        case "LOGIN_ERROR":
            return {
            ...state,
            data:payload,
            isLoading:false,
            isError:true,
            isSuccess:false
        }
        case "DELETE_STORE_TOKEN":
            return {
            ...state,
            data:null,
            isLoading:false,
            isError:false,
            isSuccess:true
        }
        default:
            return state
    }
}

export default Auth_Login;
